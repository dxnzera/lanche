import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { UrgencyCallToAction } from '../../models/landing';
import { SectionBackdrop } from './SectionBackdrop';

interface UrgencySectionProps {
  content: UrgencyCallToAction;
}

export function UrgencySection({ content }: UrgencySectionProps) {
  return (
    <section className="relative overflow-visible px-6 pb-24 pt-8 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-visible rounded-[3rem] border border-white/80 bg-[linear-gradient(135deg,#fff9e8_0%,#fbf3cb_45%,#ffe2b0_100%)] px-8 py-12 text-[#5a3726] shadow-[0_30px_90px_rgba(90,55,36,0.16)] lg:px-14 lg:py-14">
        <SectionBackdrop />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_0.8fr]">
          <div>
            <div className="inline-flex rounded-full bg-[#ffd20a]/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#5a3726]">
              {content.eyebrow}
            </div>
            <h2 className="mt-5 max-w-xl text-4xl leading-tight tracking-[-0.04em] text-[#5a3726] sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#6b523f] sm:text-lg">
              {content.description}
            </p>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contato"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-8 py-4 text-white shadow-[0_18px_40px_rgba(245,159,11,0.22)]"
            >
              {content.buttonLabel}
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>

          <div className="relative mx-auto max-w-[480px]">
            <img
              src={content.imageSrc}
              alt={content.imageAlt}
              className="w-full object-contain scale-[140%] drop-shadow-[0_28px_42px_rgba(0,0,0,0.22)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
