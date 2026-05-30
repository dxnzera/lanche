import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { UrgencyCallToAction } from '../../models/landing';
import { SectionBackdrop } from './SectionBackdrop';

interface UrgencySectionProps {
  content: UrgencyCallToAction;
}

export function UrgencySection({ content }: UrgencySectionProps) {
  return (
    <section className="relative overflow-visible px-5 pb-16 pt-4 sm:px-8 sm:pb-24 sm:pt-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.8rem] border border-white/80 bg-[linear-gradient(135deg,#fff9e8_0%,#fbf3cb_45%,#ffe2b0_100%)] px-5 py-9 text-[#5a3726] shadow-[0_30px_90px_rgba(90,55,36,0.16)] sm:overflow-visible sm:rounded-[3rem] sm:px-8 sm:py-12 lg:px-14 lg:py-14">
        <SectionBackdrop />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full bg-[#ffd20a]/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#5a3726]">
              {content.eyebrow}
            </div>
            <h2 className="mt-5 max-w-xl text-3xl leading-tight tracking-[-0.03em] text-[#5a3726] sm:text-5xl sm:tracking-[-0.04em]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#6b523f] sm:mt-5 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contato"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-8 py-4 text-white shadow-[0_18px_40px_rgba(245,159,11,0.22)] sm:w-auto"
            >
              {content.buttonLabel}
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>

          <div className="relative mx-auto max-w-[360px] sm:max-w-[480px]">
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="w-full scale-110 object-contain drop-shadow-[0_28px_42px_rgba(0,0,0,0.22)] sm:scale-[140%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
