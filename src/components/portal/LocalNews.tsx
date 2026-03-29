import SectionHeader from "./SectionHeader";
import duaThuyen from "@/assets/dua-thuyen.jpg";
import vanPhong from "@/assets/van-phong.jpg";
import nhaTrangBay from "@/assets/nha-trang-bay.jpg";
import caoToc from "@/assets/cao-toc.jpg";
import hoiNghi from "@/assets/hoi-nghi.jpg";
import hocSinh from "@/assets/hoc-sinh.jpg";

interface NewsItem {
  img: string;
  alt: string;
  title: string;
  date: string;
  views: string;
  tag: string;
}

const localNews: NewsItem[] = [
  { img: duaThuyen, alt: "Đua thuyền Vạn Ninh", title: "Hơn 200 VĐV tham gia Giải đua thuyền truyền thống huyện Vạn Ninh lần thứ I", date: "20/03/2026", views: "612", tag: "Vạn Ninh" },
  { img: vanPhong, alt: "Cam Thành Bắc", title: "Xã Cam Thành Bắc khởi công các dự án đầu tư hạ tầng nông thôn mới năm 2026", date: "19/03/2026", views: "445", tag: "Cam Lâm" },
  { img: nhaTrangBay, alt: "Cam Ranh", title: "Tuyên truyền pháp luật về thủ tục hành chính cho ngư dân thành phố Cam Ranh", date: "18/03/2026", views: "378", tag: "Cam Ranh" },
];

const sectorNews: NewsItem[] = [
  { img: hoiNghi, alt: "Liên đoàn lao động", title: "Liên đoàn Lao động tỉnh triển khai kế hoạch chăm lo người lao động Tháng Công nhân 2026", date: "20/03/2026", views: "534", tag: "LĐLĐ tỉnh" },
  { img: caoToc, alt: "Quốc lộ 26", title: "Sở Giao thông Vận tải thẩm tra hồ sơ dự án nâng cấp Quốc lộ 26 qua địa bàn tỉnh", date: "18/03/2026", views: "398", tag: "Sở GTVT" },
  { img: hocSinh, alt: "Giáo dục STEM", title: "Sở GD&ĐT triển khai chương trình giáo dục STEM tại các trường THPT tỉnh Khánh Hòa", date: "17/03/2026", views: "621", tag: "Sở GD&ĐT" },
];

const NewsListItem = ({ item }: { item: NewsItem }) => (
  <a href="#" className="flex gap-3.5 py-3 border-b border-gray-200 last:border-b-0 items-start group">
    <div className="w-[88px] h-16 rounded-lg overflow-hidden flex-shrink-0">
      <img src={item.img} alt={item.alt} className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500" loading="lazy" width={88} height={64} />
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
