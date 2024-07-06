import '../styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} style={{ minWidth: '1vw', minHeight: '1vh' }}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
