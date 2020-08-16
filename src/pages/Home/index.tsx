import React, { ReactElement, useState } from "react";
import { useFetchData } from "hooks/use-fetch-data";
import { useMounted } from "hooks/lifecycles";
import { SearchMovieService } from "services/movie";
import {
  Container,
  Row,
  Col,
  
  Spinner,
} from "reactstrap";

import Pagination from "./partials/Pagination";
import Header from "./partials/Header";
import Cards from "./partials/Cards";
import NotFound from "./partials/NotFound";
import Card from "./components/Card";
import Search from "./components/Search";
import ResultsInfo from "./components/ResultsInfo";

interface Props {}

function HomePage({}: Props): ReactElement {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("Pokemon");

  const [moviesFetch, mutationMoviesFetch] = useFetchData<
    SearchMovieService["res"]
  >();

  function getMovies(_query: string, _page: number = 1) {
    SearchMovieService(mutationMoviesFetch, {
      onSuccess: (resp) => {
        if (resp.Response === "True") {
          setTotalPage(resp.totalResults / 5);
        }
      },
    })({
      jsonData: { query: _query, page: _page },
    });
  }

  function selectPage(page: number) {
    setPage(page);
    getMovies(query, page);
  }

  useMounted(() => {
    getMovies(query);
  });

  let pagesCount = 0;
  if (moviesFetch.isFulfilled && moviesFetch.data.Response === "True") {
    let pageCount = Math.floor(moviesFetch.data.totalResults / 10);
    pagesCount = pageCount;
  }

  return (
    <div>
      <Container className="mt-5">
        <Header
          side1={<h1 className="title">Movies</h1>}
          side2={
            <Search
              onSubmit={(query) => {
                mutationMoviesFetch.reset();
                setPage(1);
                setQuery(query);
                getMovies(query);
              }}
              defaultValue={query}
            />
          }
        />
        {moviesFetch.isPending && (
          <div className="d-flex justify-content-center m-5">
            <Spinner color="danger" />
          </div>
        )}
        {moviesFetch.isFulfilled && moviesFetch.data.Response === "True" && (
          <>
            <ResultsInfo
              query={query}
              count={moviesFetch.data.totalResults}
              activePage={page}
            />
            <Cards>
              {moviesFetch.data.Search.map((movie, key) => (
                <Card key={key} movie={movie} />
              ))}
            </Cards>
          </>
        )}

        {moviesFetch.isFulfilled && moviesFetch.data.Response === "True" && (
          <Row className="d-flex align-items-center">
            <Col md={6} className="d-flex justify-content-center  justify-content-md-start ">
              <span className="text-danger">
                Found {moviesFetch.data.totalResults} Movies On{" "}
                {Math.floor(moviesFetch.data.totalResults / 10)} Pages
              </span>
            </Col>
            <Col md={6} className="d-flex justify-content-center  justify-content-md-end ">
              <Pagination page={page} pagesCount={pagesCount} selectPage={selectPage} />
            </Col>
          </Row>
        )}

        {
          moviesFetch.isFulfilled && moviesFetch.data.Response === "False" && (
            <NotFound query={query} />
          )
        }
      </Container>
    </div>
  );
}

export default HomePage;
