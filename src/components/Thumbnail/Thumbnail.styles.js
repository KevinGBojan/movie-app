import styled from "styled-components";

export const Image = styled.img`
  border-radius: 2rem;
  transition: 0.2s ease-in-out;
  animation: animateThumb 0.5s;
  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
