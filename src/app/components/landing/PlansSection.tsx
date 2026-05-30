import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import type { LandingPageContent } from '../../models/landing';
import { SectionBackdrop } from './SectionBackdrop';

interface PlansSectionProps {
  content: LandingPageContent;
}

export function PlansSection({ content }: PlansSectionProps) {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const section = content.plansSection;
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel || window.matchMedia('(min-width: 768px)').matches) {
      return;
    }

    const featuredPlan = carousel.children[1] as HTMLElement | undefined;

    featuredPlan?.scrollIntoView({
      behavior: 'instant',
      block: 'nearest',
      inline: 'center',
    });
  }, []);

  return (
    <section
      id="planos"
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
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[3.25rem] pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-8 [&::-webkit-scrollbar]:hidden"
        >
          {content.plans.map((plan, index) => (
            <div
              key={plan.name}
              className="w-[calc(100vw-6.5rem)] flex-none snap-center md:w-auto md:flex-auto"
            >
            <motion.article
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative flex h-full flex-col rounded-[1.35rem] p-3.5 shadow-[0_28px_85px_rgba(90,55,36,0.12)] backdrop-blur-sm sm:rounded-[2.4rem] sm:p-6 ${
                plan.isFeatured()
                  ? 'shadow-[0_34px_100px_rgba(245,159,11,0.22)] lg:-translate-y-4'
                  : ''
              }`}
              style={{
                border: '1.5px solid transparent',
                background: plan.borderBackground(),
              }}
            >
              <div className="mb-3 flex items-center justify-between sm:mb-5">
                {plan.isFeatured() ? (
                  <span className="rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(245,159,11,0.18)] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
                    {plan.badge}
                  </span>
                ) : (
                  <span />
                )}
              </div>

              <div
                className="relative overflow-hidden rounded-[1.1rem] p-3 sm:rounded-[2rem] sm:p-4"
                style={{
                  background: plan.imagePanelBackground(),
                }}
              >
                <img
                  src={plan.imageSrc}
                  alt={plan.name}
                  className="relative z-10 mx-auto h-[125px] w-full object-contain drop-shadow-[0_24px_40px_rgba(90,55,36,0.18)] sm:h-[250px]"
                />
              </div>

              <h3 className="mt-3 text-xl text-[#5a3726] sm:mt-6 sm:text-3xl">{plan.name}</h3>
              <p className="mt-1.5 text-xs leading-5 text-[#6b523f] sm:mt-3 sm:text-sm sm:leading-7">
                {plan.description}
              </p>

              <div className="mt-3 flex items-end gap-2 sm:mt-6">
                <span className="text-3xl text-[#5a3726] sm:text-5xl">{plan.price}</span>
                <span className="pb-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-[#6b523f] sm:pb-1 sm:text-sm sm:tracking-[0.15em]">
                  / mês
                </span>
              </div>

              <ul className="mt-3 space-y-2 sm:mt-6 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs leading-5 text-[#6b523f] sm:gap-3 sm:text-sm sm:leading-7"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white sm:mt-1 sm:h-6 sm:w-6"
                      style={{ backgroundColor: plan.accent }}
                    >
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contato"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition-all sm:mt-8 sm:px-6 sm:py-4 sm:text-base"
                style={{
                  border: `2px solid ${plan.accent}`,
                  color:
                    hoveredPlan === index || plan.isFeatured()
                      ? '#ffffff'
                      : plan.accent,
                  backgroundImage:
                    hoveredPlan === index || plan.isFeatured()
                      ? plan.buttonGradient()
                      : 'none',
                }}
              >
                {section.actionLabel}
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
