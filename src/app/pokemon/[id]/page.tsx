import { getPokeIdData } from '@/helpers';

interface PokeIdPageProps {
  params: {
    id: string;
  };
}

export default async function PokeIdPage({ params: { id } }: PokeIdPageProps) {
  const data = await getPokeIdData(id);

  return (
    <>
      <h1>{data.name}</h1>
      <p>HOla peru </p>
    </>
  );
}
