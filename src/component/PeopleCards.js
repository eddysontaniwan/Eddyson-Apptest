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

export default function TVShowCards({
  item,
  index = 0,
  dataLength = 0,
  onPress = () => {},
}) {
  const insets = useSafeAreaInsets();
  const tvShowTitle = `${
    item.name ? item.name : ''
    //   `${item.firstName ? item.firstName : ''} ${
    // item.lastName ? item.lastName : ''
  }`;
  let imageSource = `${URL.imageBaseUrl}${item.profile_path}`;
  if (!imageSource.includes('https')) {
    imageSource = imageSource.replace('http', 'https');
  }

  // ios doesn't allow http request anymore, so sad :'(

  console.log('HASIL : ', item);
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
        <View>
          <Text style={styles.movieTitle}>{tvShowTitle}</Text>
          {/*<Text style={listPopularPeopleScreenStyles.age}>Age : {item.id}</Text>*/}
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
    borderRadius: 30,
    flex: 1,
    resizeMode: 'cover',
  },
  avatarContainer: {
    height: 60,
    width: 60,
    backgroundColor: colors.shade,
    borderRadius: 30,
    borderColor: colors.lightShade,
    borderWidth: 2,
    marginVertical: padder.l,
    marginRight: padder.l,
  },
  avatarNone: {
    width: 60,
    height: 60,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
  },
  Container: {
    flexDirection: 'row',
    width: width * 0.9,
    backgroundColor: colors.dark,
    marginVertical: padder.l,
    alignItems: 'center',
    paddingHorizontal: padder.l,
    borderRadius: 10,
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
    fontSize: fontSize.xm,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: colors.accentB,
    justifyContent: 'center',
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
    right: padder.l,
  },
});
