import SectionHeader from "./SectionHeader";

const NewsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <SectionHeader title="Tin tức – Sự kiện" />

        <div className="grid grid-cols-[1fr_340px] gap-8">
          {/* Main news */}
          <div>
            {/* Featured */}
            <a href="#" className="bg-background rounded-lg overflow-hidden shadow-sm border border-gray-200 grid grid-cols-2 mb-4 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 group block">
              <div className="relative overflow-hidden min-h-[220px]">
                <div className="w-full h-full flex items-center justify-center text-[32px] bg-gradient-to-br from-[hsl(195,60%,85%)] to-[hsl(195,60%,75%)]">🌊</div>
                <span className="absolute top-2.5 left-2.5 bg-destructive text-primary-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide">Sự kiện</span>
              </div>
              <div className="p-6 flex flex-col gap-2 justify-center">
                <div className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  Lễ hội biển Nha Trang 2026 – Rực rỡ sắc màu văn hóa biển miền Trung
                </div>
                <div className="text-[13px] text-gray-500 leading-relaxed line-clamp-3">
                  Lễ hội biển Nha Trang năm 2026 với chủ đề "Biển xanh – Cuộc sống xanh" diễn ra từ ngày 1 đến 5 tháng 6 với nhiều hoạt động văn hóa, nghệ thuật đặc sắc thu hút hàng triệu du khách...
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                  <span>📅 19/03/2026</span>
                  <span>👁 2.340</span>
                </div>
                <div className="text-[13px] font-bold text-destructive flex items-center gap-1">Đọc tiếp →</div>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4 stagger">
              {[
                { img: "🏔", color: "from-[hsl(120,30%,80%)] to-[hsl(120,30%,70%)]", title: "Khánh Hòa khởi công dự án đường bộ cao tốc Nha Trang – Đà Lạt", date: "18/03/2026", views: "1.865" },
                { img: "🏙", color: "from-[hsl(260,50%,80%)] to-[hsl(260,50%,70%)]", title: "Gần 3 triệu cử tri Khánh Hòa tham gia bầu cử đại biểu Quốc hội khóa XVI", date: "17/03/2026", views: "3.120" },
              ].map((card) => (
                <a key={card.title} href="#" className="bg-background rounded-lg overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20 group block">
                  <div className="aspect-video overflow-hidden">
                    <div className={`w-full h-full flex items-center justify-center text-[32px] bg-gradient-to-br ${card.color}`}>{card.img}</div>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="text-[15px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{card.title}</div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                      <span>📅 {card.date}</span>
                      <span>👁 {card.views}</span>
                    </div>
                    <div className="text-[13px] font-bold text-destructive flex items-center gap-1">Đọc tiếp →</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Events */}
            <div className="bg-background rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-[18px] py-3.5 bg-gradient-to-r from-accent-dark to-accent text-accent-foreground text-[13px] font-bold tracking-wide flex items-center gap-2">
                📅 Sự kiện sắp tới
              </div>
              <div className="p-2">
                {[
                  { month: "THÁNG 3", day: "22", title: "Hội nghị xúc tiến đầu tư tỉnh Khánh Hòa 2026", date: "22/03/2026", bg: "bg-accent" },
                  { month: "THÁNG 4", day: "01", title: "Khai hội Tháp Bà Ponagar mùa xuân 2026", date: "01/04/2026", bg: "bg-teal" },
                  { month: "THÁNG 6", day: "01", title: "Lễ hội biển Nha Trang 2026", date: "01 – 05/06/2026", bg: "bg-destructive" },
                ].map((event, i) => (
                  <a key={i} href="#" className="flex gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors items-start">
                    <div className={`${event.bg} text-primary-foreground rounded-lg px-2.5 py-1.5 text-center flex-shrink-0 min-w-[48px]`}>
                      <div className="text-[9px] font-bold tracking-widest uppercase opacity-90">{event.month}</div>
                      <div className="text-lg font-extrabold leading-none">{event.day}</div>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold leading-snug text-foreground mb-1">{event.title}</div>
                      <div className="text-[11.5px] text-accent-dark font-semibold">{event.date}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-background rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-[18px] py-3.5 bg-gradient-to-r from-primary to-primary-light text-primary-foreground text-[13px] font-bold tracking-wide flex items-center gap-2">
                🔗 Liên kết nhanh
              </div>
              <div className="p-2">
                {["Lịch tiếp dân", "Xin ý kiến nhân dân", "Đường dây nóng 1022", "Công báo tỉnh Khánh Hòa", "Hệ thống văn bản"].map((link) => (
                  <a key={link} href="#" className="flex items-center justify-between px-3 py-2.5 text-[13px] text-gray-700 rounded-lg hover:bg-primary/[0.07] hover:text-primary hover:pl-4 transition-all font-medium">
                    {link}
                    <span className="text-xs text-gray-300">›</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-background rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-[18px] py-3.5 bg-gradient-to-r from-[hsl(150,60%,25%)] to-success text-primary-foreground text-[13px] font-bold tracking-wide flex items-center gap-2">
                🏷 Thông tin chuyên đề
              </div>
              <div className="p-3 pt-3 flex flex-wrap gap-2">
                {["Nghị quyết 09", "Du lịch biển", "Vân Phong", "Chuyển đổi số", "BHXH, BHYT", "Khoa học CN", "Bầu cử QH", "ATG Biển"].map((tag) => (
                  <a key={tag} href="#" className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
