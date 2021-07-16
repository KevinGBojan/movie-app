import React from "react";
import Movie from "../Movie";
import { calcTime, convertMoney } from "../../helpers";

import {
  Wrapper,
  Navigation,
  Container,
  Poster,
  Description,
  MoreInfo,
} from "./MovieHeader.styles";

const MovieHeader = ({
  image,
  title,
  description,
  rating,
  directors,
  runtime,
  revenue,
  budget,
}) => {
  const convertedTime = calcTime(runtime);
  const convertedBudget = convertMoney(budget);
  const convertedRevenue = convertMoney(revenue);

  return (
    <>
      <Navigation>
        <div className="flex items-center">Home | {title}</div>{" "}
      </Navigation>
      <Wrapper image={image}>
        <Container>
          <Poster image={image}></Poster>
          <Description>
            <h1>{title}</h1>
            <h2>Plot</h2>
            <h5>{description}</h5>
            <div className="rating-and-director flex justify-between">
              <div className="rating flex flex-col justify-between items-center">
                <h5>Rating</h5>
                <div className="rating-ball flex items-center justify-center">
                  {rating}
                </div>
              </div>
              <div className="directors flex flex-col items-center">
                <h5>Director</h5>
                {directors.map((e) => (
                  <p className="director">{e}</p>
                ))}
              </div>
            </div>
          </Description>
        </Container>
      </Wrapper>
      <MoreInfo>
        <div className="info-wrapper flex justify-between items-center">
          <div className="runtime info">Running time: {convertedTime}</div>
          <div className="budget info">Revenue: {convertedRevenue} </div>
          <div className="revenue info">Budget: {convertedBudget} </div>
        </div>
      </MoreInfo>
    </>
  );
};

export default MovieHeader;
