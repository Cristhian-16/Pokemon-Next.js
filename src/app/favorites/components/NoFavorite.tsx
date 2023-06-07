import Image from 'next/image';

export const NoFavorite = () => {
  return (
    <>
      <section className='mt-5'>
        <h1 className='text-5xl font-bold text-center'>No hay favoritos</h1>
        <Image
          src='/pokefound.jpg'
          alt='No hay favoritos'
          width={600}
          height={600}
          className='mx-auto mt-4'
        />
      </section>
    </>
  );
};
