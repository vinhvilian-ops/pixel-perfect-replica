import SectionHeader from "./SectionHeader";
import yTe from "@/assets/y-te.jpg";
import hocSinh from "@/assets/hoc-sinh.jpg";
import chuyenDoiSo from "@/assets/chuyen-doi-so.jpg";
import vanHoa from "@/assets/van-hoa.jpg";

const infographics = [
  { img: yTe, title: "Phòng, chống suy dinh dưỡng trẻ em dưới 5 tuổi..." },
  { img: hocSinh, title: "Thông tin tuyển sinh lớp 10 năm học 2026–2027" },
  { img: chuyenDoiSo, title: "Khánh Hòa hướng tới chấm dứt dịch bệnh AIDS vào năm 2030" },
  { img: vanHoa, title: "Kế hoạch Tiêm chủng mở rộng tỉnh Khánh Hòa giai đoạn 2026–2028" },
];

const InfographicsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <SectionHeader title="Đồ họa trực quan" />
        <div className="grid grid-cols-4 gap-4 stagger">
          {infographics.map((item, i) => (
            <a key={i} href="#" className="bg-background rounded-xl overflow-hidden shadow-sm border border-gray-200 no-underline text-foreground hover:shadow-md hover:-translate-y-0.5 transition-all group block">
              <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={400} height={225} />
              </div>
              <div className="p-4">
                <div className="text-[13px] font-bold leading-snug group-hover:text-primary transition-colors">{item.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;
