import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description: "Project page!",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen w-full">{children}</div>;
}
