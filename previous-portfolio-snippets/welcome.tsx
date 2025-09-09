import clsx from 'clsx';

export function Welcome() {
  const className = clsx(
    'bg-gradient-to-l from-emerald-500 to-lime-600',
    'bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-5xl md:leading-[86px]'
  );

  return (
    <div className={className}>
      I Talk to Computers <span>🗣💻</span>
    </div>
  );
}
