import axios from "axios";

import {API_KEY} from './constants'
import {getResultsFromData, getMovieData, getData} from './helpers'

const getUrlApiSearch = query =>
`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

const getUrlApiMovieDetails = id =>
`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

const urlApiPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const urlApiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

const urlApiNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

// getDataMoviesFromApi('movie/now_playing')
// -> añadir prefix a la url  -> https://api.themoviedb.org/3/
// -> añadir apiKey a la url -> api_key=${API_KEY}
// -> devuelve directmente array datos ya preparado para uso 

// getMovieDetails => getDataMoviesFromApi('movie/now_playing') // bind

export const getSearchResults = query => {
    const url = getUrlApiSearch(query);
    return axios
      .get(url)
      .then(getResultsFromData)
      .then(getMovieData)
}

export const getMovieDetails = id => {
  const url = getUrlApiMovieDetails(id);
  return axios
    .get(url)
    .then(getData)
}

export const getPopularMovies = () => {
  return axios
    .get(urlApiPopular)
    .then(getResultsFromData)
    .then(getMovieData)
}

export const getTopRatedMovies = () => {
  return axios
    .get(urlApiTopRated)
    .then(getResultsFromData)
    .then(getMovieData)
}

export const getNowPlayingMovies = () => {
  return axios
    .get(urlApiNowPlaying)
    .then(getResultsFromData)
    .then(getMovieData)
}



