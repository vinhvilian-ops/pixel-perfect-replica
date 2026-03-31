import { ReactNode } from "react";

interface SidebarPanelProps {
  title: string;
  icon: string;
  variant?: "primary" | "accent" | "green";
  children: ReactNode;
}

const variants = {
  primary: "bg-gradient-to-br from-primary to-primary-light",
  accent: "bg-gradient-to-br from-accent-dark to-accent",
  green: "bg-gradient-to-br from-[#1a7a42] to-green",
};

const SidebarPanel = ({ title, icon, variant = "primary", children }: SidebarPanelProps) => (
  <div className="bg-background rounded-xl border border-gray-200 overflow-hidden mb-3 fade-up">
    <div className={`${variants[variant]} text-primary-foreground px-[18px] py-3.5 text-[13px] font-bold tracking-wide flex items-center gap-2`}>
      {icon} {title}
    </div>
    {children}
  </div>
);

export default SidebarPanel;
