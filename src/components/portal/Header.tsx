import { useState } from "react";
import { Search, Moon } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "#", active: true },
  {
    label: "Tin tức – Sự kiện",
    href: "#",
    children: [
      { label: "Tin tức tổng hợp", href: "#" },
      { label: "Chỉ đạo – Điều hành", href: "#" },
      { label: "Sự kiện nổi bật", href: "#" },
      { label: "Thông báo", href: "#" },
      { label: "Tin địa phương", href: "#" },
    ],
  },
  { label: "Công dân", href: "#" },
  { label: "Doanh nghiệp", href: "#" },
  { label: "Tiếp cận thông tin", href: "#" },
  {
    label: "Thông tin chuyên đề",
    href: "#",
    children: [
      { label: "Du lịch Khánh Hòa", href: "#" },
      { label: "Phát triển kinh tế biển", href: "#" },
      { label: "Chuyển đổi số", href: "#" },
      { label: "Quy hoạch – Đô thị", href: "#" },
      { label: "Bầu cử đại biểu", href: "#" },
    ],
  },
  { label: "Thủ tục hành chính", href: "#" },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,63,136,0.10)]">
      <div className="container flex items-center gap-6 h-[72px]">
        <a href="#" className="flex items-center gap-3 flex-shrink-0 min-w-[200px]">
          <div className="w-[46px] h-[46px] bg-gradient-to-br from-primary to-teal rounded-[10px] flex items-center justify-center text-primary-foreground font-extrabold text-lg tracking-tight shadow-[0_4px_12px_rgba(0,63,136,0.3)]">
            KH
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-bold text-primary">Cổng Thông Tin Điện Tử</div>
            <div className="text-[11px] text-gray-500 font-medium">Tỉnh Khánh Hòa</div>
          </div>
        </a>

        <nav className="flex-1 flex items-center justify-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-semibold rounded-sm whitespace-nowrap transition-all ${
                  item.active
                    ? "text-primary bg-primary/[0.07]"
                    : "text-gray-700 hover:text-primary hover:bg-primary/[0.07]"
                }`}
              >
                {item.label}
                {item.children && (
                  <span className="text-[10px] text-gray-500 transition-transform group-hover:rotate-180">▾</span>
                )}
              </a>
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full mt-2 left-0 bg-background rounded-lg shadow-lg border border-gray-200 min-w-[220px] p-2 z-[200] animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-3.5 py-2.5 text-[13px] text-gray-700 rounded-md transition-all hover:bg-primary/[0.07] hover:text-primary hover:pl-[18px]"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="w-[38px] h-[38px] border-none bg-gray-100 rounded-[9px] flex items-center justify-center text-gray-700 hover:bg-primary/10 hover:text-primary transition-all">
            <Search className="w-4 h-4" />
          </button>
          <button className="w-[38px] h-[38px] border-none bg-gray-100 rounded-[9px] flex items-center justify-center text-gray-700 hover:bg-primary/10 hover:text-primary transition-all">
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
