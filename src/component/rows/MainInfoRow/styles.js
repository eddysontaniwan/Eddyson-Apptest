import {StyleSheet} from 'react-native';
import {getResponsiveFontSize} from '../../../utils/dimensions';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  description: {
    fontSize: getResponsiveFontSize(2.1),
    color: colors.dark,
    textAlign: 'justify',
  },
});

export default styles;
