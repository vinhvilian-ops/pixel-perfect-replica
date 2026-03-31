import useScrollAnimation from "@/hooks/useScrollAnimation";
import TopBar from "@/components/portal/TopBar";
import Header from "@/components/portal/Header";
import HeroBanner from "@/components/portal/HeroBanner";
import QuickActions from "@/components/portal/QuickActions";
import DirectiveTabSection from "@/components/portal/DirectiveTabSection";

import CitizenNewsSection from "@/components/portal/CitizenNewsSection";
import TourismSection from "@/components/portal/TourismSection";
import InfographicsSection from "@/components/portal/InfographicsSection";
import VideoSection from "@/components/portal/VideoSection";
import DepartmentSection from "@/components/portal/DepartmentSection";
import Footer from "@/components/portal/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <HeroBanner />
      <QuickActions />
      <DirectiveTabSection />
      <CitizenNewsSection />
      <TourismSection />
      <InfographicsSection />
      <VideoSection />
      <DepartmentSection />
      <Footer />
    </div>
  );
};

export default Index;
