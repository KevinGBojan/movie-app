import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  height: 8vh;
`;

export const Content = styled.div`
  max-width: calc(1280 / 1440 * 100%);
  margin: auto;
  height: 8vh;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
