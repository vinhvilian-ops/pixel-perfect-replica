import { useState } from "react";
import TabButton from "./TabButton";
import NewsListItem from "./NewsListItem";
import SidebarPanel from "./SidebarPanel";
import GradientBanner from "./GradientBanner";
import duongSat from "@/assets/duong-sat.jpg";
import caoToc from "@/assets/cao-toc.jpg";
import xayDung from "@/assets/xay-dung.jpg";
import hoiNghi from "@/assets/hoi-nghi.jpg";

const policyNews = [
  { img: caoToc, alt: "Bảo hiểm", title: "Sửa quy định về xử phạt vi phạm hành chính lĩnh vực kinh doanh bảo hiểm", date: "24/03/2026" },
  { img: hoiNghi, alt: "Chính phủ", title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 14–20/3/2026", date: "24/03/2026" },
  { img: xayDung, alt: "Đất đai", title: "Sửa đổi, bổ sung quy định về đơn giá bồi thường nhà, công trình khi Nhà nước thu hồi đất", date: "20/03/2026" },
];

const tags = ["An toàn giao thông", "Phòng cháy, chữa cháy", "Ứng phó sự cố, thiên tai", "Nông nghiệp – TN&MT", "Chuyển đổi số", "Chương trình MTQG", "Khoa học và Công nghệ", "Phổ biến GDPL", "Đường dây nóng"];

const stats = [
  { label: "Đang online", value: "201", color: "text-green" },
  { label: "Tháng trước", value: "216.828", color: "text-teal" },
  { label: "Tháng này", value: "232.385", color: "text-accent-dark" },
  { label: "Tổng truy cập", value: "39.286.912", color: "text-red" },
];

const PolicySection = () => {
  const [activeTab, setActiveTab] = useState<"csm" | "tv">("csm");

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          <div>
            <div className="flex gap-0 mb-5 border-b-2 border-gray-200">
              <TabButton label="Chính sách mới" active={activeTab === "csm"} onClick={() => setActiveTab("csm")} />
              <TabButton label="Tham vấn và lấy ý kiến" active={activeTab === "tv"} onClick={() => setActiveTab("tv")} />
            </div>

            {activeTab === "csm" && (
              <>
                <a href="#" className="grid grid-cols-2 rounded-xl overflow-hidden shadow-sm border border-gray-200 no-underline text-foreground mb-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="min-h-[200px] overflow-hidden bg-gray-200">
                    <img src={duongSat} alt="Đường sắt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={480} height={200} />
                    <span className="absolute top-2.5 left-2.5 bg-red text-primary-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full">Chính sách mới</span>
                  </div>
                  <div className="p-6 flex flex-col justify-center gap-2">
                    <div className="text-base font-bold leading-snug group-hover:text-primary transition-colors">Mức xử phạt vi phạm quy định về kinh doanh đường sắt</div>
                    <div className="text-xs text-gray-500">📅 20/03/2026</div>
                    <div className="text-[13px] font-bold text-red flex items-center gap-1">Đọc tiếp →</div>
                  </div>
                </a>
                {policyNews.map((item, i) => <NewsListItem key={i} {...item} />)}
                <div className="mt-3 flex justify-end">
                  <a href="#" className="text-[13px] font-bold text-red flex items-center gap-1 hover:gap-2.5 transition-all">Xem tất cả bài viết ›</a>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <GradientBanner icon="📈" title="Dự án kêu gọi đầu tư" subtitle="Tỉnh Khánh Hòa" gradient="bg-gradient-to-br from-primary to-teal" />
                  <GradientBanner icon="⚖" title="Hỗ trợ pháp lý" subtitle="Cho doanh nghiệp" gradient="bg-gradient-to-br from-accent-dark to-accent" />
                </div>
              </>
            )}

            {activeTab === "tv" && (
              <div className="py-12 text-center text-gray-500">
                <div className="text-5xl mb-4">📢</div>
                <div className="text-[15px] font-semibold">Các văn bản đang lấy ý kiến nhân dân</div>
                <a href="#" className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg no-underline text-[13px] font-bold">Xem danh sách →</a>
              </div>
            )}
          </div>

          <div>
            <SidebarPanel title="Thông tin chuyên đề" icon="🏷" variant="green">
              <div className="px-4 py-3 flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <a key={i} href="#" className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 no-underline hover:bg-primary hover:text-primary-foreground transition-all">{tag}</a>
                ))}
              </div>
            </SidebarPanel>

            <SidebarPanel title="Thống kê truy cập" icon="📊" variant="green">
              <div className="p-4 flex flex-col gap-2.5">
                {stats.map((s, i) => (
                  <div key={i} className="flex justify-between items-center px-3 py-2 bg-gray-50 rounded-lg">
                    <span className="text-[13px] text-gray-700">{s.label}</span>
                    <span className={`text-[15px] font-extrabold ${s.color}`}>{s.value}</span>
                  </div>
                ))}
              </div>
            </SidebarPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
