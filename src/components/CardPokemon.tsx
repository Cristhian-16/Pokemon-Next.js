import { SmallPokemon } from '@/interfaces/pokemon-list';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CardPokeProps {
  pokemon: SmallPokemon;
}

export const CardPokemon: FC<CardPokeProps> = ({ pokemon }) => {
  return (
    <Link
      href={`/pokemon/${pokemon.id}`}
      className='bg-slate-900 rounded-xl flex flex-col items-center cursor-pointer transition duration-700 ease-in-out hover:scale-y-95 hover:scale-x-95 hover:bg-slate-700'
    >
      <Image src={pokemon.img} alt={pokemon.name} width={200} height={200} />
      <div className='flex gap-4 capitalize pb-5'>
        <h2>{pokemon.name}</h2>
        <p>#{pokemon.id}</p>
      </div>
    </Link>
  );
};
