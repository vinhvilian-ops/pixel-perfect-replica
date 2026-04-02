import { useState } from "react";
import { Search, Moon } from "lucide-react";
import logoKH from "@/assets/logo-kh.png";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Trang chủ", href: "#", active: true },
  {
    label: "Giới thiệu",
    href: "#",
    children: [
      { label: "Lịch sử – Địa lý", href: "#" },
      { label: "Lãnh đạo tỉnh", href: "#" },
      { label: "Bản đồ hành chính", href: "#" },
      { label: "Trường Sa thân yêu", href: "#" },
    ],
  },
  {
    label: "Chính quyền",
    href: "#",
    children: [
      { label: "UBND tỉnh Khánh Hòa", href: "#" },
      { label: "HĐND tỉnh", href: "#" },
      { label: "Các sở, ban ngành", href: "#" },
      { label: "UBND các huyện, thành phố", href: "#" },
    ],
  },
  { label: "Công dân", href: "#" },
  { label: "Doanh nghiệp", href: "#" },
  { label: "Du khách", href: "#" },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-destructive sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,63,136,0.10)]">
      <div className="container flex items-center gap-6 h-[72px]">
        <a href="#" className="flex items-center gap-3 flex-shrink-0 min-w-[200px]">
          <img src={logoKH} alt="Logo Khánh Hòa" className="w-[46px] h-[46px] object-contain" />
          <div className="leading-tight">
            <div className="text-[13px] font-bold text-white">Cổng Thông Tin Điện Tử</div>
            <div className="text-[11px] text-white/70 font-medium">Tỉnh Khánh Hòa</div>
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
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
              >
                {item.label}
                {item.children && (
                  <span className="text-[10px] text-white/60 transition-transform group-hover:rotate-180">▾</span>
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
