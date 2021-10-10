import {StyleSheet} from 'react-native';
import {getResponsiveFontSize} from '../../../utils/dimensions';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  containerLast: {
    marginBottom: 15,
  },
  containerSubTitle: {
    marginRight: 25,
  },
  title: {
    fontSize: getResponsiveFontSize(2.6),
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 7,
  },
});

export default styles;
