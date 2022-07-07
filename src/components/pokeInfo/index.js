import React from "react";
import usePokemon from "../../hooks/pokeApi-hooks";
import * as S from "./styled";

function PokeInfo() {
  const { pokeState } = usePokemon();
  //console.log({ pokeState });

  const myAbilities = pokeState.pokemon.abilities[0];
  //console.log(myAbilities);
  const list = [];
  myAbilities.forEach((item, index) => {
    list.push(
      <span>
        {item.ability.name} {index < 1 ? " / " : ""}{" "}
      </span>
    );
  });

  return (
    <S.pokeInfoWrapper>
      <S.pokeInfoItem>
        <S.pokeInfoLabel>ID: </S.pokeInfoLabel>
        <S.pokeInfoText>{pokeState.pokemon.id}</S.pokeInfoText>
      </S.pokeInfoItem>

      <S.pokeInfoItem>
        <S.pokeInfoLabel>Height: </S.pokeInfoLabel>
        <S.pokeInfoText>{pokeState.pokemon.height / 10 + " m"}</S.pokeInfoText>
      </S.pokeInfoItem>
      <S.pokeInfoItem>
        <S.pokeInfoLabel>Weight: </S.pokeInfoLabel>
        <S.pokeInfoText>{pokeState.pokemon.weight / 10 + " kg"}</S.pokeInfoText>
      </S.pokeInfoItem>
      <S.pokeInfoItem>
        <S.pokeInfoLabel>Ability: </S.pokeInfoLabel>
        <S.pokeInfoTextAbility>{list}</S.pokeInfoTextAbility>
      </S.pokeInfoItem>
    </S.pokeInfoWrapper>
  );
}

export default PokeInfo;
