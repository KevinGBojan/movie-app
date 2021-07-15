import React from "react";
import { Image } from "../Thumbnail/Thumbnail.styles";
import { Link } from "react-router-dom";

const Thumbnail = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} />
      </Link>
    ) : (
      <Image src={image} />
    )}
  </div>
);

export default Thumbnail;
