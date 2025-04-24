import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Card = styled.Pressable`
  flex-direction: row;
  margin-bottom: 12px;
`;

export default function MovieCard({ movie }: { movie: any }) {
  const router = useRouter();
  return (
    <Card onPress={() => router.push(`/movie/${movie.id}`)}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w185${movie.poster_path}` }}
        style={{ width: 100, height: 150, borderRadius: 10 }}
      />
      <View style={{ marginLeft: 10, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{movie.title}</Text>
        <Text>{movie.release_date?.split('-')[0]}</Text>
        <Text>⭐ {movie.vote_average}</Text>
      </View>
    </Card>
  );
}
