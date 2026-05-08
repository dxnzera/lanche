import { motion } from 'motion/react';

interface CurvedShapeProps {
  color?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  flip?: boolean;
  size?: number;
  opacity?: number;
  rotate?: number;
  className?: string;
  variant?: 'bean' | 'swoop' | 'seed';
}

const shapePaths = {
  bean: 'M0 0C100 0 200 50 300 100C350 125 400 150 400 200C400 300 350 400 250 400C150 400 50 350 0 250V0Z',
  swoop: 'M16 98C67 16 164 -13 255 18C350 51 417 142 395 230C370 330 267 403 160 391C88 383 25 339 6 274C-9 224 -8 137 16 98Z',
  seed: 'M41 141C83 39 235 -16 325 72C392 139 393 260 314 324C239 385 112 389 49 302C16 257 16 199 41 141Z',
};

export function CurvedShape({
  color = '#f59f0b',
  position = 'top-right',
  flip = false,
  size = 400,
  opacity = 0.1,
  rotate = 0,
  className = '',
  variant = 'bean',
}: CurvedShapeProps) {
  const positionClasses = {
    'top-left': '-top-32 -left-32',
    'top-right': '-top-32 -right-32',
    'bottom-left': '-bottom-32 -left-32',
    'bottom-right': '-bottom-32 -right-32',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className={`absolute ${positionClasses[position]} pointer-events-none overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        transform: `${flip ? 'scaleX(-1) ' : ''}rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={shapePaths[variant]}
          fill={color}
          opacity={opacity}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}
