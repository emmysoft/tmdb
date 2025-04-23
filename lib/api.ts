import axios from 'axios';
import { MOVIE_API_KEY } from '@env';

const BASE_URL = 'https://api.themoviedb.org/3';


export const fetchAllMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/all?api_key=${MOVIE_API_KEY}`);
    return res.data;
}

export const fetchPopularMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${MOVIE_API_KEY}`);
    return res.data;
}

export const fetchMovieDetails = async (id: string | number) => { 
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${MOVIE_API_KEY}`);
    return res.data;
} 