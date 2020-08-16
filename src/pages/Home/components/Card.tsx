import React, { ReactElement } from "react";
import { TSortMovie } from "services/movie/types";
import {Link} from 'react-router-dom'
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

interface Props {
  movie: TSortMovie;
}

function Movie({ movie }: Props): ReactElement {
  return (
    <Card>
      <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />
      <CardBody className="d-flex flex-column justify-content-between">
        <div>
          <CardTitle>{movie.Title}</CardTitle>
          <CardSubtitle>{movie.Year}</CardSubtitle>
          <CardText>IMDB ID: {movie.imdbID}</CardText>
        </div>
        <div>
          <Link to={`/detail/${movie.imdbID}`} className="btn btn-danger btn-block">
            Detail
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default Movie;
