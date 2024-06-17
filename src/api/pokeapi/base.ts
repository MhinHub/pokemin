import { Pokemon } from "@/types";

const fetchPokemon = async (pokemon: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  let response;
  let data: Pokemon | null = null;
  let error;

  try {
    response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    error = true;
  }

  return { response, data, error };
};

export default fetchPokemon;

