import React, { useState } from "react";
import * as S from "./styled";
import usePokemon from "../../hooks/pokeApi-hooks";

const SearchBar = () => {
  const { getPokemon } = usePokemon();
  const [nameToSearch, setNameToSearch] = useState();

  const submitGetPoke = () => {
    if (!nameToSearch) return;
    return getPokemon(nameToSearch);
  };

  return (
    <S.SearchBarWrapper>
      <input
        type="text"
        placeholder="digite o nome de um pokemon ou um id"
        onChange={(event) => setNameToSearch(event.target.value)}
      ></input>
      <button type="submit" onClick={submitGetPoke}>
        Buscar
      </button>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
