import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fontSize} from '../utils/constants';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({
  title = 'Create New Movie',
  onPress = () => {},
  icon = 'chevron-up',
  detail = false,
}) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerIcon} onPress={onPress}>
        <MaterialIcon
          name={icon}
          size={fontSize.iconXM}
          color={detail ? colors.secondary : colors.secondary}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '8%',
    zIndex: 5,
  },
  headerIcon: {
    position: 'absolute',
    left: 5,
    height: fontSize.iconXL,
    width: fontSize.iconXL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.secondary,
    fontSize: fontSize.xl,
    fontWeight: '500',
  },
});
