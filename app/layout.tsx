
import type { Metadata } from "next";
import "./globals.css";
import ScrollSmooth from "@/components/layout/scroll-smooth";
import { Toaster } from "@/components/ui/sonner"
import localFont from 'next/font/local'

const dx_Bloop = localFont({
  src: './font/graffity-fill-webfont.woff2',
  display: 'swap',
  variable: '--font-dx-bloop',
})

const neueMontreal = localFont({
  src: [
    {
      path: './font/neuemontreal-light-webfont.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './font/neuemontreal-medium-webfont.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './font/neuemontreal-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neueMontreal',
});

export const metadata: Metadata = {
  title: "Nicolas Bechart - Portfolio",
  description: "Nicolas Bechart - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dx_Bloop.variable} ${neueMontreal.className} antialiased bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 p-4 w-full`}
      >
        <ScrollSmooth duration={1.2}>
          {children}
          <Toaster />
        </ScrollSmooth>
      </body>

    </html>
  );
}
