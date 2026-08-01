import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type OAuthResult = {
  data?: {
    client?: { name?: string; redirect_uri?: string } | null;
    scope?: string | null;
    redirect_url?: string;
    redirect_to?: string;
  } | null;
  error?: { message: string } | null;
};

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
  approveAuthorization: (id: string) => Promise<OAuthResult>;
  denyAuthorization: (id: string) => Promise<OAuthResult>;
};

const oauth = () =>
  (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<OAuthResult["data"]>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Thiếu tham số authorization_id.");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) {
        setError(error.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("Máy chủ ủy quyền không trả về địa chỉ chuyển hướng.");
      return;
    }
    window.location.href = target;
  }

  const clientName = details?.client?.name ?? "ứng dụng";

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted p-6">
      <div className="w-full max-w-md bg-background rounded-xl border p-6 shadow-sm">
        {error ? (
          <>
            <h1 className="text-lg font-bold mb-2">Không thể xử lý yêu cầu ủy quyền</h1>
            <p className="text-sm text-muted-foreground">{error}</p>
          </>
        ) : !details ? (
          <p className="text-sm text-muted-foreground">Đang tải…</p>
        ) : (
          <>
            <h1 className="text-lg font-bold mb-2">
              Kết nối {clientName} với Cổng Thông tin điện tử tỉnh Khánh Hòa
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              {clientName} sẽ có thể sử dụng các công cụ của ứng dụng này với tư cách là bạn.
            </p>
            <ul className="text-sm text-muted-foreground mb-4 list-disc pl-5 space-y-1">
              <li>Chia sẻ thông tin hồ sơ cơ bản và địa chỉ email của bạn</li>
              {details.client?.redirect_uri && (
                <li className="break-all">Chuyển hướng tới: {details.client.redirect_uri}</li>
              )}
              {details.scope && <li>Phạm vi yêu cầu: {details.scope}</li>}
            </ul>
            <p className="text-xs text-muted-foreground mb-5">
              Việc này không bỏ qua các quyền và chính sách bảo mật của ứng dụng.
            </p>
            <div className="flex gap-3">
              <button
                disabled={busy}
                onClick={() => decide(true)}
                className="flex-1 bg-primary text-primary-foreground rounded-md py-2 text-sm font-semibold disabled:opacity-60"
              >
                Chấp thuận
              </button>
              <button
                disabled={busy}
                onClick={() => decide(false)}
                className="flex-1 border rounded-md py-2 text-sm font-semibold disabled:opacity-60"
              >
                Hủy kết nối
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default OAuthConsent;
