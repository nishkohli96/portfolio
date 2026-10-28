import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import { combinedOSSDownloads, siteUrl } from '@/lib/data';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'Nishant Kohli — Senior Full Stack Engineer';

export const metadata: Metadata = {
  title,
  description:
    `Nishant Kohli, Senior Full Stack Engineer in Noida, India. React, Next.js, Node.js, TypeScript & AWS. Maintainer of 3 npm packages, ${combinedOSSDownloads}+ downloads.`,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  authors: [{ name: 'Nishant Kohli', url: siteUrl }],
  keywords: [
    'Nishant Kohli',
    'nish1896',
    'nishkohli96',
    'nishant.kohli',
    'nocturnal_nish',
    'Senior Full Stack Engineer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'AWS',
    'Python',
    'FastAPI',
    'portfolio',
  ],
  openGraph: {
    title,
    description:
      `React, Next.js, Node.js & AWS engineer. Open-source maintainer with ${combinedOSSDownloads}+ npm downloads.`,
    type: 'website',
    url: '/',
    siteName: 'Nishant Kohli',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      `React, Next.js, Node.js & AWS engineer. Open-source maintainer with ${combinedOSSDownloads}+ npm downloads.`,
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
