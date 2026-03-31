import { useState } from "react";
import TabButton from "./TabButton";

const departments = [
  ["Sở Nội vụ", "Sở Tài chính", "Sở Công Thương", "Sở Nông nghiệp và Môi trường", "Sở Dân tộc và Tôn giáo", "Ban Quản lý Vườn QG Núi Chúa – Phước Bình"],
  ["Sở Tư pháp", "Thanh tra tỉnh", "Sở Khoa học và Công nghệ", "Sở Văn hóa, Thể thao và Du lịch", "Ban quản lý dự án phát triển tỉnh", "Ban Quản lý dự án đầu tư xây dựng"],
  ["Văn phòng UBND tỉnh", "Sở Xây dựng", "Sở Giáo dục và Đào tạo", "Sở Y tế", "Ban Quản lý Khu kinh tế và Khu công nghiệp", "Ban QLDA đầu tư xây dựng các công trình Nông nghiệp và Giao thông"],
];

const localities = [
  "TP. Nha Trang", "TP. Cam Ranh", "TX. Ninh Hòa", "Huyện Diên Khánh",
  "Huyện Cam Lâm", "Huyện Vạn Ninh", "Huyện Khánh Sơn", "Huyện Khánh Vĩnh",
  "Đặc khu Bắc Vân Phong", "Đặc khu Trường Sa",
];

const DepartmentSection = () => {
  const [activeTab, setActiveTab] = useState<"sb" | "ubnd">("sb");

  return (
    <section className="py-12 bg-background">
      <div className="container fade-up">
        <div className="flex gap-0 mb-5 border-b-2 border-gray-200">
          <TabButton label="Các sở, ban" active={activeTab === "sb"} onClick={() => setActiveTab("sb")} />
          <TabButton label="UBND các xã, phường, đặc khu" active={activeTab === "ubnd"} onClick={() => setActiveTab("ubnd")} />
        </div>

        {activeTab === "sb" && (
          <div className="grid grid-cols-3 gap-x-8">
            {departments.map((col, ci) => (
              <div key={ci}>
                {col.map((name, i) => (
                  <a key={i} href="#" className="text-[13.5px] text-gray-700 no-underline py-[7px] flex items-center gap-2 border-b border-gray-100 last:border-b-0 hover:text-primary transition-colors">
                    <span className="text-accent">■</span>{name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === "ubnd" && (
          <div className="grid grid-cols-4 gap-x-6">
            {localities.map((name, i) => (
              <a key={i} href="#" className="text-[13px] text-gray-700 no-underline py-[7px] flex items-center gap-2 border-b border-gray-100 hover:text-primary transition-colors">
                <span className="text-accent">■</span>{name}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DepartmentSection;
