import React from "react";
import { Wrapper, Image, Name } from "./ActorThumbnail.styles";
import PropTypes from "prop-types";

const ActorThumbnail = ({ image, name, character }) => {
  return (
    <Wrapper>
      <Image image={image}></Image>
      <Name>
        <h5 className="actor-name">{name}</h5>
        <h5 className="actor-character">{character}</h5>
      </Name>
    </Wrapper>
  );
};

ActorThumbnail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default ActorThumbnail;
