import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=daf1fe8995a61d2fecc007eaa464ca98';

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day?${API_KEY}`);
  return response;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie${query}&${API_KEY}`
  );
  return response;
};

export const getMovieByID = async movieID => {
  const response = await axios.get(`${BASE_URL}movie/${movieID}?${API_KEY}`);
  return response;
};

export const getActors = async movieID => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieID}/credits?${API_KEY}`
  );
  return response;
};

export const getReviews = async movieID => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieID}/reviews?${API_KEY}`
  );
  return response;
};
