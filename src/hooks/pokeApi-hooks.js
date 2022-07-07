import { useContext } from "react";
import { PokeContext } from "../provider/pokeProvider";

const usePokemon = () => {
  const { pokeState, getPokemon } = useContext(PokeContext);
  console.log("pokeState: " + pokeState);
  return { pokeState, getPokemon };
};

export default usePokemon;
