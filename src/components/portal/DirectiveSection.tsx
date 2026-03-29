import SectionHeader from "./SectionHeader";

const directives = [
  { title: "Khánh Hòa đẩy mạnh phát triển kinh tế biển gắn với bảo vệ chủ quyền quốc gia", date: "20/03/2026" },
  { title: "Ban hành Kế hoạch hành động phát triển Khu kinh tế Vân Phong đến năm 2030", date: "19/03/2026" },
  { title: "Triển khai thi hành Luật Đất đai năm 2024 trên địa bàn tỉnh Khánh Hòa", date: "18/03/2026" },
  { title: "Tập trung chuyển biến thực chất trong phát triển khoa học, công nghệ và chuyển đổi số", date: "17/03/2026" },
];

const stats = [
  { label: "Hôm nay", value: "12.456", color: "text-primary" },
  { label: "Tuần này", value: "84.230", color: "text-teal" },
  { label: "Tháng này", value: "320.812", color: "text-accent-dark" },
  { label: "Tổng lượt truy cập", value: "14.720.048", color: "text-destructive" },
];

const DirectiveSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-[1fr_340px] gap-8">
          <div>
            <SectionHeader title="Chỉ đạo – Điều hành" />
            <div className="flex flex-col">
              {directives.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`flex gap-0 py-4 items-start group ${i < directives.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <div className="w-1 min-h-full bg-gray-300 rounded self-stretch mr-4 flex-shrink-0 group-hover:bg-primary transition-colors" />
                  <div>
                    <div className="text-[14.5px] font-semibold leading-snug mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-accent-dark font-semibold">{item.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-[60px]">
            <div className="bg-background rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-[18px] py-3.5 bg-gradient-to-r from-[hsl(150,60%,25%)] to-success text-primary-foreground text-[13px] font-bold tracking-wide flex items-center gap-2">
                📊 Thống kê truy cập
              </div>
              <div className="p-4 flex flex-col gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center px-3 py-2.5 bg-gray-50 rounded-lg">
                    <span className="text-[13px] text-gray-700">{stat.label}</span>
                    <span className={`text-[15px] font-extrabold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectiveSection;
