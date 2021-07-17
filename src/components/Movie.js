import React from "react";
import { useParams } from "react-router-dom";
import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import noImage from "../assets/no_image.jpeg";
import { useMovieFetch } from "../hooks/useMovieFetch";
import MovieHeader from "../components/MovieHeader/MovieHeader";
import ActorThumbnail from "../components/ActorThumbnail/ActorThumbnail";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;
  return (
    <>
      {movie && movie.directors && (
        <div>
          <MovieHeader
            title={`${movie.title}`}
            description={`${movie.overview}`}
            rating={`${movie.vote_average}`}
            directors={movie.directors.map((director) => director.name)}
            movieId={`${movie.id}`}
            backdrop={
              movie.backdrop_path
                ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`
                : "#000"
            }
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : noImage
            }
            runtime={`${movie.runtime}`}
            revenue={`${movie.revenue}`}
            budget={`${movie.budget}`}
          />
          <Grid header={"Actors"}>
            {movie.actors.map((actor) => (
              <ActorThumbnail
                key={actor.cast_id}
                image={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : noImage
                }
                name={actor.name}
                character={actor.character}
              />
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default Movie;
