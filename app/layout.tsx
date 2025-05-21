import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import AnimatedPointer from "@/components/ui/AnimatedPointer";

const inter = Inter({ subsets: ["latin"] });

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
          <AnimatedPointer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
