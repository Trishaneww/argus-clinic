import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Brawler } from "next/font/google";

import { cn } from "@/lib/utils";
const inter = FontSans({ weight: ["200", "300", "400", "500", "600", "700", "800"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Argus Clinic",
  description:
    "Medical clinic based in oakville ontario.",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
