import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 20px;
  background-color: var(--darkGrey);
  height: 300px;
  padding: 5px;
`;

export const Image = styled.div`
  border-radius: 10px;
  height: 75%;
  width: 100%;
  margin: auto;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 25%;

  .actor-name {
    font-weight: 600;
    font-size: var(--fontMed);
  }

  .actor-character {
    font-weight: 400;
    font-size: var(--fontSmall);
  }
`;
