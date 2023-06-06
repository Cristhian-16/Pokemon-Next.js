import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces/pokemon-full';

export async function getPokeIdData(id: string) {
  const pokemon = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    id: pokemon.data.id,
    name: pokemon.data.name,
    image: pokemon.data.sprites.other?.dream_world.front_default,
    image_2: pokemon.data.sprites.front_default,
    image_3: pokemon.data.sprites.back_default,
    image_4: pokemon.data.sprites.back_shiny,
    image_5: pokemon.data.sprites.front_shiny
  };
}
