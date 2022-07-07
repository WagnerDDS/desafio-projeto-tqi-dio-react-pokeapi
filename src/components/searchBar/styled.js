import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 3px;

  input {
    width: 100%;
    margin: 0 3px;
    height: 25px;
    border: 2px solid #2f4b95;
    border-radius: 3px;
  }
  button {
    background-color: #fcd001;
    color: #2f4b95;
    font-weight: bold;
    border-radius: 3px;
    border: none;
    box-shadow: 2px 2px 1px #2f4b95;

    &:hover {
      background-color: #2f4b95;
      color: #fcd001;
      transform: translate(2px, 2px);
      box-shadow: none;
    }
  }
`;
