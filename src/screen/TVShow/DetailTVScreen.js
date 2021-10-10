import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import BaseContainer from '../../component/BaseContainer';
import Header from '../../component/Header';
import {colors, URL} from '../../utils/constants';
import {ScrollView} from 'react-native-gesture-handler';

import {convertToUpperCaseFirstLetter} from '../../utils/letters';
import {convertToDate} from '../../utils/dates';
import isoLanguage from '../../store/data/iso.json';
import styles from './DetailTVScreen.styles';

export default function DetailTVScreen({navigation, route}) {
  const {detailData} = route.params;
  const goBack = () => {
    navigation.goBack();
  };

  let imageSource = `${URL.imageBaseUrl}${detailData.poster_path}`;
  let imageSourceBg = `${URL.imageBaseUrl}${detailData.backdrop_path}`;
  if (!imageSource.includes('https')) {
    imageSource = imageSource.replace('http', 'https');
  }
  return (
    <BaseContainer backgroundColor={colors.secondary} barStyle="dark-content">
      <Header detail={true} icon="chevron-left" title={''} onPress={goBack} />
      <ImageBackground
        imageStyle={styles.bgContainer}
        style={styles.bgStyles}
        source={{uri: imageSourceBg}}>
        <Text style={styles.name}>{detailData.title}</Text>
      </ImageBackground>
      <View style={styles.separator} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.bodyDesc}>
            <Text style={styles.callTextTitle}>Title : </Text>
            <Text style={styles.callText}>{detailData.name}</Text>
            <Text style={styles.callTextTitle}>Release : </Text>
            <Text style={styles.callText}>
              {convertToDate(detailData.first_air_date)}
            </Text>
            <Text style={styles.callTextTitle}>Language : </Text>
            <Text style={styles.callText}>
              {convertToUpperCaseFirstLetter(
                isoLanguage[detailData.original_language],
              )}
            </Text>
            <Text style={styles.callTextTitle}>Sinopsis : </Text>
            <Text style={styles.callText}>{detailData.overview}</Text>
          </View>
        </View>
      </ScrollView>
    </BaseContainer>
  );
}
