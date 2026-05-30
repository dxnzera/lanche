import { useEffect, useRef } from 'react';
import type { LandingPageContent } from '../../models/landing';
import { ProductCard } from '../ProductCard';
import { SectionBackdrop } from './SectionBackdrop';

interface MenuSectionProps {
  content: LandingPageContent;
}

export function MenuSection({ content }: MenuSectionProps) {
  const section = content.menuSection;
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || window.matchMedia('(min-width: 768px)').matches) {
      return;
    }

    const featuredCard = carousel.children[1] as HTMLElement | undefined;

    featuredCard?.scrollIntoView({
      behavior: 'instant',
      block: 'nearest',
      inline: 'center',
    });
  }, []);

  return (
    <section
      id="cardapio"
      className="relative overflow-visible px-5 py-12 sm:px-8 sm:py-2"
    >
      <SectionBackdrop mirrored />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-16">
          <div className="inline-flex rounded-full bg-[#fff4ce] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#6b523f]">
            {section.eyebrow}
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight tracking-[-0.03em] text-[#5a3726] sm:text-5xl sm:tracking-[-0.04em]">
            {section.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6b523f] sm:mt-5 sm:text-lg sm:leading-8">
            {section.description}
          </p>
        </div>

        <div
          ref={carouselRef}
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[3.25rem] pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
        >
          {content.products.map((product, index) => (
            <div
              key={product.title}
              className="w-[calc(100vw-6.5rem)] flex-none snap-center md:w-auto md:flex-auto"
            >
              <ProductCard
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                badge={product.badge}
                accentColor={product.accentColor}
                background={product.background}
                delay={index * 0.08}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
