import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CampaignContent from "@/components/CampaignContent";
import DonationSidebar from "@/components/DonationSidebar";
import SupportMessages from "@/components/SupportMessages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-[65%]">
            <HeroSection />
            <CampaignContent />
            <SupportMessages />
          </div>

          {/* Right Column - Donation Sidebar */}
          <div className="lg:w-[35%]">
            <DonationSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
