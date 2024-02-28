import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/base.css';
import { site } from '@/site';

const inter = Inter({ subsets: ['latin'] });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `Home - ${site.name}`,
    default: site.title,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
