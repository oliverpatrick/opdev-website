import type { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from "react";

import { AppProvider } from "./provider";
import { getUserQueryOptions } from "@/lib/auth";

import MobileNav from "@/components/mobile-nav";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Oliver Patrick",
  description: "Welcome to my personal website!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getUserQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className="min-h-screen font-mono antialiased">
        <AppProvider>
          <HydrationBoundary state={dehydratedState}>
            {children}

            <MobileNav />
          </HydrationBoundary>
        </AppProvider>
      </body>
    </html>
  );
}

// We are not prerendering anything because the app is highly dynamic
// and the data depends on the user so we need to send cookies with each request
export const dynamic = "force-dynamic";
