import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    padding: 2rem 0 2rem 0;
    color: var(--medGrey);
    font-size: var(--fontExtraLarge);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  row-gap: 2rem;
  column-gap: 2rem;
`;
