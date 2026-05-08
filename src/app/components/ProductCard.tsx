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
      className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_28px_80px_rgba(90,55,36,0.14)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_34px_90px_rgba(90,55,36,0.2)]"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden p-4"
        style={{ background }}
      >
        <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#5a3726] shadow-md">
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
          className="absolute right-5 top-5 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm"
        >
          <Heart
            className={`h-6 w-6 transition-all ${
              isLiked ? 'fill-[#ff3136] text-[#ff3136]' : 'text-[#8d7f73]'
            }`}
          />
        </motion.button>
      </div>

      <div className="space-y-3 p-7">
        <h3 className="text-2xl leading-tight text-[#5a3726]">{title}</h3>
        <p className="text-sm leading-7 text-[#6b523f]">{description}</p>
      </div>
    </motion.article>
  );
}
