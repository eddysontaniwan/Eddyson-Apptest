import React from 'react';
import {Text, View} from 'react-native';
import SectionRow from '../SectionRow';
import styles from './styles';

const MainInfoRow = ({data = {}}) => (
  <View style={styles.container}>
    {Object.keys(data).map(key => (
      <SectionRow key={key} title={key} hasSubTitle>
        <Text style={styles.description}>{data[key]}</Text>
      </SectionRow>
    ))}
  </View>
);

export default MainInfoRow;
