import '../styles/globals.css';
import '../styles/fonts.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isabell Berzsenyi",
  description: "Isabell Berzsenyi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/pp-neue-montreal" rel="stylesheet"></link>
      </head>
      <body style={{ minWidth: '1vw', minHeight: '1vh' }}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
