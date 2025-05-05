import type { Metadata } from "next";
// Removed GeistSans import as it's not installed
// import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio Pro - Roger Zavaleta",
  description: "Personal portfolio of Roger Alessandro Zavaleta Marcelo, showcasing projects and skills.",
  keywords: "portfolio, developer, junior developer, react, nextjs, firebase, web developer, Roger Zavaleta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Removed GeistSans className */}
      <body className={cn("antialiased flex flex-col min-h-screen")}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
