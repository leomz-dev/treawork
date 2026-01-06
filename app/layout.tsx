import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppCTA from '@/components/ui-custom/WhatsAppCTA';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TreaWork | Acompañamiento Académico y Profesional',
  description: 'Soluciones reales para estudiar, trabajar y avanzar. Clases personalizadas, apoyo en proyectos y asesoría tecnológica.',
  openGraph: {
    title: 'TreaWork | Acompañamiento Académico y Profesional',
    description: 'Soluciones reales para estudiar, trabajar y avanzar.',
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
    title: 'TreaWork | Acompañamiento Académico y Profesional',
    description: 'Soluciones reales para estudiar, trabajar y avanzar.',
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
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-inter text-dark bg-light antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
