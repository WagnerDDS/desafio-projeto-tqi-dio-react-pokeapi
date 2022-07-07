import React from "react";
import * as S from "./styled";
import myImg from "../../imgs/rotomPhone.png";

function Welcome() {
  return (
    <S.welcomeWrapper>
      <S.titleWrapper>Olá!</S.titleWrapper>
      <S.subtitleWrapper>Seja bem vindo(a) </S.subtitleWrapper>
      <S.imgWrapper src={myImg} alt="rotom phone"></S.imgWrapper>
    </S.welcomeWrapper>
  );
}

export default Welcome;
