import BackgroundCellCore from "@/components/custom/BackgroundGrid";
import { LampTitle } from "@/components/custom/Lamp";
import { useState, useEffect } from "react";
import { Pokemon } from "./types";
import { fetchPokemonList } from "./api/pokeapi/list";
import PokemonCard from "./components/custom/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);
  console.log('pokemonList',pokemonList)
  return (
    <main className="bg-slate-950 overflow-x-hidden text-neutral-300">
      <section className="relative h-screen flex justify-center overflow-hidden">
        <BackgroundCellCore />
        <div className="relative z-50 mt-40 flex flex-col items-center pointer-events-none select-none">
          <h1 className="uppercase text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
            Pokemin <br/>
          </h1>
            <span className="normal-case leading-tight text-center md:text-lg lg:text-xl font-light w-10/12 md:whitespace-nowrap md:w-full">A simple PokeDex App with Modern UI using API from PokeApi</span>
          <button className="w-fit px-4 py-2 backdrop-blur-sm border bg-cyan-300/10 border-cyan-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Explore now</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-cyan-500 to-transparent" />
          </button>
        </div>
      </section>
      <section className="overflow-visible px-4 md:px-12">
        <LampTitle title="Who is that Pokemon?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 place-content-center pb-12 -mt-24">
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              setPokemonData={setPokemonData}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
