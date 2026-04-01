import { useState } from "react";
import TabButton from "./TabButton";
import NewsListItem from "./NewsListItem";
import SidebarPanel from "./SidebarPanel";
import GradientBanner from "./GradientBanner";
import xayDung from "@/assets/xay-dung.jpg";
import vanHoa from "@/assets/van-hoa.jpg";
import nhaTrangBay from "@/assets/nha-trang-bay.jpg";
import chuyenDoiSo from "@/assets/chuyen-doi-so.jpg";
import duLich from "@/assets/du-lich.jpg";
import yTe from "@/assets/y-te.jpg";
import hocSinh from "@/assets/hoc-sinh.jpg";
import hoiNghi from "@/assets/hoi-nghi.jpg";
import caoToc from "@/assets/cao-toc.jpg";
import duaThuyen from "@/assets/dua-thuyen.jpg";

const directiveNews = [
  { img: xayDung, alt: "Xây dựng", title: "Nâng cao hiệu quả phối hợp trong triển khai các dự án đầu tư xây dựng", date: "29/03/2026" },
  { img: vanHoa, alt: "Văn hóa", title: "Xây dựng Khánh Hòa trở thành điểm đến của các sự kiện văn hóa, nghệ thuật và giải trí biển", date: "27/03/2026" },
  { img: nhaTrangBay, alt: "Văn hóa", title: "Khánh Hòa đặt mục tiêu 100% xã, phường, đặc khu đạt chuẩn phát triển văn hóa toàn diện vào năm 2030", date: "27/03/2026" },
  { img: caoToc, alt: "Giao thông", title: "Đẩy nhanh tiến độ hoàn thiện tuyến cao tốc Nha Trang – Cam Lâm giai đoạn 2", date: "26/03/2026" },
  { img: hoiNghi, alt: "Hội nghị", title: "Hội nghị sơ kết 3 năm thực hiện Nghị quyết về phát triển kinh tế biển", date: "25/03/2026" },
];

const directiveNews2 = [
  { img: chuyenDoiSo, alt: "Quốc tế", title: "Triển khai Kế hoạch Ngày Tôn vinh tiếng Việt trong cộng đồng người Việt Nam ở nước ngoài năm 2026", date: "27/03/2026" },
  { img: duLich, alt: "Thuế", title: "Nâng cao hiệu quả quản lý thuế trên địa bàn tỉnh", date: "27/03/2026" },
  { img: yTe, alt: "Y tế", title: "Kế hoạch phòng, chống bệnh phong giai đoạn 2026 – 2030", date: "26/03/2026" },
  { img: duaThuyen, alt: "Thể thao", title: "Tổ chức thành công Giải đua thuyền truyền thống tỉnh Khánh Hòa lần thứ XII", date: "25/03/2026" },
  { img: hocSinh, alt: "Giáo dục", title: "Triển khai chương trình giáo dục kỹ năng sống cho học sinh tiểu học trên toàn tỉnh", date: "24/03/2026" },
];

const sectorNews = [
  { img: hoiNghi, alt: "LĐLĐ", title: "Liên đoàn Lao động tỉnh triển khai kế hoạch chăm lo người lao động Tháng Công nhân 2026", date: "20/03/2026", tag: "LĐLĐ tỉnh" },
  { img: hocSinh, alt: "GD&ĐT", title: "Sở GD&ĐT triển khai chương trình giáo dục STEM tại các trường THPT tỉnh Khánh Hòa", date: "19/03/2026", tag: "Sở GD&ĐT" },
  { img: caoToc, alt: "GTVT", title: "Sở Giao thông Vận tải thẩm tra hồ sơ dự án cải tạo, nâng cấp cầu Đá Bạc trên Quốc lộ 10", date: "18/03/2026", tag: "Sở GTVT" },
];

const sectorNews2 = [
  { img: duaThuyen, alt: "Đua xe", title: "Gần 200 vận động viên tham gia Giải đua xe đạp phường Phù Liễn lần thứ I", date: "20/03/2026", tag: "Hội LHPN tỉnh" },
  { img: chuyenDoiSo, alt: "Pháp luật", title: "Tuyên truyền, phổ biến pháp luật về thủ tục hộ kinh doanh chuyển đổi sang doanh nghiệp", date: "19/03/2026", tag: "Ngô Quyền" },
  { img: xayDung, alt: "Đầu tư", title: "Xã Quyết Thắng khởi công các Dự án đầu tư công năm 2026", date: "18/03/2026", tag: "Quyết Thắng" },
];

const govDirectives = [
  "Phương án kết nối hệ thống camera giám sát an ninh với Cơ sở dữ liệu quốc gia",
  "Chi tạm ứng 8.000 tỷ đồng từ nguồn tăng thu NSTU cho Quỹ Bình ổn giá xăng dầu",
  "Chỉ đạo, điều hành của Chính phủ nổi bật tuần từ 21–27/3/2026",
  "Sửa đổi quy định về kinh doanh trò chơi điện tử có thưởng dành cho người nước ngoài",
];

const events = [
  { month: "THÁNG 4", day: "01", title: "Khai hội Tháp Bà Ponagar mùa xuân 2026", date: "01/04/2026", color: "bg-accent" },
  { month: "THÁNG 4", day: "15", title: "Hội nghị xúc tiến đầu tư tỉnh Khánh Hòa 2026", date: "15/04/2026", color: "bg-teal" },
  { month: "THÁNG 6", day: "01", title: "Lễ hội biển Nha Trang 2026", date: "01 – 05/06/2026", color: "bg-red" },
];

const quickLinks = ["Lịch tiếp dân", "Xin ý kiến nhân dân", "Đường dây nóng 1022", "Công báo tỉnh Khánh Hòa", "Hệ thống văn bản"];

const DirectiveTabSection = () => {
  const [activeTab, setActiveTab] = useState<"cdh" | "snd">("cdh");

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          <div>
            <div className="flex gap-0 mb-5 border-b-2 border-gray-200">
              <TabButton label="Thông tin chỉ đạo điều hành" active={activeTab === "cdh"} onClick={() => setActiveTab("cdh")} />
              <TabButton label="Hoạt động sở, ngành, địa phương" active={activeTab === "snd"} onClick={() => setActiveTab("snd")} />
            </div>

            {activeTab === "cdh" && (
              <>
                <div className="grid grid-cols-2 gap-5">
                  <div>{directiveNews.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                  <div>{directiveNews2.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                </div>
                <div className="mt-3 flex justify-end">
                  <a href="#" className="text-[13px] font-bold text-red flex items-center gap-1 hover:gap-2.5 transition-all">Xem tất cả bài viết ›</a>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 fade-up">
                  <GradientBanner icon="❓" title="Công dân, doanh nghiệp hỏi" subtitle="Cơ quan chức năng trả lời" gradient="bg-gradient-to-br from-red to-red-light" />
                  <GradientBanner icon="🗃" title="Tra cứu Cổng TTĐT tỉnh" subtitle="Ninh Thuận và Khánh Hòa" gradient="bg-gradient-to-br from-primary to-primary-light" />
                </div>
              </>
            )}

            {activeTab === "snd" && (
              <>
                <div className="grid grid-cols-2 gap-5">
                  <div>{sectorNews.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                  <div>{sectorNews2.map((item, i) => <NewsListItem key={i} {...item} />)}</div>
                </div>
                <div className="mt-3 flex justify-end">
                  <a href="#" className="text-[13px] font-bold text-red flex items-center gap-1 hover:gap-2.5 transition-all">Xem tất cả bài viết ›</a>
                </div>
              </>
            )}
          </div>

          <div>
            <SidebarPanel title="Chỉ đạo, điều hành của Chính phủ, Thủ tướng" icon="🏛">
              <div className="p-2">
                {govDirectives.map((text, i) => (
                  <a key={i} href="#" className="flex items-center justify-between px-3 py-2.5 text-[12.5px] text-gray-700 rounded-lg transition-all hover:bg-primary/[0.07] hover:text-primary hover:pl-4 font-medium">
                    {text} <span className="text-xs text-gray-300">›</span>
                  </a>
                ))}
              </div>
              <div className="px-4 pb-3 text-[11px] text-gray-500 italic">Nguồn: Cổng Thông tin điện tử Chính phủ</div>
            </SidebarPanel>

            <SidebarPanel title="Sự kiện sắp tới" icon="📅" variant="accent">
              <div className="p-2">
                {events.map((e, i) => (
                  <a key={i} href="#" className="flex gap-3 p-2 rounded-lg no-underline text-foreground hover:bg-gray-50 transition-colors items-start">
                    <div className={`${e.color} text-primary-foreground rounded-lg px-2.5 py-1.5 text-center flex-shrink-0 min-w-[48px]`}>
                      <div className="text-[9px] font-bold tracking-wider uppercase opacity-90">{e.month}</div>
                      <div className="text-lg font-extrabold leading-tight">{e.day}</div>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold leading-snug mb-1">{e.title}</div>
                      <div className="text-[11.5px] text-accent-dark font-semibold">{e.date}</div>
                    </div>
                  </a>
                ))}
              </div>
            </SidebarPanel>

            <SidebarPanel title="Liên kết nhanh" icon="🔗">
              <div className="p-2">
                {quickLinks.map((link, i) => (
                  <a key={i} href="#" className="flex items-center justify-between px-3 py-2.5 text-[13px] text-gray-700 rounded-lg transition-all hover:bg-primary/[0.07] hover:text-primary hover:pl-4 font-medium">
                    {link} <span className="text-xs text-gray-300">›</span>
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

export default DirectiveTabSection;
