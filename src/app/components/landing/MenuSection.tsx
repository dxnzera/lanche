import type { LandingPageContent } from '../../models/landing';
import { ProductCard } from '../ProductCard';
import { SectionBackdrop } from './SectionBackdrop';

interface MenuSectionProps {
  content: LandingPageContent;
}

export function MenuSection({ content }: MenuSectionProps) {
  const section = content.menuSection;

  return (
    <section
      id="cardapio"
      className="relative overflow-visible px-6 py-2 sm:px-8"
    >
      <SectionBackdrop mirrored />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex rounded-full bg-[#fff4ce] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#6b523f]">
            {section.eyebrow}
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight tracking-[-0.04em] text-[#5a3726] sm:text-5xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6b523f] sm:text-lg">
            {section.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {content.products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              badge={product.badge}
              accentColor={product.accentColor}
              background={product.background}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
