import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import type { NavigationItem } from '../../models/landing';

interface LandingHeaderProps {
  logoSrc: string;
  navigationItems: readonly NavigationItem[];
}

export function LandingHeader({
  logoSrc,
  navigationItems,
}: LandingHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-[#e9dcc0] bg-[#fffaf0]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#topo" className="flex items-center gap-3">
          <img src={logoSrc} alt="Lanchê" className="h-9 sm:h-10" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navigationItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="group relative text-sm uppercase tracking-[0.18em] text-[#6b523f] transition-colors hover:text-[#f59f0b]"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left bg-[#f59f0b]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadabd] bg-white/70 text-[#5a3726] shadow-[0_12px_28px_rgba(90,55,36,0.1)] md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#planos"
          className="hidden items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-6 py-3 text-sm uppercase tracking-[0.14em] text-white shadow-[0_16px_35px_rgba(245,159,11,0.28)] md:flex"
        >
          Assinar
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>

      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="border-t border-[#eadabd] bg-[#fffaf0]/96 px-5 py-4 shadow-[0_18px_38px_rgba(90,55,36,0.08)] md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.16em] text-[#6b523f] transition-colors hover:bg-[#fff4ce] hover:text-[#f59f0b]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
