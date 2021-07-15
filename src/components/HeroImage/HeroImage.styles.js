import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),
    url(${(props) => props.image}), var(--darkGrey);

  background-size: 100%, cover;
  background-position: center;
  position: relative;
  height: 600px;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
`;

export const Text = styled.div`
  position: absolute;
  max-width: 720px;
  z-index: 100;
  bottom: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontExtraLarge);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
