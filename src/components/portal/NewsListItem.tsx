interface NewsListItemProps {
  img: string;
  alt: string;
  title: string;
  date: string;
  tag?: string;
}

const NewsListItem = ({ img, alt, title, date, tag }: NewsListItemProps) => (
  <a href="#" className="flex gap-3.5 py-3 border-b border-gray-200 last:border-b-0 items-start group">
    <div className="w-[88px] h-16 rounded-lg overflow-hidden flex-shrink-0">
      <img src={img} alt={alt} className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500" loading="lazy" width={88} height={64} />
    </div>
    <div>
      <div className="text-[13.5px] font-semibold leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </div>
      <div className="flex items-center gap-2 text-[11.5px] text-gray-500">
        <span>📅 {date}</span>
        {tag && <span className="text-[11px] font-bold text-primary bg-primary/[0.08] px-2 py-0.5 rounded">{tag}</span>}
      </div>
    </div>
  </a>
);

export default NewsListItem;
