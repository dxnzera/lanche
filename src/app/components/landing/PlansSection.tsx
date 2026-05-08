import { useState } from 'react';
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

  return (
    <section
      id="planos"
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

        <div className="grid gap-8 lg:grid-cols-3">
          {content.plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative flex h-full flex-col rounded-[2.4rem] p-6 shadow-[0_28px_85px_rgba(90,55,36,0.12)] backdrop-blur-sm ${
                plan.isFeatured()
                  ? 'shadow-[0_34px_100px_rgba(245,159,11,0.22)] lg:-translate-y-4'
                  : ''
              }`}
              style={{
                border: '1.5px solid transparent',
                background: plan.borderBackground(),
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                {plan.isFeatured() ? (
                  <span className="rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(245,159,11,0.18)]">
                    {plan.badge}
                  </span>
                ) : (
                  <span />
                )}
              </div>

              <div
                className="relative overflow-hidden rounded-[2rem] p-4"
                style={{
                  background: plan.imagePanelBackground(),
                }}
              >
                <img
                  src={plan.imageSrc}
                  alt={plan.name}
                  className="relative z-10 mx-auto h-[250px] w-full object-contain drop-shadow-[0_24px_40px_rgba(90,55,36,0.18)]"
                />
              </div>

              <h3 className="mt-6 text-3xl text-[#5a3726]">{plan.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b523f]">
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl text-[#5a3726]">{plan.price}</span>
                <span className="pb-1 text-sm uppercase tracking-[0.15em] text-[#6b523f]">
                  / mês
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-7 text-[#6b523f]"
                  >
                    <span
                      className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: plan.accent }}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contato"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base transition-all"
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
          ))}
        </div>
      </div>
    </section>
  );
}
