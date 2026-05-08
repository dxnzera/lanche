import { landingPageContent } from './data/landing-content';
import { AboutSection } from './components/landing/AboutSection';
import { FaqSection } from './components/landing/FaqSection';
import { LandingFooter } from './components/landing/LandingFooter';
import { LandingHeader } from './components/landing/LandingHeader';
import { HeroSection } from './components/landing/HeroSection';
import { MenuSection } from './components/landing/MenuSection';
import { PlansSection } from './components/landing/PlansSection';
import { UrgencySection } from './components/landing/UrgencySection';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-[#5a3726]">
      <LandingHeader
        logoSrc={landingPageContent.logoSrc}
        navigationItems={landingPageContent.navigationItems}
      />

      <main id="topo" className="relative">
        <HeroSection content={landingPageContent} />
        <MenuSection content={landingPageContent} />
        <AboutSection content={landingPageContent} />
        <PlansSection content={landingPageContent} />
        <FaqSection content={landingPageContent} />
        <UrgencySection content={landingPageContent.urgencyCallToAction} />
      </main>

      <LandingFooter
        content={landingPageContent}
        logoSrc={landingPageContent.logoSrc}
        navigationItems={landingPageContent.navigationItems}
      />
    </div>
  );
}
