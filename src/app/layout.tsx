import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/Navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const dynamicParams = false; // true |

export const metadata = {
  title: 'Listado de Pokemones',
  description: 'Pokemonoes generados'
};
//

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        {/* Navbar */}
        <Navbar />
        {/* Main la cual engloba el children */}

        <main className='px-5'>{children}</main>
      </body>
    </html>
  );
}
