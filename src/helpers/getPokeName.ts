import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces/pokemon-full';

export async function getPokeIdData(name: string) {
  const pokemon = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  return {
    name: pokemon.data.name
  };
}
