import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import News from '../components/News';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <News/>
      <Text>HomeScreen</Text>
      <Button title="Click here" onPress={() => navigation.navigate("DetailScreen")}/>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles= StyleSheet.create({

})
