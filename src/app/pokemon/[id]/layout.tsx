import { ReactNode } from 'react';
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: 'Pokemon',
    description: `Pokemonoes : ${params.id}`
  };
}

export default function PokemonLayout({ children }: { children: ReactNode }) {
  return <main className='mt-4 flex box-border'>{children}</main>;
}
