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
    <section className="relative overflow-visible px-6 py-24 sm:px-8">
      <SectionBackdrop />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-flex rounded-full bg-[#fff4ce] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#6b523f]">
            {section.eyebrow}
          </div>
          <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#5a3726] sm:text-5xl">
            {section.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6b523f] sm:text-lg">
            {section.description}
          </p>
        </div>

        <div className="rounded-[2.4rem] border border-white/75 bg-white/86 p-6 shadow-[0_28px_85px_rgba(90,55,36,0.12)] backdrop-blur-sm sm:p-8">
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
