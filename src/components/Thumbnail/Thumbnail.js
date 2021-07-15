import React from "react";
import { Image } from "../Thumbnail/Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable }) => <Image src={image} />;

export default Thumbnail;
