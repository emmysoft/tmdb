import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, Image } from 'react-native';
import { getMovieDetails } from '@/lib/tmdb';

export default function MovieDetail() {
    const { id } = useLocalSearchParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        getMovieDetails(id as string).then(setMovie);
    }, [id]);

    if (!movie) return <Text>Loading...</Text>;

    return (
        <ScrollView contentContainerStyle={{ padding: 10 }}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={{ width: '100%', height: 400, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{movie.title}</Text>
            <Text>{movie.overview}</Text>
            <Text>Genres: {movie.genres?.map((g: any) => g.name).join(', ')}</Text>
            <Text>Release: {movie.release_date}</Text>
            <Text>Rating: {movie.vote_average}</Text>
            <Text>Runtime: {movie.runtime} mins</Text>
        </ScrollView>
    );
}
