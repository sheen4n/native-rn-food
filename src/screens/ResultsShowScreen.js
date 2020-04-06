import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [result, setResult] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  const getReviews = async (id) => {
    const response = await yelp.get(`/${id}/reviews`);
    setReviews(response.data.reviews);
  };

  useEffect(() => {
    getResult(id);
    getReviews(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(reviews);

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      ></FlatList>

      <FlatList
        data={reviews}
        keyExtractor={(review) => review.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.text}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 200,
    marginBottom: 20,
  },
});

export default ResultsShowScreen;
