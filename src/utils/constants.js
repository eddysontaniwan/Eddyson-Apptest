import React from 'react';
import {Dimensions, Animated} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const routes = {
  list: 'listScreen',
  detail: 'detailScreen',
  detailPeople: 'detailPeopleScreen',
};

export const fontSize = {
  xs: 12,
  s: 14,
  m: 16,
  xm: 18,
  l: 20,
  xl: 22,
  iconM: 30,
  iconXM: 35,
  iconS: 25,
  iconL: 45,
  iconXL: 50,
};

export const colors = {
  shade: '#a2a3a2',
  primary: '#00a4de',
  secondary: '#fefffe',
  accentA: '#f78c2c',
  accentB: '#8fbf01',
  dark: '#4e4e4e',
  lightShade: '#e1e3e1',
};

export const padder = {
  xs: 1,
  s: 3,
  m: 5,
  xm: 7,
  l: 9,
  xl: 11,
};

const apikey = '681babce49b0be27bfe612b64f9b396b';
const baseUrl = 'https://api.themoviedb.org/3';
export const URL = {
  popularMovie: `${baseUrl}/movie/popular?api_key=${apikey}`,
  popularTVShow: `${baseUrl}/tv/popular?api_key=${apikey}`,
  popularPeopleShow: `${baseUrl}/person/popular?api_key=${apikey}`,
  nowPlayingMovie: `${baseUrl}/movie/now_playing?api_key=${apikey}`,
  upcomingMovie: `${baseUrl}/movie/upcoming?api_key=${apikey}`,
  randomPic: 'https://picsum.photos/200',
  imageBaseUrl: 'https://image.tmdb.org/t/p/w500',
};

export const verticalSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [height, 0, -height],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

export const horizontalSlide = ({
  current,
  next,
  inverted,
  layouts: {screen},
}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [width, 0, -width],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};
