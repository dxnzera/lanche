import { motion } from 'motion/react';
import lunchBagImage from '../../../assets/brinde-lancheira-lanche.png';
import type { LandingPageContent } from '../../models/landing';
import { SectionBackdrop } from './SectionBackdrop';

interface AboutSectionProps {
  content: LandingPageContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  const section = content.aboutSection;
  const { primaryProduct, secondaryProduct } = content.aboutShowcaseProducts();

  if (!primaryProduct || !secondaryProduct) {
    return null;
  }

  return (
    <section
      id="sobre"
      className="relative overflow-visible px-5 py-14 sm:px-8 sm:py-24"
    >
      <SectionBackdrop />
      <div className='flex justify-center items-center'>
        <div className="mb-4 inline-flex rounded-full bg-[#fff4ce] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#6b523f]">
          {section.eyebrow}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="relative mx-auto aspect-[1.05/1] max-w-[520px] lg:max-w-none">
            <motion.div
              animate={{ rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[6%] rounded-[2.4rem] bg-[linear-gradient(360deg,#E7FDDF_0%,#D0FDBF_48%,#BBFDA2_100%)] shadow-[0_30px_80px_rgba(245,159,11,0.24)] sm:rounded-[4rem]"
            />
            <motion.div
              animate={{ rotate: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[10%] rounded-[2rem] border border-white/80 bg-white/35 shadow-[0_26px_70px_rgba(90,55,36,0.16)] backdrop-blur-[2px] sm:rounded-[3.25rem]"
            />
            <motion.img
              src={secondaryProduct.imageSrc}
              alt={secondaryProduct.imageAlt}
              className="absolute right-1 top-8 z-10 w-[82%] object-contain drop-shadow-[0_28px_44px_rgba(90,55,36,0.18)] sm:right-30 sm:top-10 sm:w-[90%]"
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src={lunchBagImage}
              alt={primaryProduct.imageAlt}
              className="absolute bottom-0 left-3 z-20 w-[86%] object-contain drop-shadow-[0_30px_46px_rgba(90,55,36,0.18)] sm:left-20 sm:w-[95%]"
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 left-3 z-30 max-w-[8.8rem] rounded-[1rem] border border-[#cce8c7] bg-[linear-gradient(160deg,#45ac67_0%,#1fa45f_45%,#0e9f59_100%)] px-2.5 py-2 text-white shadow-[0_18px_35px_rgba(9,157,88,0.25)] sm:max-w-[9.8rem] lg:bottom-8 lg:left-6 lg:max-w-[15rem] lg:rounded-[1.7rem] lg:px-5 lg:py-4"
            >
              <div className="text-[0.56rem] uppercase leading-tight tracking-[0.12em] text-[#dff7b6] lg:text-xs lg:leading-snug lg:tracking-[0.18em]">
                {section.showcaseEyebrow}
              </div>
              <p className="mt-1 text-[0.68rem] leading-[1.25] lg:mt-2 lg:text-sm lg:leading-5">
                {section.showcaseDescription}
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="max-w-xl text-3xl leading-tight tracking-[-0.03em] text-[#5a3726] sm:text-5xl sm:tracking-[-0.04em]">
            {section.title} <span className="text-[#008D4D]">{section.highlightedTitle}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#6b523f] sm:mt-6 sm:text-lg sm:leading-8">
            {section.description}
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
            {content.benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.7rem] border border-white/70 bg-white/82 p-6 shadow-[0_16px_40px_rgba(90,55,36,0.08)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3c2] text-[#099d58]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl text-[#5a3726]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6b523f]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
