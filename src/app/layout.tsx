import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/Provider/ReduxProvider';
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';
import PersistProvider from '@/Provider/PersistProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'TrendWave',
  description: 'TrendWave Ecommerce App',
  icons:{
    icon:'/icons8-shopping-bag-96.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        <Providers>
          <PersistProvider>
          <Navbar/>
          {children}
          <Footer/>
          </PersistProvider>
          </Providers>
      </body>
    </html>
  );
}
