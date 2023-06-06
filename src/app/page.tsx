import { getPokeData } from '@/helpers';
import Image from 'next/image';

export default async function Home() {
  const response = await getPokeData();

  return (
    <>
      <main className='max-w-screen-2xl m-auto grid grid-cols-4'>
        {response?.map(pokemon => (
          <div key={pokemon.id} className='flex flex-col items-center'>
            {
              <p>
                <small className='mr-3'>{pokemon.id}</small>
                {pokemon.name}
              </p>
            }
            <Image
              src={pokemon.img}
              alt={pokemon.name}
              width={70}
              height={70}
            />
          </div>
        ))}
      </main>
    </>
  );
}
