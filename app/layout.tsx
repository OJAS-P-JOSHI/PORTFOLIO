import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import AnimatedPointer from "@/components/ui/AnimatedPointer";
import ThemeWrapper from "@/components/ThemeWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ojas's Portfolio",
  description: "Developer portfolio of Ojas P Joshi"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none">
      <body className={`${inter.className} dark:bg-portfolio-100 cursor-none`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper>
            <AnimatedPointer />
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
