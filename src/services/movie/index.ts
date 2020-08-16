import { http } from "helpers/http";
import { createService } from "helpers/service-creater";
import { API_KEY } from "./constants";
import { TMovieSearchService, TMovieDetailService } from "./types";

export const SearchMovieService = createService<
  TMovieSearchService["req"],
  TMovieSearchService["res"]
>(({ jsonData }) =>
  http().get(
    `?apikey=${API_KEY}&s=${jsonData?.query}&page=${jsonData?.page}&type=movie`
  )
);
export type SearchMovieService = TMovieSearchService;

export const SearchDetailService = createService<
  TMovieDetailService["req"],
  TMovieDetailService["res"]
>(({ jsonData }) => http().get(`?apikey=${API_KEY}&i=${jsonData?.id}`));
export type SearchDetailService = TMovieDetailService;