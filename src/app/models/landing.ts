import type { LucideIcon } from 'lucide-react';

export class NavigationItem {
  constructor(
    public readonly label: string,
    public readonly href: string,
  ) {}
}

export class HeroStatistic {
  constructor(
    public readonly value: string,
    public readonly label: string,
  ) {}
}

export class HeroSectionContent {
  constructor(
    public readonly eyebrow: string,
    public readonly titlePrefix: string,
    public readonly titleHighlight: string,
    public readonly titleSuffix: string,
    public readonly description: string,
    public readonly primaryActionLabel: string,
    public readonly secondaryActionLabel: string,
    public readonly showcaseImageSrc: string,
    public readonly showcaseImageAlt: string,
    public readonly showcaseTitle: string,
    public readonly showcaseDescription: string,
  ) {}
}

export class Product {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly imageSrc: string,
    public readonly imageAlt: string,
    public readonly badge: string,
    public readonly accentColor: string,
    public readonly background: string,
  ) {}
}

export class MenuSectionContent {
  constructor(
    public readonly eyebrow: string,
    public readonly title: string,
    public readonly description: string,
  ) {}
}

export class Benefit {
  constructor(
    public readonly icon: LucideIcon,
    public readonly title: string,
    public readonly description: string,
  ) {}
}

export class AboutSectionContent {
  constructor(
    public readonly eyebrow: string,
    public readonly title: string,
    public readonly highlightedTitle: string,
    public readonly description: string,
    public readonly showcaseEyebrow: string,
    public readonly showcaseDescription: string,
  ) {}
}

export class Plan {
  constructor(
    public readonly name: string,
    public readonly price: string,
    public readonly description: string,
    public readonly imageSrc: string,
    public readonly accent: string,
    public readonly features: readonly string[],
    public readonly badge?: string,
    public readonly featured = false,
  ) {}

  isFeatured() {
    return this.featured;
  }

  borderBackground() {
    return `linear-gradient(rgba(255,250,241,0.92), rgba(255,250,241,0.92)) padding-box, linear-gradient(145deg, ${
      this.isFeatured() ? '#f59f0b' : this.accent
    }, rgba(255,255,255,0.95), ${
      this.isFeatured() ? '#ffd20a' : `${this.accent}66`
    }) border-box`;
  }

  imagePanelBackground() {
    return `linear-gradient(180deg, ${this.accent}22 0%, #fff9eb 65%, #ffffff 100%)`;
  }

  buttonGradient() {
    return `linear-gradient(135deg, ${this.accent} 0%, ${
      this.isFeatured() ? '#f7bc4e' : '#ffd9a3'
    } 100%)`;
  }
}

export class PlansSectionContent {
  constructor(
    public readonly eyebrow: string,
    public readonly title: string,
    public readonly description: string,
    public readonly actionLabel: string,
  ) {}
}

export class FaqEntry {
  constructor(
    public readonly question: string,
    public readonly answer: string,
  ) {}
}

export class FaqSectionContent {
  constructor(
    public readonly eyebrow: string,
    public readonly title: string,
    public readonly description: string,
  ) {}
}

export class UrgencyCallToAction {
  constructor(
    public readonly eyebrow: string,
    public readonly title: string,
    public readonly description: string,
    public readonly buttonLabel: string,
    public readonly imageSrc: string,
    public readonly imageAlt: string,
  ) {}
}

export class FooterSectionContent {
  constructor(
    public readonly description: string,
    public readonly instagramUrl: string,
    public readonly instagramLabel: string,
    public readonly email: string,
    public readonly copyright: string,
  ) {}
}

export class LandingPageContent {
  constructor(
    public readonly logoSrc: string,
    public readonly navigationItems: readonly NavigationItem[],
    public readonly heroSection: HeroSectionContent,
    public readonly heroStatistics: readonly HeroStatistic[],
    public readonly menuSection: MenuSectionContent,
    public readonly products: readonly Product[],
    public readonly aboutSection: AboutSectionContent,
    public readonly benefits: readonly Benefit[],
    public readonly plansSection: PlansSectionContent,
    public readonly plans: readonly Plan[],
    public readonly faqSection: FaqSectionContent,
    public readonly faqEntries: readonly FaqEntry[],
    public readonly urgencyCallToAction: UrgencyCallToAction,
    public readonly footerSection: FooterSectionContent,
  ) {}

  featuredPlan() {
    return this.plans.find((plan) => plan.isFeatured()) ?? null;
  }

  aboutShowcaseProducts() {
    return {
      primaryProduct: this.products[0] ?? null,
      secondaryProduct: this.products[1] ?? null,
    };
  }
}
