import { CardPokemon } from '@/components/CardPokemon';
import { getPokeData } from '@/helpers';

export default async function Home() {
  const response = await getPokeData();

  return (
    <>
      <main className='max-w-screen-2xl m-auto my-5 grid grid-cols-3 gap-3'>
        {response?.map(pokemon => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>
    </>
  );
}
