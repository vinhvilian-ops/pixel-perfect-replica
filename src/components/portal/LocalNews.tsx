import SectionHeader from "./SectionHeader";

interface NewsItem {
  icon: string;
  color: string;
  title: string;
  date: string;
  views: string;
  tag: string;
}

const localNews: NewsItem[] = [
  { icon: "🌊", color: "from-[hsl(195,60%,85%)] to-[hsl(195,60%,75%)]", title: "Hơn 200 VĐV tham gia Giải đua thuyền truyền thống huyện Vạn Ninh lần thứ I", date: "20/03/2026", views: "612", tag: "Vạn Ninh" },
  { icon: "🏗", color: "from-[hsl(120,30%,80%)] to-[hsl(120,30%,70%)]", title: "Xã Cam Thành Bắc khởi công các dự án đầu tư hạ tầng nông thôn mới năm 2026", date: "19/03/2026", views: "445", tag: "Cam Lâm" },
  { icon: "⚓", color: "from-[hsl(217,60%,85%)] to-[hsl(217,60%,75%)]", title: "Tuyên truyền pháp luật về thủ tục hành chính cho ngư dân thành phố Cam Ranh", date: "18/03/2026", views: "378", tag: "Cam Ranh" },
];

const sectorNews: NewsItem[] = [
  { icon: "🤝", color: "from-[hsl(175,60%,80%)] to-[hsl(175,60%,70%)]", title: "Liên đoàn Lao động tỉnh triển khai kế hoạch chăm lo người lao động Tháng Công nhân 2026", date: "20/03/2026", views: "534", tag: "LĐLĐ tỉnh" },
  { icon: "🛣", color: "from-[hsl(15,80%,85%)] to-[hsl(15,80%,75%)]", title: "Sở Giao thông Vận tải thẩm tra hồ sơ dự án nâng cấp Quốc lộ 26 qua địa bàn tỉnh", date: "18/03/2026", views: "398", tag: "Sở GTVT" },
  { icon: "🎓", color: "from-[hsl(260,50%,80%)] to-[hsl(260,50%,70%)]", title: "Sở GD&ĐT triển khai chương trình giáo dục STEM tại các trường THPT tỉnh Khánh Hòa", date: "17/03/2026", views: "621", tag: "Sở GD&ĐT" },
];

const NewsListItem = ({ item }: { item: NewsItem }) => (
  <a href="#" className="flex gap-3.5 py-3 border-b border-gray-200 last:border-b-0 items-start group">
    <div className="w-[88px] h-16 rounded-lg overflow-hidden flex-shrink-0">
      <div className={`w-full h-full flex items-center justify-center text-[22px] bg-gradient-to-br ${item.color} group-hover:scale-[1.08] transition-transform duration-500`}>
        {item.icon}
      </div>
    </div>
    <div>
      <div className="text-[13.5px] font-semibold leading-snug mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
        {item.title}
      </div>
      <div className="flex items-center gap-2 text-[11.5px] text-gray-500">
        <span>📅 {item.date}</span>
        <span>👁 {item.views}</span>
        <span className="text-[11px] font-bold text-primary bg-primary/[0.08] px-2 py-0.5 rounded">{item.tag}</span>
      </div>
    </div>
  </a>
);

const LocalNews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <SectionHeader title="Tin địa phương" />
            <div>{localNews.map((item, i) => <NewsListItem key={i} item={item} />)}</div>
          </div>
          <div>
            <SectionHeader title="Tin sở, ngành" />
            <div>{sectorNews.map((item, i) => <NewsListItem key={i} item={item} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalNews;
