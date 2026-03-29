import { useState } from "react";
import SectionHeader from "./SectionHeader";

const tabs = ["Tất cả", "Quyết định", "Chỉ thị", "Thông báo", "Văn bản khác"];

const documents = [
  { num: "1234/QĐ-UBND", date: "18/03/2026", desc: "Quyết định phê duyệt Kế hoạch sử dụng đất năm 2026 của thành phố Nha Trang" },
  { num: "1210/QĐ-UBND", date: "16/03/2026", desc: "Quyết định về việc công bố Danh mục thủ tục hành chính được sửa đổi thuộc phạm vi chức năng của Sở Tài nguyên và Môi trường" },
  { num: "1198/QĐ-UBND", date: "16/03/2026", desc: "Quyết định phê duyệt quy trình nội bộ giải quyết thủ tục hành chính trong lĩnh vực khoa học và công nghệ" },
  { num: "1167/QĐ-UBND", date: "13/03/2026", desc: "Quyết định về việc công bố Danh mục thủ tục hành chính sửa đổi trong lĩnh vực xuất nhập khẩu thuộc chức năng Sở Công Thương" },
  { num: "1145/QĐ-UBND", date: "13/03/2026", desc: "Quyết định về việc phê duyệt bổ sung tổ chức kinh tế thực hiện Dự án đầu tư xây dựng khu dân cư mới xã Suối Hiệp, huyện Diên Khánh" },
];

const DocumentSection = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");

  return (
    <section className="py-12">
      <div className="container">
        <SectionHeader title="Hệ thống văn bản">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm văn bản..."
              className="pl-9 pr-4 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-[13px] outline-none text-gray-700 transition-colors w-[220px] focus:border-primary font-sans"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          </div>
        </SectionHeader>

        <div className="flex gap-1 mb-5 bg-gray-100 p-1 rounded-[10px] w-fit">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[18px] py-2 rounded-[7px] text-[13px] font-semibold transition-all border-none ${
                activeTab === tab
                  ? "bg-background text-primary shadow-sm"
                  : "bg-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-50 px-4 py-3.5 text-left text-[12.5px] font-bold text-gray-700 border-b-2 border-gray-200 tracking-wide w-[150px]">Số ký hiệu</th>
                <th className="bg-gray-50 px-4 py-3.5 text-left text-[12.5px] font-bold text-gray-700 border-b-2 border-gray-200 tracking-wide w-[140px]">Ngày ban hành</th>
                <th className="bg-gray-50 px-4 py-3.5 text-left text-[12.5px] font-bold text-gray-700 border-b-2 border-gray-200 tracking-wide">Trích yếu</th>
                <th className="bg-gray-50 px-4 py-3.5 text-left text-[12.5px] font-bold text-gray-700 border-b-2 border-gray-200 tracking-wide w-[50px]"></th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, i) => (
                <tr key={i} className="hover:bg-primary/[0.03] transition-colors">
                  <td className="px-4 py-3.5 border-b border-gray-200 last:border-b-0 text-[13.5px] align-top">
                    <div className="font-bold text-destructive text-[13px] whitespace-nowrap flex items-center gap-1.5">📄 {doc.num}</div>
                  </td>
                  <td className="px-4 py-3.5 border-b border-gray-200 last:border-b-0 text-[13px] text-gray-500 whitespace-nowrap align-top">📅 {doc.date}</td>
                  <td className="px-4 py-3.5 border-b border-gray-200 last:border-b-0 text-[13.5px] text-gray-700 leading-relaxed align-top">{doc.desc}</td>
                  <td className="px-4 py-3.5 border-b border-gray-200 last:border-b-0 text-base text-gray-400 hover:text-primary cursor-pointer transition-colors align-top">⬇</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
