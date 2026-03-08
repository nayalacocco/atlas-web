import { SiteHeader } from "@/components/layout/site-header";
import { ClientsSection } from "@/components/sections/clients";
import { DifferentiatorsSection } from "@/components/sections/differentiators";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { InstitutionalSection } from "@/components/sections/institutional";
import { OverviewSection } from "@/components/sections/overview";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <ClientsSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <InstitutionalSection />
      <FinalCtaSection />
    </main>
  );
}
