import React from "react";
import usePokemon from "../../hooks/pokeApi-hooks";
import * as S from "./styled";

function PokeStats() {
  const { pokeState } = usePokemon();

  const myStats = pokeState.pokemon.stats;
  let sLabels = [];
  let sValues = [];
  //console.log("stats: " + myStats);
  myStats.forEach((item) => {
    item.forEach((s, index) => {
      sLabels[index] = s.stat.name;
      sValues[index] = s.base_stat;
      // console.log("stats " + index + " : " + sLabels[index] + sValues[index]);
    });
  });

  return (
    <S.pokeStatsWrapper>
      <S.pokeStatsItem>
        <S.pokeStatsLabel>{sLabels[0] + ":" + sValues[0]}</S.pokeStatsLabel>
        <S.pokeStatsMeter id="hp" value={sValues[0]} min="0" max="180" />
      </S.pokeStatsItem>
      <S.pokeStatsItem>
        <S.pokeStatsLabel>{sLabels[1] + ":" + sValues[1]}</S.pokeStatsLabel>
        <S.pokeStatsMeter id="attack" value={sValues[1]} min="0" max="180" />
      </S.pokeStatsItem>
      <S.pokeStatsItem>
        <S.pokeStatsLabel>{sLabels[2] + ":" + sValues[2]}</S.pokeStatsLabel>
        <S.pokeStatsMeter id="defense" value={sValues[2]} min="0" max="180" />
      </S.pokeStatsItem>
      <S.pokeStatsItem>
        <S.pokeStatsLabel>{sLabels[3] + ":" + sValues[3]}</S.pokeStatsLabel>
        <S.pokeStatsMeter
          id="special-attack"
          value={sValues[3]}
          min="0"
          max="180"
        />
      </S.pokeStatsItem>
      <S.pokeStatsItem>
        <S.pokeStatsLabel>{sLabels[4] + ":" + sValues[4]}</S.pokeStatsLabel>
        <S.pokeStatsMeter
          id="sp-defense"
          value={sValues[4]}
          min="0"
          max="180"
        />
      </S.pokeStatsItem>
      <S.pokeStatsItem>
        <S.pokeStatsLabel>{sLabels[5] + ":" + sValues[5]}</S.pokeStatsLabel>
        <S.pokeStatsMeter id="speed" value={sValues[5]} min="0" max="180" />
      </S.pokeStatsItem>
    </S.pokeStatsWrapper>
  );
}

export default PokeStats;
