import React from "react";
import usePokemon from "../../hooks/pokeApi-hooks";
import * as S from "./styled";

function PokeSprites() {
  const { pokeState } = usePokemon();

  const sprites = pokeState.pokemon.sprites;
  console.log("pokeSprites: " + sprites);

  return (
    <S.spritesContainer>
      <S.spritesCard>
        <S.imgWrapper
          src={sprites.back_default}
          alt="back default"
        ></S.imgWrapper>
        <span>back male</span>
      </S.spritesCard>
      <S.spritesCard>
        <S.imgWrapper
          src={sprites.front_default}
          alt="back default"
        ></S.imgWrapper>
        <span>front male</span>
      </S.spritesCard>
      <S.spritesCard>
        <S.imgWrapper
          src={sprites.front_shiny}
          alt=" front male shiny"
        ></S.imgWrapper>
        <span>front male shiny</span>
      </S.spritesCard>
      <S.spritesCard>
        <S.imgWrapper
          src={sprites.back_shiny}
          alt="back male shiny"
        ></S.imgWrapper>
        <span>back male shiny</span>
      </S.spritesCard>

      {sprites.back_female && (
        <S.spritesCard>
          <S.imgWrapper
            src={sprites.back_female}
            alt="back female"
          ></S.imgWrapper>
          <span>back female</span>
        </S.spritesCard>
      )}
      {sprites.front_female && (
        <S.spritesCard>
          <S.imgWrapper
            src={sprites.front_female}
            alt="front female"
          ></S.imgWrapper>
          <span>front female</span>
        </S.spritesCard>
      )}
      {sprites.back_shiny_female && (
        <S.spritesCard>
          <S.imgWrapper
            src={sprites.back_shiny_female}
            alt="back female"
          ></S.imgWrapper>
          <span>back female</span>
        </S.spritesCard>
      )}
      {sprites.font_shiny_female && (
        <S.spritesCard>
          <S.imgWrapper
            src={sprites.front_shiny_female}
            alt="front female"
          ></S.imgWrapper>
          <span>front female</span>
        </S.spritesCard>
      )}
    </S.spritesContainer>
  );
}

export default PokeSprites;
