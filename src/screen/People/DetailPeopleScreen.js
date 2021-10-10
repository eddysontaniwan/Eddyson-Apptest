import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import BaseContainer from '../../component/BaseContainer';
import Header from '../../component/Header';
import {colors, URL} from '../../utils/constants';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './DetailPeopleScreen.styles';

export default function DetailScreen({navigation, route}) {
  const {detailData} = route.params;
  const goBack = () => {
    navigation.goBack();
  };

  let imageSource = `${URL.imageBaseUrl}${detailData.profile_path}`;
  if (!imageSource.includes('https')) {
    imageSource = imageSource.replace('http', 'https');
  }
  return (
    <BaseContainer backgroundColor={colors.secondary} barStyle="dark-content">
      <Header detail={true} icon="chevron-left" title={''} onPress={goBack} />
      <ImageBackground
        imageStyle={styles.bgContainer}
        style={styles.bgStyles}
        source={{uri: 'https://picsum.photos/400/250?blur=5'}}>
        <View style={styles.avatar}>
          {imageSource === 'N/A' ? (
            <MaterialIcon name="person" color={colors.primary} size={90} />
          ) : (
            <Image style={styles.avatarImg} source={{uri: imageSource}} />
          )}
        </View>
      </ImageBackground>
      <View style={styles.separator} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.bodyDesc}>
            <Text style={styles.callTextTitle}>Name : </Text>
            <Text style={styles.callText}>{detailData.name}</Text>
            <Text style={styles.callTextTitle}>Department : </Text>
            <Text style={styles.callText}>
              {detailData.known_for_department}
            </Text>
            <Text style={styles.callTextTitle}>Gender : </Text>
            <Text style={styles.callText}>
              {detailData.gender === 1 ? 'Female' : 'Male'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </BaseContainer>
  );
}
