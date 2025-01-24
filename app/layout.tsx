'use client';

import { Inter, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/homepage/Navigation";
import React, { useState, useEffect } from 'react';
import AuthLoader from '@/components/AuthLoader';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather"
});
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  useEffect(() => {
    const auth = localStorage.getItem('gsk-auth');
    setIsAuthenticated(auth === 'true');
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} ${playfair.variable} font-sans ${!isAuthenticated ? 'overflow-hidden' : ''}`}>
        {!isAuthenticated ? (
          <AuthLoader onAuthenticated={() => setIsAuthenticated(true)} />
        ) : (
          <div className="w-full">
            {!isDashboard && <Navigation />}
            <div className="w-full">
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
