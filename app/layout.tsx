import { Roboto } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/Header';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Meu Site Base',
  description: 'Um template incrível para futuros projetos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${roboto.className} bg-gray-100`}>
      <body className="!m-auto min-h-screen max-w-lg shadow-lg">
        <ThemeRegistry>
          <div className='p-2'>
            <Header />
          </div>
          <div className="text-text p-2">{children}</div>
        </ThemeRegistry>
      </body>
    </html>
  );
}