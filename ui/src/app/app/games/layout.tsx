import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
  description: "Play a fun game!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
