import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;

  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    padding: 8px;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #ccc;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: bold;

    &:hover {
      background-color: #999;
      cursor: pointer;

  }
`;