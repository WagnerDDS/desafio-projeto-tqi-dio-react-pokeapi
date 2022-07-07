import { useCallback, useState, createContext } from "react";
import pokeApi from "../services/pokeApi";

export const PokeContext = createContext({
  loading: false,
  pokemon: {},
});

export const PokeProvider = ({ children }) => {
  const [pokeState, setPokeState] = useState({
    hasPokemon: false,
    loading: false,
    pokemon: {
      abilities: [],
      height: undefined,
      id: undefined,
      name: undefined,
      moves: [],
      sprites: undefined,
      stats: [],
      types: [],
      weight: undefined,
    },
  });

  const getPokemon = (pokename) => {
    setPokeState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
    pokeApi
      .get(`pokemon/${pokename}`)
      .then(({ data }) => {
        // console.log("nome do poke: " + data.name);
        setPokeState((prevState) => ({
          ...prevState,
          hasPokemon: true,
          pokemon: {
            abilities: [data.abilities],
            height: data.height,
            id: data.id,
            name: data.name,
            moves: [data.moves],
            sprites: data.sprites,
            stats: [data.stats],
            types: [data.types],
            weight: data.weight,
          },
        }));
      })
      .finally(() => {
        setPokeState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };
  const contextValue = {
    pokeState,
    getPokemon: useCallback((pokename) => getPokemon(pokename), []),
  };

  return (
    <PokeContext.Provider value={contextValue}>{children}</PokeContext.Provider>
  );
};

export default PokeProvider;
