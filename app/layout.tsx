import { Outfit, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit"
});

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "GSK - Gastroenterology Society of Kenya",
  description: "Advancing Digestive Health Care in Kenya",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${merriweather.variable} ${playfair.variable} font-merriweather antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
