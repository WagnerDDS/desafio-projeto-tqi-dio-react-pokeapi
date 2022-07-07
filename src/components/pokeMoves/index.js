import React from "react";
import usePokemon from "../../hooks/pokeApi-hooks";
import * as S from "./styled";

function PokeMoves() {
  const { pokeState } = usePokemon();
  //
  function myMoves() {
    const myMoves = pokeState.pokemon.moves;
    const list = [];
    console.log("moves: " + myMoves);
    myMoves.forEach((move) => {
      move.forEach((i, index) => {
        console.log("mooove: " + i.move.name);
        list.push(<span>{i.move.name}</span>);
      });
    });
    return list;
  }
  //
  return (
    <S.movesWrapper>
      <>{myMoves()}</>
    </S.movesWrapper>
  );
}

export default PokeMoves;
