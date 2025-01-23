import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/homepage/Navigation";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Simple Authentication Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
