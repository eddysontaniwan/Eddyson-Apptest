import {Dimensions, Platform, StyleSheet} from 'react-native';

import {colors, fontSize} from '../../utils/constants';
import {color} from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');

const detailTVScreenStyles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: colors.secondary,
    borderRadius: 75,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -30,
  },
  avatarImg: {width: 110, height: 110, borderRadius: 110 / 2},
  bgContainer: {},
  bgStyles: {
    width: width,
    height: height * 0.35,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? -height * 0.1 : -height * 0.15,
  },
  headerStyles: {
    width: width,
    height: height * 0.35,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: fontSize.xl,
    zIndex: 10,
    position: 'absolute',
    bottom: 100,
    fontWeight: 'bold',
    color: colors.secondary,
    letterSpacing: 1,
  },
  callTextTitle: {
    fontSize: fontSize.xl,
    fontWeight: '500',
    color: color.black,
    paddingHorizontal: 10,
  },
  callText: {
    fontSize: fontSize.xm,
    fontWeight: '300',
    color: colors.dark,
    paddingHorizontal: 10,
    paddingBottom: 20,
    textAlign: 'justify',
  },
  body: {
    width: width,
    zIndex: -1,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'flex-start',
  },
  separator: {
    height: (height * 0.5) / 100,
    width,
    backgroundColor: colors.secondary,
    zIndex: -1,
  },
  tabBar: {
    position: 'absolute',
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-evenly',
    backgroundColor: colors.primary,
    height: (height * 10) / 100,
    alignItems: 'center',
  },
  containerMovieInfo: {
    margin: 20,
    marginTop: 35,
  },
  bodyDesc: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default detailTVScreenStyles;
