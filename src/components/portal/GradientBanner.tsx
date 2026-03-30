interface GradientBannerProps {
  icon: string;
  title: string;
  subtitle?: string;
  gradient: string;
  href?: string;
}

const GradientBanner = ({ icon, title, subtitle, gradient, href = "#" }: GradientBannerProps) => (
  <a
    href={href}
    className={`${gradient} rounded-xl px-5 py-[18px] flex items-center gap-3.5 no-underline transition-all hover:-translate-y-0.5`}
  >
    <span className="text-[28px]">{icon}</span>
    <div className="text-primary-foreground">
      <div className="text-xs font-extrabold uppercase tracking-wide">{title}</div>
      {subtitle && <div className="text-[11px] opacity-80 mt-0.5">{subtitle}</div>}
    </div>
  </a>
);

export default GradientBanner;
