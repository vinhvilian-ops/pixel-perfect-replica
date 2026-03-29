import useScrollAnimation from "@/hooks/useScrollAnimation";
import TopBar from "@/components/portal/TopBar";
import Header from "@/components/portal/Header";
import HeroBanner from "@/components/portal/HeroBanner";
import QuickActions from "@/components/portal/QuickActions";
import NewsSection from "@/components/portal/NewsSection";
import DirectiveSection from "@/components/portal/DirectiveSection";
import LocalNews from "@/components/portal/LocalNews";
import DocumentSection from "@/components/portal/DocumentSection";
import MediaGallery from "@/components/portal/MediaGallery";
import Footer from "@/components/portal/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroBanner />
      <QuickActions />
      <NewsSection />
      <DirectiveSection />
      <LocalNews />
      <DocumentSection />
      <MediaGallery />
      <Footer />
    </div>
  );
};

export default Index;
