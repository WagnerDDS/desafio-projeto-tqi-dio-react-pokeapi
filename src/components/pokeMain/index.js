import * as S from "./styled";
import usePokemon from "../../hooks/pokeApi-hooks";

function PokeMain() {
  const { pokeState } = usePokemon();

  //
  const myTypes = pokeState.pokemon.types;
  console.log("myTypes: " + { myTypes });
  let tNames = [];

  //console.log("stats: " + myStats);
  myTypes.forEach((item) => {
    item.forEach((t, index) => {
      tNames[index] = t.type.name;

      console.log("types " + index + " : " + tNames[index] + " / ");
    });
  });

  //

  return (
    <S.pokeMainWrapper>
      <S.pokeMainName>{pokeState.pokemon.name}</S.pokeMainName>
      <S.pokeMainPic
        src={
          pokeState.pokemon.sprites.other["official-artwork"]["front_default"]
        }
        alt={pokeState.pokemon.name}
      ></S.pokeMainPic>
      <S.pokeMainTypes>
        {tNames[0] + (tNames[1] ? " - " + tNames[1] : "")}
      </S.pokeMainTypes>
    </S.pokeMainWrapper>
  );
}

export default PokeMain;
