import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { SpeedInsights } from '@vercel/speed-insights/next'; // <-- Import SpeedInsights
import { Analytics } from "@vercel/analytics/next"
const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
        {/* Add SpeedInsights at the end of the body */}
        <SpeedInsights /> 
        <Analytics /> 
      </body>
    </html>
  );
}
