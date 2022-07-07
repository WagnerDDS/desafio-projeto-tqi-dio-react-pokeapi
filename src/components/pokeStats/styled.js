import styled from "styled-components";

export const pokeStatsWrapper = styled.div`
  padding: 35px 10px;
  perspective: 300px;
  perspective-origin: center;
  width: 30%;
`;

export const pokeStatsItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  transform: rotateY(-35deg);
`;

export const pokeStatsLabel = styled.label``;

export const pokeStatsMeter = styled.meter`
  height: 25px;
  margin: 0 auto;
`;
