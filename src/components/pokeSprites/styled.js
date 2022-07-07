import styled from "styled-components";

export const spritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const spritesCard = styled.div`
  max-width: 90px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  span {
    font-size: smaller;
    text-align: center;
    margin-bottom: 3px;
    color: #2f4b95;
  }
`;

export const imgWrapper = styled.img`
  display: flex;
  flex-direction: column;
`;
