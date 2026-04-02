import { useState } from "react";
import TabButton from "./TabButton";
import NewsListItem from "./NewsListItem";
import SidebarPanel from "./SidebarPanel";
import GradientBanner from "./GradientBanner";
import xayDung from "@/assets/xay-dung.jpg";
import chuyenDoiSo from "@/assets/chuyen-doi-so.jpg";
import duaThuyen from "@/assets/dua-thuyen.jpg";
import yTe from "@/assets/y-te.jpg";
import hocSinh from "@/assets/hoc-sinh.jpg";
import bongDa from "@/assets/bong-da.jpg";
import duongSat from "@/assets/duong-sat.jpg";
import caoToc from "@/assets/cao-toc.jpg";
import hoiNghi from "@/assets/hoi-nghi.jpg";

const citizenNews = [
  { img: xayDung, alt: "Xây dựng", title: "Công bố giá vật liệu xây dựng ngay khi có biến động thị trường", date: "27/03/2026" },
  { img: chuyenDoiSo, alt: "Đăng kiểm", title: "Cục Đăng kiểm tường minh nhiều vấn đề liên quan đến quy trình kiểm tra khí thải với động cơ diesel", date: "27/03/2026" },
  { img: bongDa, alt: "Marathon", title: "Hơn 12.000 vận động viên tranh tài tại Giải vô địch quốc gia Marathon – Báo Tiền Phong lần thứ 67", date: "26/03/2026" },
  { img: hoiNghi, alt: "Hội nghị", title: "Hội nghị triển khai Nghị quyết về phát triển kinh tế - xã hội vùng Duyên hải Nam Trung Bộ", date: "25/03/2026" },
  { img: caoToc, alt: "Cao tốc", title: "Đẩy nhanh tiến độ thi công các tuyến cao tốc trọng điểm khu vực miền Trung", date: "25/03/2026" },
  { img: duongSat, alt: "Đường sắt", title: "Khánh Hòa đặt mục tiêu 100% xã, phường, đặc khu đạt chuẩn phát triển văn hóa toàn diện", date: "24/03/2026" },
  { img: yTe, alt: "Y tế", title: "Kế hoạch phòng bệnh phong giai đoạn 2026 – 2030", date: "24/03/2026" },
];

const citizenNews2 = [
  { img: yTe, alt: "Hạt nhân", title: "Tăng mạnh mức phạt, siết chặt quản lý hoạt động bức xạ, hạt nhân", date: "26/03/2026" },
  { img: hocSinh, alt: "Thi THPT", title: "Lịch THI TỐT NGHIỆP THPT năm 2026", date: "25/03/2026" },
  { img: duaThuyen, alt: "Lao động", title: "Hưởng ứng Ngày Thế giới phòng, chống bệnh lao 24-3: Phát hiện sớm để tiến tới chấm dứt bệnh lao", date: "24/03/2026" },
  { img: duongSat, alt: "Đường sắt", title: "Quy hoạch mạng lưới đường sắt quốc gia thời kỳ 2021–2030, tầm nhìn đến năm 2050", date: "23/03/2026" },
  { img: xayDung, alt: "Quy hoạch", title: "Phê duyệt quy hoạch sử dụng đất giai đoạn 2026–2030 trên địa bàn tỉnh", date: "22/03/2026" },
  { img: chuyenDoiSo, alt: "Chuyển đổi số", title: "Nâng cao hiệu quả phối hợp trong triển khai các dự án đầu tư xây dựng", date: "21/03/2026" },
  { img: caoToc, alt: "Giao thông", title: "Xây dựng Khánh Hòa trở thành điểm đến của các sự kiện văn hóa, nghệ thuật và giải trí biển", date: "20/03/2026" },
];

const policyNews = [
  { img: caoToc, alt: "Bảo hiểm", title: "Sửa quy định về xử phạt vi phạm hành chính lĩnh vực kinh doanh bảo hiểm", date: "24/03/2026" },
  { img: hoiNghi, alt: "Chính phủ", title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 14–20/3/2026", date: "24/03/2026" },
  { img: xayDung, alt: "Đất đai", title: "Sửa đổi, bổ sung quy định về đơn giá bồi thường nhà, công trình khi Nhà nước thu hồi đất", date: "20/03/2026" },
];

const announcements = [
  "Thông báo – Về việc điều chuyển giao cho cơ quan, đơn vị...",
  "Nghị quyết về việc công bố danh sách chính thức những...",
  "Nghị quyết về việc công bố kết quả bầu cử đại biểu HĐND...",
];

const pressItems = [
  "Thông cáo báo chí về công bố kết quả cuộc bầu cử đại biểu Quốc hội...",
  "Người phát ngôn và cung cấp thông tin cho báo chí của UBND tỉnh",
  "Kiểm tra, xử lý thông tin báo chí phản ánh tình trạng biến, bảng...",
];

const promoLinks = [
  { title: "AI PHÁP LUẬT", sub: "Cổng Pháp luật quốc gia", gradient: "bg-gradient-to-br from-primary to-[#1a1a8e]", bg: chuyenDoiSo },
  { title: "THÔNG TIN DỰ ÁN", sub: "ĐIỆN HẠT NHÂN NINH THUẬN", gradient: "bg-gradient-to-br from-primary-light to-teal", bg: duongSat },
  { title: "BẢN ĐỒ SỐ", sub: "65 xã, phường, đặc khu", gradient: "bg-gradient-to-br from-[#00588a] to-teal", bg: caoToc },
  { title: "TRA CỨU GIÁ ĐẤT", sub: "Tỉnh Khánh Hòa", gradient: "bg-gradient-to-br from-[#1a7a42] to-green", bg: xayDung },
  { title: "CÔNG KHAI NGÂN SÁCH", sub: "Tỉnh Khánh Hòa", gradient: "bg-gradient-to-br from-accent-dark to-accent", bg: hoiNghi },
  { title: "CƠ SỞ DỮ LIỆU QUỐC GIA", sub: "Về văn bản pháp luật", gradient: "bg-gradient-to-br from-primary to-primary-light", bg: yTe },
];

const tags = ["An toàn giao thông", "Phòng cháy, chữa cháy", "Ứng phó sự cố, thiên tai", "Nông nghiệp – TN&MT", "Chuyển đổi số", "Chương trình MTQG", "Khoa học và Công nghệ", "Phổ biến GDPL", "Đường dây nóng"];

const stats = [
  { label: "Đang online", value: "201", color: "text-green" },
  { label: "Tháng trước", value: "216.828", color: "text-teal" },
  { label: "Tháng này", value: "232.385", color: "text-accent-dark" },
  { label: "Tổng truy cập", value: "39.286.912", color: "text-red" },
];

const CitizenNewsSection = () => {
  const [activeTab, setActiveTab] = useState<"cd" | "dn">("cd");
  const [policyTab, setPolicyTab] = useState<"csm" | "tv">("csm");

  return (
    <section className="py-6 bg-background">
      <div className="container">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          {/* Left column - all content flows continuously */}
          <div>
            {/* Citizen News */}
            <div className="flex gap-0 mb-5 border-b-2 border-gray-200">
              <TabButton label="Tin nổi bật dành cho công dân" active={activeTab === "cd"} onClick={() => setActiveTab("cd")} />
              <TabButton label="Tin nổi bật dành cho doanh nghiệp" active={activeTab === "dn"} onClick={() => setActiveTab("dn")} />
            </div>

            {activeTab === "cd" && (
              <>
                <a href="#" className="grid grid-cols-2 rounded-xl overflow-hidden shadow-sm border border-gray-200 no-underline text-foreground mb-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="relative min-h-[200px] overflow-hidden bg-gray-200">
                    <img src={hoiNghi} alt="Hội nghị" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={480} height={200} />
                    <span className="absolute top-2.5 left-2.5 bg-red text-primary-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full">Tin nổi bật</span>
                  </div>
                  <div className="p-6 flex flex-col justify-center gap-2">
                    <div className="text-base font-bold leading-snug group-hover:text-primary transition-colors">Triển khai Kế hoạch Ngày Tôn vinh tiếng Việt trong cộng đồng người Việt Nam ở nước ngoài</div>
                    <div className="text-xs text-gray-500">📅 27/03/2026</div>
                    <div className="text-[13px] font-bold text-red flex items-center gap-1">Đọc tiếp →</div>
                  </div>
                </a>
                <div className="grid grid-cols-2 gap-5">
                  <div>{citizenNews.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                  <div>{citizenNews2.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                </div>
                <div className="mt-3 flex justify-end">
                  <a href="#" className="text-[13px] font-bold text-red flex items-center gap-1 hover:gap-2.5 transition-all">Xem tất cả bài viết ›</a>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <GradientBanner icon="❓" title="CÔNG DÂN, DOANH NGHIỆP HỎI" subtitle="Cơ quan chức năng trả lời" gradient="bg-gradient-to-br from-red to-red-light" />
                  <GradientBanner icon="🔍" title="TRA CỨU CỔNG TTĐT TỈNH" subtitle="Ninh Thuận và Khánh Hòa" gradient="bg-gradient-to-br from-primary to-[#1a1a8e]" />
                </div>
              </>
            )}

            {activeTab === "dn" && (
              <div className="py-12 text-center text-gray-500">
                <div className="text-5xl mb-4">🏢</div>
                <div className="text-[15px] font-semibold">Thông tin dành cho doanh nghiệp</div>
                <a href="#" className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg no-underline text-[13px] font-bold">Xem tất cả →</a>
              </div>
            )}

            {/* Policy Section - flows directly below */}
            <div className="flex gap-0 mb-5 mt-6 border-b-2 border-gray-200">
              <TabButton label="Chính sách mới" active={policyTab === "csm"} onClick={() => setPolicyTab("csm")} />
              <TabButton label="Tham vấn và lấy ý kiến" active={policyTab === "tv"} onClick={() => setPolicyTab("tv")} />
            </div>

            {policyTab === "csm" && (
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

            {policyTab === "tv" && (
              <div className="py-12 text-center text-gray-500">
                <div className="text-5xl mb-4">📢</div>
                <div className="text-[15px] font-semibold">Các văn bản đang lấy ý kiến nhân dân</div>
                <a href="#" className="inline-flex items-center gap-1.5 mt-4 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg no-underline text-[13px] font-bold">Xem danh sách →</a>
              </div>
            )}
          </div>

          {/* Right column - all sidebar content */}
          <div>
            <SidebarPanel title="Thông báo mới nhất" icon="📢">
              <div className="p-2">
                {announcements.map((text, i) => (
                  <a key={i} href="#" className="flex items-center justify-between px-3 py-2.5 text-[12.5px] text-gray-700 rounded-lg transition-all hover:bg-primary/[0.07] hover:text-primary hover:pl-4 font-medium">
                    {text} <span className="text-xs text-gray-300 flex-shrink-0">›</span>
                  </a>
                ))}
              </div>
            </SidebarPanel>

            <div className="relative rounded-xl overflow-hidden mb-3">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400')] bg-cover bg-center opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-gray-100/90"></div>
              <div className="relative p-3 flex flex-col gap-2.5">
                {promoLinks.map((link, i) => (
                  <a key={i} href="#" className={`${link.gradient} relative block rounded-xl px-[18px] py-3.5 no-underline text-center shadow-sm hover:opacity-90 hover:scale-[1.02] transition-all overflow-hidden`}>
                    <img src={link.bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none" loading="lazy" />
                    <div className="relative text-[13px] font-extrabold text-primary-foreground">{link.title}</div>
                    <div className="relative text-[11px] font-semibold text-primary-foreground/80 mt-0.5">{link.sub}</div>
                  </a>
                ))}
              </div>
            </div>

            <SidebarPanel title="Thông tin cho báo chí" icon="📺" variant="accent">
              <div className="p-2">
                {pressItems.map((text, i) => (
                  <a key={i} href="#" className="flex items-center justify-between px-3 py-2.5 text-[12.5px] text-gray-700 rounded-lg transition-all hover:bg-primary/[0.07] hover:text-primary hover:pl-4 font-medium">
                    {text} <span className="text-xs text-gray-300 flex-shrink-0">›</span>
                  </a>
                ))}
              </div>
            </SidebarPanel>

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

            <SidebarPanel title="Bản đồ hành chính tỉnh Khánh Hòa" icon="🗺" variant="accent">
              <div className="p-4 text-center">
                <div className="bg-gradient-to-br from-[#e8f4f0] to-[#c8e8df] rounded-lg p-8 min-h-[280px] flex items-center justify-center text-6xl mb-2">🗺</div>
                <a href="#" className="text-[13px] text-primary font-semibold no-underline">Xem bản đồ đầy đủ →</a>
              </div>
            </SidebarPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitizenNewsSection;
