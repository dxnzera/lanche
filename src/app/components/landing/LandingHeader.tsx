import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { NavigationItem } from '../../models/landing';

interface LandingHeaderProps {
  logoSrc: string;
  navigationItems: readonly NavigationItem[];
}

export function LandingHeader({
  logoSrc,
  navigationItems,
}: LandingHeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-[#e9dcc0] bg-[#fffaf0]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <img src={logoSrc} alt="Lanchê" className="h-10" />
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

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#planos"
          className="flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f2a22a_0%,#f7bc4e_100%)] px-6 py-3 text-sm uppercase tracking-[0.14em] text-white shadow-[0_16px_35px_rgba(245,159,11,0.28)]"
        >
          Assinar
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.header>
  );
}
