import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  color: white;
  width: 25%;
  height: 60px;
  font-size: 16px;
  background-color: var(--darkGrey);
  border-radius: 30px;
  border: 0;
  font-size: var(--fontBig);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  margin: 2rem auto;

  :hover {
    opacity: 0.8;
  }
`;
