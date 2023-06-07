'use client';

import { useTooggleFavorite } from '@/utils/localFavorite';
import { FC } from 'react';

import confetti from 'canvas-confetti';
interface Pokemon {
  id: number;
  name: string;
  image: string | undefined;
  image_2: string;
  image_3: string;
  image_4: string;
  image_5: string;
}

export const Button: FC<Pokemon> = ({ id, name, image }) => {
  const { toogleFavorites, existInFavorites } = useTooggleFavorite();

  const isFavorite = existInFavorites(id);

  const handleToglle = () => {
    toogleFavorites(id);

    if (!isFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      });
    }
  };

  return (
    <button
      className={`${
        isFavorite
          ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '
          : 'bg-stone-700'
      } py-4 px-12 rounded-xl`}
      onClick={handleToglle}
    >
      {isFavorite ? 'Remover de favoritos' : 'Agregar a Favoritos'}
    </button>
  );
};
