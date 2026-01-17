import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TalentArchitecture from "@/components/home/TalentArchitecture";
import ClientsSection from "@/components/home/ClientsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsSection />
      <ServicesOverview />
      <TalentArchitecture />
      <CTASection />
    </Layout>
  );
};

export default Index;
