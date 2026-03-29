const quickCards = [
  { icon: "👤", title: "Công dân", sub: "Thông tin và dịch vụ dành cho người dân", color: "bg-destructive/10" },
  { icon: "🏢", title: "Doanh nghiệp", sub: "Hỗ trợ và thông tin cho doanh nghiệp", color: "bg-accent/10" },
  { icon: "📋", title: "Thủ tục hành chính", sub: "Các thủ tục hành chính trực tuyến", color: "bg-primary/10" },
  { icon: "🔍", title: "Tiếp cận thông tin", sub: "Tìm kiếm và tra cứu thông tin", color: "bg-teal/10" },
];

const hotlines = [
  { icon: "📞", label: "Đường dây nóng 1022", style: "bg-destructive/[0.08] border-destructive/20 text-destructive hover:bg-destructive hover:text-primary-foreground" },
  { icon: "📅", label: "Lịch tiếp dân", style: "bg-accent/[0.08] border-accent/20 text-accent-dark hover:bg-accent hover:text-primary-foreground" },
  { icon: "🌿", label: "Phát triển bền vững", style: "bg-success/[0.08] border-success/20 text-success hover:bg-success hover:text-primary-foreground" },
];

const QuickActions = () => {
  return (
    <section className="bg-background py-8 relative z-[2]">
      <div className="container">
        <div className="grid grid-cols-4 gap-4 mb-5 stagger">
          {quickCards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="bg-background border-[1.5px] border-gray-200 rounded-lg p-5 flex items-center gap-4 transition-all hover:border-primary hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center text-[22px] flex-shrink-0 ${card.color}`}>
                {card.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground mb-0.5">{card.title}</div>
                <div className="text-xs text-gray-500 leading-snug">{card.sub}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {hotlines.map((h) => (
            <a
              key={h.label}
              href="#"
              className={`inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full text-[13px] font-semibold border-[1.5px] transition-all ${h.style}`}
            >
              {h.icon} {h.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
