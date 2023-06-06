import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className='box-border bg-gray-900 flex justify-between items-center px-4 py-3'>
      <Link href={'/'}>
        <Image
          src='/pokemon-logo.png'
          alt='Pokemon Logo'
          width={100}
          height={100}
          className='w-auto h-auto'
          priority={true}
        />
      </Link>
      <div className='border-2 px-3 py-2 rounded-xl'>
        <button>Favoritos</button>
      </div>
    </header>
  );
};
