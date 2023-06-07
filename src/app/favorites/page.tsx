'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTooggleFavorite } from '@/utils/localFavorite';
import { NoFavorite } from './components/NoFavorite';

export default function FavoritesPage() {
  const { arrFavorites } = useTooggleFavorite();

  const hasFavorites = arrFavorites.length > 0;

  return (
    <>
      {!hasFavorites ? (
        <NoFavorite />
      ) : (
        <div className='flex flex-wrap justify-center'>
          {arrFavorites.map(item => (
            <Link
              href={`/pokemon/${item}`}
              key={item}
              className='bg-slate-700 m-4 rounded-xl cursor-pointer'
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item}.png`}
                alt={`Pokemon ${item}`}
                width={200}
                height={200}
                className='p-4'
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
