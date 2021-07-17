import React from "react";
import Movie from "../Movie";
import { calcTime, convertMoney } from "../../helpers";
import { Link } from "react-router-dom";

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
  backdrop,
}) => {
  const convertedTime = calcTime(runtime);
  const convertedBudget = convertMoney(budget);
  const convertedRevenue = convertMoney(revenue);

  return (
    <>
      <Navigation>
        <div className="flex items-center">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span>|</span>
          <span>{title}</span>
        </div>
      </Navigation>
      <Wrapper backdrop={backdrop}>
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
                <h5>Director{directors.length > 1 && "s"}</h5>
                {directors.map((director) => (
                  <p key={director.credit_id} className="director">
                    {director}
                  </p>
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
