import { Pokemon } from "@/types";
import { POKEMON_TYPES } from "@/constants";
import fetchPokemon from "@/api/pokeapi/base";
import ProgressiveImage from "react-progressive-image-loading";
import { Icon } from "@iconify/react";

type PokemonCardProps = {
  pokemon: Pokemon;
  setPokemonData: (data: Pokemon) => void;
};

const PokemonCard = (props: PokemonCardProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

  const [{ color, icon }] = POKEMON_TYPES.filter(
    (type) => props.pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

  const handleClick = async () => {
    const requestPokemon = await fetchPokemon(props.pokemon.name);
    if (requestPokemon?.data) {
      props.setPokemonData(requestPokemon.data);
    }
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <>
      <div
        className={`bg-opacity-10 py-32 mx-auto w-full flex items-center justify-center relative bg-gradient-to-b from-[${color}] to-transparent`}
        style={{ backgroundImage: `linear-gradient(to bottom, ${color},transparent)`, clipPath: "polygon(0 0,calc(100% - 30px) 0,100% 30px,100% 100%,30px 100%,0 calc(100% - 30px))" }}
      >
        <div className="absolute top-5 flex justify-between items-center w-full h-fit px-5">
          <span className="text-2xl font-semibold ml-2 capitalize">{props.pokemon.name}</span>
          <Icon icon={icon} className="text-3xl" />
        </div>
        <p className="text-6xl md:text-8xl font-semibold text-black text-opacity-25 absolute tracking-xl top-1/3 pointer-events-none">
          {formatPokemonId(props.pokemon.id)}
        </p>

        <div
          className="inset-x-auto bottom-0 absolute z-10"
          style={{
            width: 175,
            height: 175,
          }}
        >
          <div
            className="rounded-full absolute z-0 inset-x-auto mx-auto opacity-15"
            style={{
              background: color,
              width: 130,
              height: 130,
              zIndex: -10,
              bottom: 8,
              left: 16,
            }}
          />
          <ProgressiveImage
            preview={"./vite.svg"}
            src={imgUrl}
            initialBlur={1}
            render={(src, style) => (
              <img src={src} style={style} alt={props.pokemon.name} />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
