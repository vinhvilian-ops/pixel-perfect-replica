interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: string;
  children?: React.ReactNode;
}

const SectionHeader = ({ title, linkText = "Xem tất cả →", linkHref = "#", children }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-7">
      <h2 className="text-[22px] font-extrabold text-foreground flex items-center gap-3">
        <span className="w-[5px] h-[26px] bg-gradient-to-b from-primary to-teal rounded-sm" />
        {title}
      </h2>
      <div className="flex items-center gap-4">
        {children}
        <a href={linkHref} className="text-[13.5px] font-bold text-destructive flex items-center gap-1.5 hover:gap-2.5 transition-all">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default SectionHeader;
