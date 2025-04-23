import api from './api';

export const fetchPopularMovies = async (page = 1) => {
    const res = await api.get('/movie/popular', { params: { page } });
    return res.data;
};

export const searchMovies = async (query: string, page = 1) => {
    const res = await api.get('/search/movie', {
        params: { query, page, include_adult: false },
    });
    return res.data;
};

export const getMovieDetails = async (id: string) => {
    const res = await api.get(`/movie/${id}`);
    return res.data;
};
