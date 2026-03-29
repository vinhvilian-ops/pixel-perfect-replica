import SectionHeader from "./SectionHeader";

const mediaItems = [
  { icon: "🎥", color: "from-[hsl(195,60%,85%)] to-[hsl(195,60%,75%)]", caption: "Hướng dẫn cử tri về Công tác bầu cử ĐBQH khóa XVI", type: "video", duration: "05:12" },
  { icon: "🏖", color: "from-[hsl(175,60%,80%)] to-[hsl(175,60%,70%)]", caption: "Độc đáo Lễ hội tháp Bà Ponagar mùa xuân 2026", type: "photo" },
  { icon: "🏅", color: "from-[hsl(217,60%,85%)] to-[hsl(217,60%,75%)]", caption: "Vinh danh học sinh, sinh viên xuất sắc tiêu biểu năm 2025", type: "photo" },
];

const MediaGallery = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <SectionHeader title="Thư viện ảnh – Video" />
        <div className="grid grid-cols-3 gap-4 stagger">
          {mediaItems.map((item, i) => (
            <div key={i} className="rounded-lg overflow-hidden relative aspect-[16/10] cursor-pointer group">
              <div className={`absolute inset-0 flex items-center justify-center text-[48px] bg-gradient-to-br ${item.color} group-hover:scale-[1.06] transition-transform duration-500`}>
                {item.icon}
              </div>

              {item.type === "video" && (
                <>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-accent/90 rounded-full flex items-center justify-center text-xl text-accent-foreground shadow-[0_4px_16px_rgba(232,160,32,0.5)] scale-90 group-hover:scale-100 transition-all z-10">
                    ▶
                  </div>
                  <div className="absolute bottom-[52px] right-2.5 bg-foreground/70 text-primary-foreground text-[11px] font-bold px-2 py-0.5 rounded z-10">
                    {item.duration}
                  </div>
                </>
              )}

              {item.type === "photo" && (
                <div className="absolute top-2.5 right-2.5 bg-foreground/50 backdrop-blur-sm text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm z-10">
                  📷
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent flex items-end p-4 group-hover:from-foreground/80 transition-all">
                <div className="text-primary-foreground text-[13px] font-semibold leading-snug">{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
