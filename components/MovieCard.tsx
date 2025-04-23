import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Movies } from '@/types/types';

type Props = {
    movie: Movies;
}

const MovieCard = ({ movie }: Props) => {
    return (
        <>
            <Link href={`/movie/${movie.id}`} asChild>
                <TouchableOpacity style={styles.card}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={styles.poster}
                    />
                    <View style={styles.info}>
                        <Text style={styles.title} numberOfLines={1}>
                            {movie.title}
                        </Text>
                        <Text style={styles.meta}>
                            {new Date(movie.release_date)?.getFullYear()} | {movie.vote_average} ★
                        </Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginBottom: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        overflow: 'hidden',
    },
    poster: {
        width: 100,
        height: 150,
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    meta: {
        fontSize: 14,
        color: '#555',
    },
})