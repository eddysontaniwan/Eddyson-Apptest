import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../utils/constants';
const {width, height} = Dimensions.get('screen');

const listPopularPeopleScreenStyles = StyleSheet.create({
  searchBar: {
    width: width * 0.9,
    color: colors.dark,
    height: (height * 7) / 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    backgroundColor: colors.accentB,
    borderRadius: 30,
  },
  textInput: {
    width: width * 0.73,
    padding: 0,
    fontWeight: 'bold',
    color: colors.secondary,
    height: (height * 5) / 100,
    paddingLeft: 10,
    borderRadius: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listStyle: {
    flex: 1,
    width,
  },
  listContainerStyle: {
    alignItems: 'center',
  },
});

export default listPopularPeopleScreenStyles;
