import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Work experience page!",
};

export default function WorkExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
