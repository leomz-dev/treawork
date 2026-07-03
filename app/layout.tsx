import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppCTA from '@/components/ui-custom/WhatsAppCTA';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://treawork.vercel.app'),
  title: 'TreaWork | Jóvenes que enseñan, estudiantes que avanzan',
  description: 'Conectamos estudiantes con tutores jóvenes certificados. ¿Buscas un tutor o quieres ganar dinero enseñando? TreaWork es tu comunidad.',
  openGraph: {
    title: 'TreaWork | Jóvenes que enseñan, estudiantes que avanzan',
    description: 'Conectamos estudiantes con tutores jóvenes certificados.',
    images: [
      {
        url: '/logos/imagotipo_horizontal.png',
        width: 1200,
        height: 630,
        alt: 'TreaWork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TreaWork | Jóvenes que enseñan, estudiantes que avanzan',
    description: 'Conectamos estudiantes con tutores jóvenes certificados.',
    images: [
      {
        url: '/logos/imagotipo_horizontal.png',
        width: 1200,
        height: 630,
        alt: 'TreaWork',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-inter text-dark bg-light antialiased">
        <Header />
        <main className="pt-[4.5rem] lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
