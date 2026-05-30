import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import type { LandingPageContent } from '../../models/landing';
import { SectionBackdrop } from './SectionBackdrop';

interface FaqSectionProps {
  content: LandingPageContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  const section = content.faqSection;

  return (
    <section className="relative overflow-visible px-5 py-14 sm:px-8 sm:py-24">
      <SectionBackdrop />

      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center sm:mb-12">
          <div className="inline-flex rounded-full bg-[#fff4ce] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#6b523f]">
            {section.eyebrow}
          </div>
          <h2 className="mt-5 text-3xl leading-tight tracking-[-0.03em] text-[#5a3726] sm:text-5xl sm:tracking-[-0.04em]">
            {section.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6b523f] sm:mt-5 sm:text-lg sm:leading-8">
            {section.description}
          </p>
        </div>

        <div className="rounded-[1.6rem] border border-white/75 bg-white/86 p-4 shadow-[0_28px_85px_rgba(90,55,36,0.12)] backdrop-blur-sm sm:rounded-[2.4rem] sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {content.faqEntries.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-[#eadabd]"
              >
                <AccordionTrigger className="text-base text-[#5a3726] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-[#6b523f]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
