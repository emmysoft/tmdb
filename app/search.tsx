import { useState } from 'react';
import { TextInput, FlatList, View } from 'react-native';
import { searchMovies } from '../lib/tmdb';
import MovieCard from '../components/MovieCard';

export default function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const data = await searchMovies(query);
        setResults(data.results);
    };

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                placeholder="Search movies..."
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={handleSearch}
                style={{
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    marginBottom: 10,
                }}
            />
            <FlatList
                data={results}
                keyExtractor={(item: any) => item?.id.toString()}
                renderItem={({ item }) => <MovieCard movie={item} />}
            />
        </View>
    );
}
