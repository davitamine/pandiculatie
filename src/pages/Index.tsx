import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WatIsPandiculatie from "@/components/WatIsPandiculatie";
import HoeWerktHet from "@/components/HoeWerktHet";
import Voordelen from "@/components/Voordelen";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WatIsPandiculatie />
      <HoeWerktHet />
      <Voordelen />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
