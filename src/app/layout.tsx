import './globals.css'

import { Montserrat, Oxanium } from 'next/font/google'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "devstage",
};

const oxanium = Oxanium({
  weight: ['500','600'],
  subsets: ['latin'],
  variable: '--font-oxanium'
})

const monstserrat = Montserrat({
  weight: ['400','600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${monstserrat.variable}`}>
      <body className='bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top'>
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  );
}
