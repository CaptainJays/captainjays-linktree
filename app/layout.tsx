import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Captain Jays | Links',
  description: 'All your captain jays links in one place.',
  openGraph: {
    title: 'Captain Jays | Links',
    description: 'Connect with me across various platforms and check out my work.',
    images: ['https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captain Jays | Links',
    description: 'Connect with me across various platforms and check out my work.',
    images: ['https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80'],
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
      </body>
    </html>
  );
}