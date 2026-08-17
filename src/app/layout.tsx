import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nishant Kohli — Senior Full Stack Engineer',
  description:
    'Portfolio of Nishant Kohli, Senior Full Stack Engineer specializing in React, Next.js, Node.js, TypeScript and AWS. Open-source maintainer of 3 npm packages with 23,000+ downloads.',
  metadataBase: new URL('https://nishkohli96.vercel.app'),
  openGraph: {
    title: 'Nishant Kohli — Senior Full Stack Engineer',
    description:
      'React, Next.js, Node.js & AWS engineer. Open-source maintainer with 23,000+ npm downloads.',
    type: 'website',
  },
};

// eslint-disable-next-line no-undef -- LayoutProps is a Next.js ambient global type, not an import
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
