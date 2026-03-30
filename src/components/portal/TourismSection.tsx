import { useState } from "react";
import TabButton from "./TabButton";
import NewsListItem from "./NewsListItem";
import SidebarPanel from "./SidebarPanel";
import duLich from "@/assets/du-lich.jpg";
import thapPonagar from "@/assets/thap-ponagar.jpg";
import nhaTrangBay from "@/assets/nha-trang-bay.jpg";
import vanHoa from "@/assets/van-hoa.jpg";
import duongSat from "@/assets/duong-sat.jpg";
import hocSinh from "@/assets/hoc-sinh.jpg";

const tourismNews = [
  { img: nhaTrangBay, alt: "Biển", title: "Trải nghiệm văn hóa biển Khánh Hòa tại VITM 2026", date: "24/03/2026" },
  { img: duongSat, alt: "Bay", title: "Khai trương đường bay thẳng từ thủ đô Belarus đến Khánh Hòa", date: "20/03/2026" },
  { img: duLich, alt: "Tàu", title: "Tàu du lịch biển Piano Land đưa 1.600 khách đến Khánh Hòa", date: "16/03/2026" },
];

const mediaItems = [
  { img: vanHoa, alt: "Văn hóa", caption: "Ngày Văn hóa các dân tộc Việt Nam 2026" },
  { img: thapPonagar, alt: "Biển", caption: "Biển Nha Trang – Điểm đến hàng đầu" },
  { img: hocSinh, alt: "Học sinh", caption: "Vinh danh học sinh xuất sắc 2025" },
];

const specialPages = [
  "An toàn giao thông", "Phòng cháy, chữa cháy", "Ứng phó sự cố, thiên tai",
  "Nông nghiệp – Tài nguyên – MT", "Chuyển đổi số", "Chương trình mục tiêu quốc gia",
  "Khoa học và Công nghệ", "Phổ biến giáo dục pháp luật", "Đường dây nóng",
];

const socialLinks = [
  { title: "Zalo", sub: "Chính quyền điện tử tỉnh Khánh Hòa", icon: "💬", gradient: "bg-gradient-to-br from-[#0068ff] to-[#00b0ff]" },
  { title: "Fanpage", sub: "Cổng TTĐT tỉnh Khánh Hòa", icon: "📱", gradient: "bg-gradient-to-br from-[#1877f2] to-[#3b5998]" },
];

const TourismSection = () => {
  const [activeTab, setActiveTab] = useState<"dk" | "ta">("dk");

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          <div>
            <div className="flex gap-0 mb-5 border-b-2 border-gray-200">
              <TabButton label="Giới thiệu đến du khách" active={activeTab === "dk"} onClick={() => setActiveTab("dk")} />
              <TabButton label="Tin ảnh" active={activeTab === "ta"} onClick={() => setActiveTab("ta")} />
            </div>

            {activeTab === "dk" && (
              <>
                <a href="#" className="grid grid-cols-2 rounded-xl overflow-hidden shadow-sm border border-gray-200 no-underline text-foreground mb-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="min-h-[220px] overflow-hidden bg-gray-200 relative">
                    <img src={duLich} alt="Du lịch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={480} height={220} />
                    <span className="absolute top-2.5 left-2.5 bg-red text-primary-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full">Du lịch</span>
                  </div>
                  <div className="p-6 flex flex-col justify-center gap-2">
                    <div className="text-base font-bold leading-snug group-hover:text-primary transition-colors">Khánh Hòa tổ chức "Ngày Văn hóa các dân tộc Việt Nam" năm 2026 với nhiều hoạt động đặc sắc</div>
                    <div className="text-xs text-gray-500">📅 24/03/2026</div>
                    <div className="text-[13px] font-bold text-red flex items-center gap-1">Đọc tiếp →</div>
                  </div>
                </a>
                {tourismNews.map((item, i) => <NewsListItem key={i} {...item} />)}
                <div className="mt-3 flex justify-end">
                  <a href="#" className="text-[13px] font-bold text-red flex items-center gap-1 hover:gap-2.5 transition-all">Xem tất cả bài viết ›</a>
                </div>
              </>
            )}

            {activeTab === "ta" && (
              <div className="grid grid-cols-3 gap-4 stagger">
                {mediaItems.map((item, i) => (
                  <div key={i} className="rounded-xl overflow-hidden relative aspect-[16/10] cursor-pointer group">
                    <img src={item.img} alt={item.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500" loading="lazy" width={400} height={250} />
                    <div className="absolute top-2.5 right-2.5 bg-foreground/50 backdrop-blur-sm text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm z-10">📷</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent flex items-end p-4 group-hover:from-foreground/80 transition-all">
                      <div className="text-primary-foreground text-[13px] font-semibold leading-snug">{item.caption}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <SidebarPanel title="Bản đồ hành chính tỉnh Khánh Hòa" icon="🗺" variant="accent">
              <div className="p-4 text-center">
                <div className="bg-gradient-to-br from-[#e8f4f0] to-[#c8e8df] rounded-lg p-6 text-5xl mb-2">🗺</div>
                <a href="#" className="text-[13px] text-primary font-semibold no-underline">Xem bản đồ đầy đủ →</a>
              </div>
            </SidebarPanel>

            {socialLinks.map((link, i) => (
              <a key={i} href="#" className={`${link.gradient} block rounded-xl px-[18px] py-4 no-underline text-center mb-4 shadow-sm hover:opacity-90 transition-opacity`}>
                <div className="text-[22px] mb-1">{link.icon}</div>
                <div className="text-sm font-extrabold text-primary-foreground">{link.title}</div>
                <div className="text-[11px] font-semibold text-primary-foreground/85 mt-0.5">{link.sub}</div>
              </a>
            ))}

            <SidebarPanel title="Chuyên trang, chuyên mục" icon="📌" variant="green">
              <div className="px-4 py-3 flex flex-col gap-0.5">
                {specialPages.map((page, i) => (
                  <a key={i} href="#" className="text-[13px] text-gray-700 no-underline py-1.5 flex items-center gap-2 border-b border-gray-100 last:border-b-0 hover:text-primary transition-colors">
                    <span className="text-primary">■</span>{page}
                  </a>
                ))}
              </div>
            </SidebarPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
