import React from "react";
import { Wrapper, Image, Name } from "./ActorThumbnail.styles";

const ActorThumbnail = ({ image, name, character }) => {
  return (
    <Wrapper>
      <Image image={image}></Image>
      <Name>
        <h5>{name}</h5>
        <h5>{character}</h5>
      </Name>
    </Wrapper>
  );
};

export default ActorThumbnail;
