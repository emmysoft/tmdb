import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchAllMovies } from '@/lib/api';

const HomeScreen = () => {

  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllMovies = async () => {
    setIsLoading(true);
    try {
      const res = await fetchAllMovies();
      console.log(res?.data);
      return res.data;
    } catch (error: any) {
      console.log(error?.response?.data?.message);
    }
  }

  useEffect(() => {
    getAllMovies();
  }, [])

  const RenderMovies = ({ movie }: any) => {
    return (
      <>
        <View>
          <Image source={{ uri: movie.poster_path }} alt="image" style={{ width: 100, height: 100 }} />
          <Text>{movie.title}</Text>
        </View>
      </>
    )
  }

  return (
    <View>
      <Text>All Movies</Text>
      {isLoading ?
        <View>
          <ActivityIndicator size={"large"} color="#0000ff" />
        </View>
        :
        <FlatList
          data={movies}
          renderItem={({ item }) => <RenderMovies movie={item} />}
          keyExtractor={(item) => item.id}
        />
      }
    </View>
  )
}

export default HomeScreen;