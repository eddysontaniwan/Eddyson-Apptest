import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors, fontSize, padder, routes, URL} from '../utils/constants';
const {width, height} = Dimensions.get('screen');

export default function MovieCards({
  item,
  index = 0,
  dataLength = 0,
  onPress = () => {},
}) {
  const insets = useSafeAreaInsets();
  const movieTitle = `${item.title ? item.title : ''}`;
  let imageSource = `${URL.imageBaseUrl}${item.poster_path}`;
  if (!imageSource.includes('https')) {
    imageSource = imageSource.replace('http', 'https');
  }
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        style={[
          styles.Container,
          dataLength - 1 == index
            ? {
                marginBottom: insets.bottom
                  ? insets.bottom + fontSize.iconXL + 35
                  : fontSize.iconXL + 35,
              }
            : '',
        ]}>
        <View style={styles.avatarContainer}>
          {imageSource !== 'N/A' ? (
            <Image
              source={{
                uri: imageSource,
              }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.avatarNone}>
              <MaterialIcon
                name="person"
                color={colors.primary}
                size={fontSize.iconXM}
              />
            </View>
          )}
        </View>
        <View style={styles.movieBody}>
          <Text style={styles.movieTitle}>{movieTitle}</Text>
          <Text style={styles.movieSubTitle}>rate : {item.vote_average}</Text>
          <Text style={styles.movieSubTitle}>
            release : {item.release_date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  age: {
    color: colors.secondary,
    fontSize: fontSize.m,
  },
  avatar: {
    flex: 1,
    resizeMode: 'cover',
  },
  avatarContainer: {
    height: 130,
    width: 90,
    marginVertical: padder.l,
    marginRight: padder.l,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  avatarNone: {
    width: 90,
    height: 130,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: colors.secondary,
    alignItems: 'center',
  },
  Container: {
    flexDirection: 'row',
    width: width * 0.95,
    backgroundColor: colors.primary,
    marginVertical: padder.l,
    alignItems: 'center',
    paddingHorizontal: padder.l,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 9,
  },
  movieTitle: {
    fontSize: fontSize.m,
    color: colors.secondary,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  movieSubTitle: {
    fontSize: fontSize.s,
    color: colors.secondary,
  },
  movieBody: {
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.accentB,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: padder.l,
  },
});
