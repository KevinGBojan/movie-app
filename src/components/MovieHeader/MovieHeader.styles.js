import styled from "styled-components";

export const Navigation = styled.div`
  color: white;
  font-size: var(--fontMed);
  background-color: var(--medGrey);
  height: 6vh;

  div {
    width: calc(1280 / 1440 * 100%);
    margin: auto;
    height: 6vh;
  }
`;

export const MoreInfo = styled.div`
  margin: auto;
  height: 10vh;
  font-size: var(--fontMed);
  background-color: var(--darkGrey);
  color: white;

  .info-wrapper {
    height: 10vh;
    width: calc(1280 / 1440 * 100%);
    margin: auto;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fontSmall);
    height: 60px;
    width: 300px;
    background-color: var(--medGrey);
    border-radius: 1rem;
    color: white;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  background: url(${(props) => props.image});
  height: 86vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: 40%;
`;

export const Container = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  border-radius: 1rem;
  margin-left: -40%;
  left: 50%;
  top: 8.6vh;
`;

export const Poster = styled.div`
  width: 34%;
  height: 100%;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1rem 0 0 1rem;
`;

export const Description = styled.div`
  color: white;
  padding: 3rem 3rem 3rem 5rem;
  width: 66%;
  height: 100%;
  h2 {
    margin-top: 1rem;
    text-transform: uppercase;
    font-size: var(--fontBig);
  }
  h5 {
    margin-top: 1rem;
    font-size: var(--fontMed);
  }

  .rating-and-director {
    margin-top: 1rem;
    width: 25%;

    .rating {
      height: 20%;

      .rating-ball {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: white;
        color: black;
        font-weight: bold;
      }
      h5 {
        margin-bottom: 0.5rem;
      }
    }

    .directors {
      height: 20%;

      h5 {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
