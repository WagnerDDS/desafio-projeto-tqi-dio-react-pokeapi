import styled from "styled-components";

export const pokeInfoWrapper = styled.div`
  padding: 35px 10px;
  perspective: 300px;
  perspective-origin: center;
  justify-content: center;
  width: 28%;
`;

export const pokeInfoItem = styled.div`
  height: 42px;
  color: #2f4b95;
  display: flex;
  align-items: right;
  padding: 5px;
  font-weight: bold;
  transform: rotateY(45deg);
`;

export const pokeInfoLabel = styled.span`
  align-self: flex-start;
  background-color: #fcd001;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0 5px 0 5px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  border-left: 2px solid rgba(0, 0, 0, 0.5);
`;

export const pokeInfoText = styled.span`
  align-self: flex-end;
  height: auto;
  background-color: #fcd001;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 5px 0 5px;
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  transform: translateX(-2px);
  z-index: -1;
  width: 100%;
`;

export const pokeInfoTextAbility = styled.span`
  font-size: x-small;
  align-self: flex-end;
  height: 25px;
  background-color: #fcd001;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 5px 0 5px;
  border-left: 2px solid rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  transform: translateX(-2px);
  z-index: -1;
  width: 100%;
`;
