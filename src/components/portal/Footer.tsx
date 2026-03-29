const departments = [
  "Văn phòng UBND", "Sở GD&ĐT", "Sở Nội vụ", "Sở Tài chính", "Sở Ngoại vụ",
  "Sở NN&MT", "Sở Tư pháp", "Sở VHTTDL", "Sở Xây dựng", "Sở Y tế", "Sở KH&CN",
];

const localities = [
  "Nha Trang", "Cam Ranh", "Ninh Hòa", "Diên Khánh", "Cam Lâm",
  "Vạn Ninh", "Khánh Sơn", "Khánh Vĩnh", "Trường Sa",
];

const otherUnits = [
  "Công an tỉnh", "Thanh tra tỉnh", "Ban Quản lý Khu KT Vân Phong",
  "Trường Chính trị", "Bộ Chỉ huy Quân sự", "Cục Hải quan",
  "Cục Thống kê", "Bảo hiểm xã hội", "Tòa án nhân dân", "Cục Quản lý thị trường",
];

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <div className="text-xs font-extrabold text-accent uppercase tracking-[1.5px] mb-4 flex items-center gap-2">
      <span className="w-[3px] h-3.5 bg-accent rounded-sm" />
      {title}
    </div>
    <div className="flex flex-col gap-0.5">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-[13px] text-primary-foreground/65 py-1.5 flex items-center gap-1.5 hover:text-primary-foreground hover:pl-1 transition-all before:content-['›'] before:text-accent before:text-[15px] before:font-bold before:opacity-70"
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[hsl(213,100%,13%)] via-[hsl(213,100%,18%)] to-[hsl(213,100%,22%)] text-primary-foreground/80 pt-12 relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-light via-teal via-accent to-destructive" />

      <div className="container pb-10">
        <div className="grid grid-cols-[280px_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[46px] h-[46px] bg-gradient-to-br from-primary-light to-teal rounded-[10px] flex items-center justify-center text-primary-foreground font-extrabold text-lg">
                KH
              </div>
              <div>
                <div className="text-sm font-bold text-primary-foreground leading-tight">Cổng Thông Tin Điện Tử</div>
                <div className="text-[11.5px] text-primary-foreground/60 mt-0.5">Tỉnh Khánh Hòa</div>
              </div>
            </div>
            <div className="text-[13px] leading-relaxed text-primary-foreground/65 mb-3">
              📍 01 Trần Phú, phường Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa
            </div>
            <div className="flex flex-col gap-1.5 mb-4">
              <a href="tel:02583822500" className="flex items-center gap-2 text-primary-foreground/70 text-[13px] hover:text-accent transition-colors">📞 (0258) 3.822.500</a>
              <a href="tel:02583827008" className="flex items-center gap-2 text-primary-foreground/70 text-[13px] hover:text-accent transition-colors">📞 (0258) 3.827.008</a>
              <a href="mailto:congttdt@khanhhoa.gov.vn" className="flex items-center gap-2 text-primary-foreground/70 text-[13px] hover:text-accent transition-colors">✉ congttdt@khanhhoa.gov.vn</a>
            </div>
            <div className="flex gap-2 mb-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground text-base hover:bg-accent hover:-translate-y-0.5 transition-all">f</a>
              <a href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground text-base hover:bg-accent hover:-translate-y-0.5 transition-all">💬</a>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/[0.08] border border-primary-foreground/15 px-3.5 py-2 rounded-full text-xs text-primary-foreground/70 font-semibold">
              <div className="w-2 h-2 bg-[hsl(142,70%,58%)] rounded-full shadow-[0_0_0_3px_rgba(74,222,128,0.3)]" style={{ animation: "pulse-dot 2s infinite" }} />
              Đã kết nối EMC
            </div>
          </div>

          <FooterColumn title="Sở ban ngành" links={departments} />
          <FooterColumn title="Địa phương" links={localities} />
          <FooterColumn title="Các đơn vị khác" links={otherUnits} />
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container flex items-center justify-between py-4 text-xs text-primary-foreground/50 flex-wrap gap-4">
          <span>© 2026 Cổng Thông tin điện tử tỉnh Khánh Hòa – www.khanhhoa.gov.vn</span>
          <span>Cơ quan quản lý: Văn phòng UBND tỉnh Khánh Hòa | Trưởng Ban biên tập: Chánh Văn phòng UBND tỉnh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
