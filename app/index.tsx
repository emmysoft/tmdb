import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import MovieCard from '../components/MovieCard';
import { fetchPopularMovies } from '@/lib/tmdb';

export default function HomeScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <FlatList
      data={movies}
      keyExtractor={(item: any) => item?.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}
