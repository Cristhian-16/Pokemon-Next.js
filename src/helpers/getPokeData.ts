import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces/pokemon-list';

export async function getPokeData() {
  try {
    const { data } = await pokeApi.get<PokemonListResponse>(
      '/pokemon?limit=151'
    );

    const pokemons: SmallPokemon[] = data.results.map(
      (pokemon: SmallPokemon, i) => ({
        ...pokemon,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          i + 1
        }.png`
      })
    );

    return pokemons;
  } catch (error) {
    console.log(error);
  }
}
