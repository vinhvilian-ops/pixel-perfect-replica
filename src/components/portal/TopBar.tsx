import { useState } from "react";

const languages = ["VI", "EN", "РУС"];

const TopBar = () => {
  const [activeLang, setActiveLang] = useState("VI");

  return (
    <div className="bg-gradient-to-br from-primary-dark to-primary py-1.5 text-xs text-primary-foreground/85">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <span className="text-accent text-sm">★</span>
          <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-[11.5px] font-medium">
            Cổng thông tin điện tử
          </a>
          <span className="w-px h-3.5 bg-primary-foreground/25" />
          <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-[11.5px] font-medium">
            Tỉnh Khánh Hòa
          </a>
        </div>
        <div className="flex gap-1">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`text-[11px] font-semibold px-1.5 py-0.5 rounded tracking-wide transition-all ${
                activeLang === lang
                  ? "text-primary bg-accent"
                  : "text-primary-foreground/70 hover:text-primary hover:bg-accent"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
