import { ReactNode } from 'react';

export const metadata = {
  title: 'Pagina de Favoritos',
  description: 'Pokemonoes Favoritos'
};
//

export default function FavoriteLayout({ children }: { children: ReactNode }) {
  return <main className='px-5'>{children}</main>;
}
