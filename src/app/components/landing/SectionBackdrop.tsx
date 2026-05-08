import { CurvedShape } from '../CurvedShape';

interface SectionBackdropProps {
  mirrored?: boolean;
}

export function SectionBackdrop({ mirrored = false }: SectionBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      <CurvedShape
        color="#ffd20a"
        className={mirrored ? '-left-24 top-16' : '-right-28 top-10'}
        size={300}
        opacity={0.14}
        rotate={mirrored ? -18 : 18}
        variant="swoop"
      />
      <CurvedShape
        color="#f59f0b"
        className={mirrored ? 'right-[-6rem] bottom-16' : '-left-24 bottom-8'}
        size={280}
        opacity={0.12}
        rotate={mirrored ? 16 : -12}
        variant="bean"
      />
      <CurvedShape
        color="#9ef57d"
        className={mirrored ? 'right-[12%] top-[34%]' : 'left-[10%] top-[32%]'}
        size={140}
        opacity={0.12}
        rotate={mirrored ? -8 : 24}
        variant="seed"
      />
    </div>
  );
}
