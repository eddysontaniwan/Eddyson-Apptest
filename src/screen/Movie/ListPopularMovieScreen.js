import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import {colors, fontSize, routes, URL} from '../../utils/constants';
import BaseContainer from '../../component/BaseContainer';
import {useDispatch, useSelector} from 'react-redux';
import {setMovies} from '../../store/actions';
import UseAxios from '../../hooks/UseAxios';
import MovieCards from '../../component/MovieCards';
import {TextInput} from 'react-native-gesture-handler';
import styles from './ListPopularMovieScreen.styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListPopularMovieScreen({navigation, route}) {
  const dispatch = useDispatch();
  const movieLists = useSelector(selector => selector.data);
  const {apiRequest, loading} = UseAxios(URL.popularMovie, 'GET');

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (!search) {
      setFilter(movieLists);
    } else {
      let filtered = movieLists.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );

      setFilter(filtered);
    }
  }, [search]);

  const renderMovies = ({item, index}) => (
    <MovieCards
      onPress={() => navigateToDetail(item)}
      item={item}
      index={index}
      dataLength={filter.length}
    />
  );

  const navigateToDetail = item => {
    navigation.navigate(routes.detail, {detailData: item});
  };

  const getMovies = async () => {
    const response = await apiRequest();
    const data = response.data.results;
    dispatch(setMovies(data));
    setFilter(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMovies();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <BaseContainer backgroundColor={colors.secondary} barStyle="dark-content">
      <View style={styles.searchBar}>
        <Icon name="magnify" size={fontSize.iconM} color={colors.secondary} />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={text => setSearch(text)}
          placeholderTextColor={colors.secondary}
        />
      </View>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text>Loading</Text>
        </View>
      ) : (
        <FlatList
          style={styles.listStyle}
          contentContainerStyle={styles.listContainerStyle}
          data={filter}
          keyExtractor={movie => movie.id}
          renderItem={renderMovies}
        />
      )}
    </BaseContainer>
  );
}
