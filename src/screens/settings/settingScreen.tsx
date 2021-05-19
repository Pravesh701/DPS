import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';

interface Props {
    route: any;
    navigation: any;
}

const SettingScreen = ({ route, navigation }: Props) => {
  return (
    <View style = {styles.container}>
      <ImageBackgroundBlank />
      <Text>SettingScreen</Text>
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})