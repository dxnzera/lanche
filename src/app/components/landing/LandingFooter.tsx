import { motion } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';
import type { NavigationItem } from '../../models/landing';

interface LandingFooterProps {
  content: LandingPageContent;
  logoSrc: string;
  navigationItems: readonly NavigationItem[];
}

export function LandingFooter({
  content,
  logoSrc,
  navigationItems,
}: LandingFooterProps) {
  const footer = content.footerSection;

  return (
    <footer
      id="contato"
      className="border-t border-[#eadabd] bg-[#fff8e8] px-6 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logoSrc} alt="Lanchê" className="h-12" />
            <p className="mt-5 max-w-md text-base leading-8 text-[#6b523f]">
              {footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg text-[#5a3726]">Navegação</h3>
            <div className="mt-5 space-y-3 text-sm text-[#6b523f]">
              {navigationItems.map((link) => (
                <motion.a
                  key={link.label}
                  whileHover={{ x: 5 }}
                  href={link.href}
                  className="block transition-colors hover:text-[#f59f0b]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg text-[#5a3726]">Contato</h3>
            <div className="mt-5 space-y-4 text-sm text-[#6b523f]">
              <motion.a
                whileHover={{ x: 5 }}
                href={footer.instagramUrl}
                className="flex items-center gap-3 transition-colors hover:text-[#099d58]"
              >
                <Instagram className="h-5 w-5" />
                {footer.instagramLabel}
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href={`mailto:${footer.email}`}
                className="flex items-center gap-3 transition-colors hover:text-[#099d58]"
              >
                <Mail className="h-5 w-5" />
                {footer.email}
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#eadabd] pt-6 text-sm text-[#8d7f73]">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
