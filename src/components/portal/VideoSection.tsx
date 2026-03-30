import SectionHeader from "./SectionHeader";
import GradientBanner from "./GradientBanner";
import hoiNghi from "@/assets/hoi-nghi.jpg";
import hocSinh from "@/assets/hoc-sinh.jpg";
import vanHoa from "@/assets/van-hoa.jpg";
import nhaTrangBay from "@/assets/nha-trang-bay.jpg";
import xayDung from "@/assets/xay-dung.jpg";
import bongDa from "@/assets/bong-da.jpg";

const sideVideos = [
  { img: hocSinh, title: "Nhiều điểm mới trong công tác tuyển sinh lớp 1...", date: "16/03/2026 – 08:34 AM" },
  { img: vanHoa, title: "Đồng bào Chăm với ngày hội non sông", date: "13/03/2026 – 03:34 PM" },
  { img: bongDa, title: "Bí thư Tỉnh ủy Khánh Hòa Nghiêm Xuân Thành chủ trì...", date: "17/02/2026 – 12:04 PM" },
  { img: nhaTrangBay, title: "Tết ấm trong những ngôi nhà Quang Trung", date: "16/02/2026 – 03:13 PM" },
  { img: xayDung, title: "Hướng về Đại hội đại biểu toàn quốc lần thứ XIV của Đảng...", date: "19/01/2026 – 07:52 AM" },
];

const VideoSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <SectionHeader title="Video Clip" />
        <div className="grid grid-cols-[1fr_320px] gap-6 fade-up">
          <div className="rounded-xl overflow-hidden relative aspect-video cursor-pointer group">
            <img src={hoiNghi} alt="Video chính" className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500" loading="lazy" width={800} height={450} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-accent/90 rounded-full flex items-center justify-center text-xl text-accent-foreground shadow-[0_4px_16px_rgba(232,160,32,0.5)] scale-90 group-hover:scale-100 transition-all z-10">▶</div>
            <div className="absolute bottom-[52px] right-2.5 bg-foreground/70 text-primary-foreground text-[11px] font-bold px-2 py-0.5 rounded z-10">05:30</div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent flex items-end p-5 group-hover:from-foreground/80 transition-all">
              <div className="text-primary-foreground text-[15px] font-bold leading-snug">Giải pháp giúp hộ kinh doanh kê khai thuế đúng, an tâm tuân thủ, phát triển bền vững</div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {sideVideos.map((v, i) => (
              <a key={i} href="#" className="flex gap-2.5 no-underline p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <div className="w-[88px] h-[60px] rounded-md overflow-hidden flex-shrink-0">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" loading="lazy" width={88} height={60} />
                </div>
                <div>
                  <div className="text-[12.5px] font-semibold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">{v.title}</div>
                  <div className="text-[11px] text-gray-500">{v.date}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5 fade-up">
          <GradientBanner icon="🏛" title="Cổng dịch vụ công quốc gia" subtitle="Kết nối, cung cấp thông tin và dịch vụ công" gradient="bg-gradient-to-br from-red to-red-light" />
          <GradientBanner icon="⚙" title="Cải cách hành chính" subtitle="Tỉnh Khánh Hòa" gradient="bg-gradient-to-br from-primary to-teal" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3 fade-up">
          <GradientBanner icon="📣" title="Hệ thống phản ánh, kiến nghị của người dân, doanh nghiệp về kinh tế – xã hội tỉnh Khánh Hòa" gradient="bg-gradient-to-br from-primary to-primary-light" />
          <GradientBanner icon="📋" title="Phản ánh kiến nghị về thủ tục hành chính" gradient="bg-gradient-to-br from-[#1a7a42] to-green" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
