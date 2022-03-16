import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import AppIntro from '../components/AppIntroComp';


const OnboardingScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <AppIntro navigation={navigation}/>
    </SafeAreaView>
  );
}

export default OnboardingScreen;

const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
})
