import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Click here" onPress={() => navigation.goBack()}/>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
