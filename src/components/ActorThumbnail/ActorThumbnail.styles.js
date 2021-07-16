import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 2rem;
  background-color: var(--darkGrey);
  height: 250px;
`;

export const Image = styled.div`
  border-radius: 2rem;
  height: 66%;
  width: 95%;
  margin: auto;
  background: url(${(props) => props.image});
  background-size: cover;
  background-color: red;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 34%;
`;
