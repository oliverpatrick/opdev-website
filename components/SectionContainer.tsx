import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="xl:m mx-auto max-w-5xl px-4 sm:px-6 xl:px-0">
      {children}
    </section>
  );
}
