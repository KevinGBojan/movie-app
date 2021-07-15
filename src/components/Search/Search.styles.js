import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  height: 60px;
  background-color: var(--medGrey);
  border-radius: 40px;
  color: white;

  img {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 30px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    width: 90%;
    padding-left: 4rem;
    margin: 8px 0;
    background: transparent;
    height: 40px;

    :focus {
      outline: none;
    }
  }
`;
