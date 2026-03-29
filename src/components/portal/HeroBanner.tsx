const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-[hsl(207,100%,31%)] to-teal min-h-[420px] relative overflow-hidden flex items-center">
      {/* Radial overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_80%_50%,rgba(0,168,156,0.25)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_400px_at_20%_80%,rgba(232,160,32,0.12)_0%,transparent_60%)]" />
      </div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] overflow-hidden">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" className="w-full h-full">
          <path d="M0,80 C240,40 480,100 720,70 C960,40 1200,90 1440,60 L1440,120 L0,120 Z" fill="white" opacity="0.08" />
          <path d="M0,100 C360,60 720,110 1080,80 C1260,65 1380,90 1440,85 L1440,120 L0,120 Z" fill="white" opacity="0.12" />
          <path d="M0,110 C300,95 600,115 900,100 C1100,90 1300,108 1440,105 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <div className="container relative z-10 py-12 pb-[100px] grid grid-cols-[1fr_340px] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent px-3 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4 backdrop-blur-sm">
            ⭐ Tin nổi bật
          </div>
          <h1 className="text-[34px] font-extrabold text-primary-foreground leading-tight mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
            Khánh Hòa hướng đến <span className="text-accent">trung tâm kinh tế biển</span> quốc gia vào năm 2030
          </h1>
          <p className="text-[14.5px] text-primary-foreground/80 leading-relaxed mb-7 max-w-[560px]">
            UBND tỉnh Khánh Hòa vừa ban hành kế hoạch hành động thực hiện Nghị quyết số 09 của Bộ Chính trị về xây dựng, phát triển tỉnh Khánh Hòa đến năm 2030, tầm nhìn đến năm 2045...
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1.5 text-primary-foreground/70 text-[13px]">📅 20/03/2026</span>
          </div>
          <a href="#" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-[10px] font-bold text-sm transition-all hover:bg-accent-dark hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,160,32,0.4)] hover:shadow-[0_8px_28px_rgba(232,160,32,0.5)]">
            Xem chi tiết →
          </a>
        </div>

        <div className="bg-primary-foreground/[0.08] backdrop-blur-xl border border-primary-foreground/15 rounded-2xl p-5">
          <div className="text-[13px] font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-accent rounded-sm" />
            Tin mới nhất
          </div>
          {[
            { title: "Phát triển Khu kinh tế Vân Phong thành đặc khu kinh tế biển hiện đại", date: "19/03/2026" },
            { title: "Nha Trang đón hơn 1,2 triệu lượt khách du lịch quốc tế trong quý I/2026", date: "18/03/2026" },
            { title: "Triển khai dịch vụ công trực tuyến mức độ 4 toàn tỉnh", date: "17/03/2026" },
          ].map((item, i) => (
            <div key={i} className={`py-3 ${i < 2 ? "border-b border-primary-foreground/10" : ""}`}>
              <a href="#" className="text-[13.5px] text-primary-foreground/90 leading-snug block mb-1.5 hover:text-accent transition-colors">
                {item.title}
              </a>
              <div className="text-[11px] text-primary-foreground/50">📅 {item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
