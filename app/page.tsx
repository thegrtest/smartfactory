import {
  ApproachSection,
  CapabilityStrip,
  FinalCta,
  HeroSection,
  PrinciplesSection,
  SiteFooter,
  SiteHeader,
  StepsSection,
  SystemSection,
  UseCasesSection,
} from "./home-sections";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <CapabilityStrip />
        <ApproachSection />
        <SystemSection />
        <UseCasesSection />
        <PrinciplesSection />
        <StepsSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
