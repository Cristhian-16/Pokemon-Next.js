import Image from 'next/image';
import { getPokeIdData } from '@/helpers';
import { Button } from './components/Button';

interface PokeIdPageProps {
  params: {
    id: string;
  };
}

export default async function PokeIdPage({ params: { id } }: PokeIdPageProps) {
  const pokemon = await getPokeIdData(id);

  return (
    <>
      <section className='rounded-xl bg-zinc-950 basis-1/2 flex items-center justify-center p-4 mr-4 cursor-pointer transition duration-700 ease-in-out hover:scale-y-95 hover:scale-x-95 hover:bg-slate-700'>
        <Image
          src={pokemon.image!}
          alt={pokemon.name}
          width={300}
          height={300}
          className='w-auto h-200'
        />
      </section>

      <section className='bg-zinc-950 flex-grow rounded-xl flex flex-col justify-between'>
        <div className='flex px-9 pt-6 justify-between items-center'>
          <h1 className='capitalize text-5xl'>{pokemon.name}</h1>
          <Button {...pokemon} />
        </div>
        <div className='mx-auto mt-4'>
          <div className='flex items-center justify-center mb-20'>
            <Image
              src={pokemon.image_2}
              alt={pokemon.name}
              width={100}
              height={100}
              className='w-auto h-auto'
            />
            <Image
              src={pokemon.image_3}
              alt={pokemon.name}
              width={100}
              height={100}
              className='w-auto h-auto'
            />
            <Image
              src={pokemon.image_4}
              alt={pokemon.name}
              width={100}
              height={100}
              className='w-auto h-auto'
            />
            <Image
              src={pokemon.image_5}
              alt={pokemon.name}
              width={100}
              height={100}
              className='w-auto h-auto'
            />
          </div>
        </div>
      </section>
    </>
  );
}
