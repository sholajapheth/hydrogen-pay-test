import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturesSection from "@/components/features-section";
import BenefitsSection from "@/components/benefits-section";
import BenefitsSectionRight from "@/components/benefits-section-right";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <BenefitsSectionRight />

      <FooterSection />
    </div>
  );
}
