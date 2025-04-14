import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Captain Jays | Links',
  description: 'All your captain jays links in one place.',
  openGraph: {
    title: 'Captain Jays | Links',
    description: 'All your Captain Jays Links in one place.',
    images: ['https://captainjays-linktree.vercel.app/'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captain Jays | Links',
    description: 'All your Captain Jays Links in one place.',
    images: ['https://captainjays-linktree.vercel.app/'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics/>
      </body>
    </html>
  );
}