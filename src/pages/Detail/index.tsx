import React, { ReactElement } from "react";
import { useMounted } from "hooks/lifecycles";
import { useFetchData } from "hooks/use-fetch-data";
import { SearchDetailService } from "services/movie/index";
import { RouteComponentProps, Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from "reactstrap";

type TParam = {
  id: string;
};

type Props = {} & RouteComponentProps<TParam>;

function DetailPage(props: Props): ReactElement {
  // FETCH DATA HOOK
  const [movieFetch, mutationMovieFetch] = useFetchData<
    SearchDetailService["res"]
  >();

  useMounted(() => {
    SearchDetailService(mutationMovieFetch, {
      onSuccess: (resp) => {
        if (resp.Response === "False") {
          props.history.push("/");
        }
      },
    })({
      jsonData: { id: props.match.params.id },
    });
  });

  return (
    <Container className="mt-5">
      {movieFetch.isPending && (
        <div className="m-5 d-flex justify-content-center">
          <Spinner color="danger" />
        </div>
      )}
      {movieFetch.isFulfilled && movieFetch.data.Response === "True" && (
        <>
          <div className="mb-3">
            <Link to="/" className="back-link">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
          <Row className="d-flex justify-content-center">
            <Col md={4} className="mb-2">
              <img
                src={movieFetch.data.Poster}
                alt={movieFetch.data.Title}
                className="img-fluid"
              />
            </Col>
            <Col md={8} className="mb-2">
              <h3>{movieFetch.data.Title}</h3>
              <p>{movieFetch.data.Plot}</p>
              <div className="mb-2">
                <strong>Director:</strong>
                <span className="ml-2">{movieFetch.data.Director}</span>
              </div>
              <div className="mb-2">
                <strong>Genre:</strong>
                <span className="ml-2">{movieFetch.data.Genre}</span>
              </div>
              <div className="mb-2">
                <strong>Year:</strong>
                <span className="ml-2">{movieFetch.data.Year}</span>
              </div>
              <div className="mb-2">
                <strong>Runtime:</strong>
                <span className="ml-2">{movieFetch.data.Runtime} min</span>
              </div>
              <div className="mb-2">
                <strong>Released:</strong>
                <span className="ml-2">{movieFetch.data.Released}</span>
              </div>
              <div className="mb-2">
                <strong>Imdb Rating:</strong>
                <span className="ml-2">{movieFetch.data.imdbRating}</span>
              </div>
              <div className="mb-2">
                <strong>Imdb Votes:</strong>
                <span className="ml-2">{movieFetch.data.imdbVotes}</span>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default DetailPage;
