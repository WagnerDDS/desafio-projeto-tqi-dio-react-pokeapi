import React, { useEffect } from "react";
import PokeInfo from "../pokeInfo";
import SearchBar from "../searchBar";
import PokeMain from "../pokeMain";
import * as S from "./styled";
import PokeStats from "../pokeStats";
import PokeEvoForms from "../pokeEvoForms";
import usePokemon from "../../hooks/pokeApi-hooks";
import Welcome from "../welcome";
//import PokeProvider from "../../provider/pokeProvider";

function Layout() {
  const { pokeState } = usePokemon();
  useEffect(() => {
    console.log("loading: " + pokeState.loading);
  }, [pokeState.loading]);

  return (
    // <PokeProvider>
    <S.layoutWrapper>
      <SearchBar />
      {pokeState.hasPokemon ? (
        <>
          {pokeState.loading ? (
            <h1>Carregando...</h1>
          ) : (
            <>
              <S.mainContentWrapper>
                <PokeInfo />
                <PokeMain />
                <PokeStats />
              </S.mainContentWrapper>
              <PokeEvoForms />
            </>
          )}{" "}
        </>
      ) : (
        <Welcome />
      )}
    </S.layoutWrapper>
    // </PokeProvider>
  );
}

export default Layout;
