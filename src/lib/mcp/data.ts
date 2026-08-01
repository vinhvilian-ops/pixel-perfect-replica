// Public content of the Khánh Hòa provincial portal, exposed through MCP tools.

export interface NewsItem {
  title: string;
  date: string;
  category: string;
}

export const news: NewsItem[] = [
  { title: "Công bố giá vật liệu xây dựng ngay khi có biến động thị trường", date: "2026-03-27", category: "Công dân" },
  { title: "Cục Đăng kiểm tường minh nhiều vấn đề liên quan đến quy trình kiểm tra khí thải với động cơ diesel", date: "2026-03-27", category: "Công dân" },
  { title: "Tăng mạnh mức phạt, siết chặt quản lý hoạt động bức xạ, hạt nhân", date: "2026-03-26", category: "Công dân" },
  { title: "Hơn 12.000 vận động viên tranh tài tại Giải vô địch quốc gia Marathon – Báo Tiền Phong lần thứ 67", date: "2026-03-26", category: "Thể thao" },
  { title: "Hội nghị triển khai Nghị quyết về phát triển kinh tế - xã hội vùng Duyên hải Nam Trung Bộ", date: "2026-03-25", category: "Kinh tế" },
  { title: "Đẩy nhanh tiến độ thi công các tuyến cao tốc trọng điểm khu vực miền Trung", date: "2026-03-25", category: "Giao thông" },
  { title: "Lịch thi tốt nghiệp THPT năm 2026", date: "2026-03-25", category: "Giáo dục" },
  { title: "Khánh Hòa đặt mục tiêu 100% xã, phường, đặc khu đạt chuẩn phát triển văn hóa toàn diện", date: "2026-03-24", category: "Văn hóa" },
  { title: "Kế hoạch phòng bệnh phong giai đoạn 2026 – 2030", date: "2026-03-24", category: "Y tế" },
  { title: "Sửa quy định về xử phạt vi phạm hành chính lĩnh vực kinh doanh bảo hiểm", date: "2026-03-24", category: "Chính sách" },
  { title: "Chỉ đạo, điều hành của Chính phủ, Thủ tướng Chính phủ nổi bật tuần từ 14–20/3/2026", date: "2026-03-24", category: "Chính sách" },
  { title: "Hưởng ứng Ngày Thế giới phòng, chống bệnh lao 24-3: Phát hiện sớm để tiến tới chấm dứt bệnh lao", date: "2026-03-24", category: "Y tế" },
  { title: "Quy hoạch mạng lưới đường sắt quốc gia thời kỳ 2021–2030, tầm nhìn đến năm 2050", date: "2026-03-23", category: "Giao thông" },
  { title: "Phê duyệt quy hoạch sử dụng đất giai đoạn 2026–2030 trên địa bàn tỉnh", date: "2026-03-22", category: "Quy hoạch" },
  { title: "Nâng cao hiệu quả phối hợp trong triển khai các dự án đầu tư xây dựng", date: "2026-03-21", category: "Xây dựng" },
  { title: "Sửa đổi, bổ sung quy định về đơn giá bồi thường nhà, công trình khi Nhà nước thu hồi đất", date: "2026-03-20", category: "Chính sách" },
  { title: "Xây dựng Khánh Hòa trở thành điểm đến của các sự kiện văn hóa, nghệ thuật và giải trí biển", date: "2026-03-20", category: "Du lịch" },
];

export const departments: string[] = [
  "Văn phòng UBND tỉnh",
  "Sở Nội vụ",
  "Sở Tài chính",
  "Sở Công Thương",
  "Sở Nông nghiệp và Môi trường",
  "Sở Dân tộc và Tôn giáo",
  "Sở Tư pháp",
  "Thanh tra tỉnh",
  "Sở Khoa học và Công nghệ",
  "Sở Văn hóa, Thể thao và Du lịch",
  "Sở Xây dựng",
  "Sở Giáo dục và Đào tạo",
  "Sở Y tế",
  "Sở Ngoại vụ",
  "Ban Quản lý Khu kinh tế và Khu công nghiệp",
  "Ban Quản lý Vườn QG Núi Chúa – Phước Bình",
  "Ban quản lý dự án phát triển tỉnh",
  "Ban Quản lý dự án đầu tư xây dựng",
  "Ban QLDA đầu tư xây dựng các công trình Nông nghiệp và Giao thông",
];

export const localities: string[] = [
  "TP. Nha Trang",
  "TP. Cam Ranh",
  "TX. Ninh Hòa",
  "Huyện Diên Khánh",
  "Huyện Cam Lâm",
  "Huyện Vạn Ninh",
  "Huyện Khánh Sơn",
  "Huyện Khánh Vĩnh",
  "Đặc khu Bắc Vân Phong",
  "Đặc khu Trường Sa",
];

export const contact = {
  organization: "Cổng Thông tin điện tử tỉnh Khánh Hòa",
  managedBy: "Văn phòng UBND tỉnh Khánh Hòa",
  address: "01 Trần Phú, phường Lộc Thọ, thành phố Nha Trang, tỉnh Khánh Hòa",
  phones: ["(0258) 3.822.500", "(0258) 3.827.008"],
  email: "congttdt@khanhhoa.gov.vn",
  website: "www.khanhhoa.gov.vn",
  editorInChief: "Chánh Văn phòng UBND tỉnh",
};
