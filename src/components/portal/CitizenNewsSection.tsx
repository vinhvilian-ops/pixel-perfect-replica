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


const citizenNews = [
  { img: xayDung, alt: "Xây dựng", title: "Công bố giá vật liệu xây dựng ngay khi có biến động thị trường", date: "27/03/2026" },
  { img: chuyenDoiSo, alt: "Đăng kiểm", title: "Cục Đăng kiểm tường minh nhiều vấn đề liên quan đến quy trình kiểm tra khí thải với động cơ diesel", date: "27/03/2026" },
  { img: bongDa, alt: "Marathon", title: "Hơn 12.000 vận động viên tranh tài tại Giải vô địch quốc gia Marathon – Báo Tiền Phong lần thứ 67", date: "26/03/2026" },
];

const citizenNews2 = [
  { img: yTe, alt: "Hạt nhân", title: "Tăng mạnh mức phạt, siết chặt quản lý hoạt động bức xạ, hạt nhân", date: "26/03/2026" },
  { img: hocSinh, alt: "Thi THPT", title: "Lịch THI TỐT NGHIỆP THPT năm 2026", date: "25/03/2026" },
  { img: duaThuyen, alt: "Lao động", title: "Hưởng ứng Ngày Thế giới phòng, chống bệnh lao 24-3: Phát hiện sớm để tiến tới chấm dứt bệnh lao", date: "24/03/2026" },
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
  { title: "AI PHÁP LUẬT", sub: "Cổng Pháp luật quốc gia", gradient: "bg-gradient-to-br from-primary to-[#1a1a8e]" },
  { title: "THÔNG TIN DỰ ÁN", sub: "ĐIỆN HẠT NHÂN NINH THUẬN", gradient: "bg-gradient-to-br from-primary-light to-teal" },
  { title: "BẢN ĐỒ SỐ", sub: "65 xã, phường, đặc khu", gradient: "bg-gradient-to-br from-[#00588a] to-teal" },
  { title: "TRA CỨU GIÁ ĐẤT", sub: "Tỉnh Khánh Hòa", gradient: "bg-gradient-to-br from-[#1a7a42] to-green" },
  { title: "CÔNG KHAI NGÂN SÁCH", sub: "Tỉnh Khánh Hòa", gradient: "bg-gradient-to-br from-accent-dark to-accent" },
  { title: "CƠ SỞ DỮ LIỆU QUỐC GIA", sub: "Về văn bản pháp luật", gradient: "bg-gradient-to-br from-primary to-primary-light" },
];

const CitizenNewsSection = () => {
  const [activeTab, setActiveTab] = useState<"cd" | "dn">("cd");

  return (
    <section className="py-6 bg-background">
      <div className="container">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          <div>
            <div className="flex gap-0 mb-5 border-b-2 border-gray-200">
              <TabButton label="Tin nổi bật dành cho công dân" active={activeTab === "cd"} onClick={() => setActiveTab("cd")} />
              <TabButton label="Tin nổi bật dành cho doanh nghiệp" active={activeTab === "dn"} onClick={() => setActiveTab("dn")} />
            </div>

            {activeTab === "cd" && (
              <>
                <div className="grid grid-cols-2 gap-5">
                  <div>{citizenNews.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                  <div>{citizenNews2.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                </div>
                <div className="mt-3 flex justify-end">
                  <a href="#" className="text-[13px] font-bold text-red flex items-center gap-1 hover:gap-2.5 transition-all">Xem tất cả bài viết ›</a>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <GradientBanner icon="❓" title="CÔNG DÂN, DOANH NGHIỆP HỎI" subtitle="Cơ quan chức năng trả lời" gradient="bg-gradient-to-br from-red to-red-light" />
                  <GradientBanner icon="🔍" title="TRA CỨU CỔNG TTĐT TỈNH" subtitle="Ninh Thuận và Khánh Hòa" gradient="bg-gradient-to-br from-primary to-[#1a1a8e]" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <GradientBanner icon="🌊" title="Cổng thông tin xúc tiến đầu tư" subtitle="Tỉnh Khánh Hòa" gradient="bg-gradient-to-br from-primary to-teal" />
                  <GradientBanner icon="💻" title="Chuyển đổi số" subtitle="Đồng hành cùng cuộc sống" gradient="bg-gradient-to-br from-[#1a1a6e] to-[#4040cc]" />
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
          </div>

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

            {promoLinks.map((link, i) => (
              <a key={i} href="#" className={`${link.gradient} block rounded-xl px-[18px] py-3.5 no-underline text-center mb-4 shadow-sm hover:opacity-90 transition-opacity`}>
                <div className="text-[13px] font-extrabold text-primary-foreground">{link.title}</div>
                <div className="text-[11px] font-semibold text-primary-foreground/80 mt-0.5">{link.sub}</div>
              </a>
            ))}

            <SidebarPanel title="Thông tin cho báo chí" icon="📺" variant="accent">
              <div className="p-2">
                {pressItems.map((text, i) => (
                  <a key={i} href="#" className="flex items-center justify-between px-3 py-2.5 text-[12.5px] text-gray-700 rounded-lg transition-all hover:bg-primary/[0.07] hover:text-primary hover:pl-4 font-medium">
                    {text} <span className="text-xs text-gray-300 flex-shrink-0">›</span>
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

export default CitizenNewsSection;
