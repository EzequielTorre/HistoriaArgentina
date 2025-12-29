import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Historia Argentina',
  description: 'Blog sobre la historia de Argentina desde la independencia hasta la actualidad.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main className="max-w-3xl mx-auto p-6">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
