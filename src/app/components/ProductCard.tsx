import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  accentColor?: string;
  background?: string;
  delay?: number;
}

export function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  badge,
  accentColor = '#f59f0b',
  background = 'linear-gradient(180deg, #fffaf0 0%, #f7cf84 100%)',
  delay = 0,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/90 shadow-[0_28px_80px_rgba(90,55,36,0.14)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_34px_90px_rgba(90,55,36,0.2)] sm:rounded-[2rem]"
    >
      <div
        className="relative h-[220px] overflow-hidden p-3 sm:aspect-[4/5] sm:h-auto sm:p-4"
        style={{ background }}
      >
        <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.14em] text-[#5a3726] shadow-md sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
          {badge}
        </div>
        <div
          className="absolute inset-6 rounded-[1.75rem] opacity-70"
          style={{
            background: `radial-gradient(circle at top left, ${accentColor}33 0%, transparent 58%)`,
          }}
        />
        <motion.div
          transition={{ duration: 0.4 }}
          className="relative z-10 flex h-full items-center justify-center"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full scale-[1.40] object-contain drop-shadow-[0_26px_45px_rgba(90,55,36,0.24)] transition-transform duration-500 group-hover:scale-[1.65]"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          type="button"
          aria-label={isLiked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm sm:right-5 sm:top-5 sm:h-12 sm:w-12"
        >
          <Heart
            className={`h-5 w-5 transition-all sm:h-6 sm:w-6 ${
              isLiked ? 'fill-[#ff3136] text-[#ff3136]' : 'text-[#8d7f73]'
            }`}
          />
        </motion.button>
      </div>

      <div className="space-y-2 p-4 sm:space-y-3 sm:p-7">
        <h3 className="text-xl leading-tight text-[#5a3726] sm:text-2xl">{title}</h3>
        <p className="text-xs leading-5 text-[#6b523f] sm:text-sm sm:leading-7">{description}</p>
      </div>
    </motion.article>
  );
}
