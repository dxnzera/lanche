import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import type { LandingPageContent } from '../../models/landing';
import { SectionBackdrop } from './SectionBackdrop';

interface HeroSectionProps {
  content: LandingPageContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const hero = content.heroSection;

  return (
    <section className="relative overflow-visible px-6 pb-20 pt-32 sm:px-8 lg:pb-24 lg:pt-36">
      <SectionBackdrop />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f1deb2] bg-[#fff8e5]/90 px-4 py-2 shadow-[0_12px_30px_rgba(90,55,36,0.08)]"
            >
              <Star className="h-3.5 w-3.5 fill-[#ffd20a] text-[#f59f0b]" />
              <span className="text-xs uppercase tracking-[0.16em] text-[#6b523f]">
                {hero.eyebrow}
              </span>
            </motion.div>

            <h1 className="max-w-xl text-5xl leading-[0.92] tracking-[-0.05em] text-[#5a3726] sm:text-6xl lg:text-[5.6rem]">
              {hero.titlePrefix}
              <br />
              <span className="text-[#f59f0b]">{hero.titleHighlight}</span>{' '}
              {hero.titleSuffix}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6b523f] sm:text-xl">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#cardapio"
                className="flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-8 py-4 text-base text-white shadow-[0_18px_40px_rgba(245,159,11,0.28)] transition-all"
              >
                {hero.primaryActionLabel}
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#sobre"
                className="rounded-full border-2 border-[#5a3726] px-8 py-4 text-base text-[#5a3726] transition-all hover:bg-[#5a3726] hover:text-[#fff9ea]"
              >
                {hero.secondaryActionLabel}
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14 flex max-w-xl items-center gap-8"
            >
              {content.heroStatistics.map((statistic, index) => (
                <div key={statistic.label} className="relative">
                  <div className="text-5xl font-semibold leading-none text-[#f59f0b]">
                    {statistic.value}
                  </div>
                  <div className="mt-3 text-sm leading-2 text-[#6b523f]">
                    {statistic.label}
                  </div>
                  {index === 0 && (
                    <div className="absolute right-[-1.25rem] top-1/2 h-14 w-px -translate-y-1/2 bg-[#e6d6b8]" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[680px]"
          >
            <div className="relative aspect-[1.05/1]">
              <motion.div
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[6%] rounded-[4rem] bg-[linear-gradient(180deg,#f5ad35_0%,#f7bf43_48%,#f9d15e_100%)] shadow-[0_30px_80px_rgba(245,159,11,0.24)]"
              />
              <motion.div 
                animate={{ rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[10%] rounded-[3.25rem] border border-white/80 bg-white/55 shadow-[0_26px_70px_rgba(90,55,36,0.16)] backdrop-blur-[2px]" 
              />
              <img
                src={hero.showcaseImageSrc}
                alt={hero.showcaseImageAlt}
                className="absolute bottom-[15%] z-10 w-[160%] object-contain drop-shadow-[0_26px_45px_rgba(90,55,36,0.24)]"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-4 z-30 max-w-[13rem] rounded-[1.75rem] border border-[#8f6245]/40 bg-[linear-gradient(155deg,#7b4f37_0%,#6a4330_42%,#8a5c42_100%)] px-5 py-4 text-[#fff7de] shadow-[0_18px_40px_rgba(90,55,36,0.22)] sm:left-8"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-[#ffd20a]">
                  {hero.showcaseTitle}
                </div>
                <p className="mt-2 text-sm leading-5">
                  {hero.showcaseDescription}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
