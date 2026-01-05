import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

export const metadata = {
  metadataBase: new URL('https://historia-argentina.vercel.app'),
  title: 'Historia Argentina',
  description: 'Blog sobre la historia de Argentina desde la independencia hasta la actualidad.',
  openGraph: {
    title: 'Historia Argentina',
    description: 'Blog sobre la historia de Argentina desde la independencia hasta la actualidad.',
    url: '/',
    siteName: 'Historia Argentina',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Historia Argentina',
    description: 'Blog sobre la historia de Argentina desde la independencia hasta la actualidad.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="container py-4">
          <Header />
          {children}
          <ScrollTop />
          <Footer />
        </main>
      </body>
    </html>
  );
}
