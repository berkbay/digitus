import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const item = route.params
  return (
    <SafeAreaView style={styles.container}>
      {console.log(item)}
      <Text>DetailScreen</Text>
      <Button title="Click here" onPress={() => navigation.goBack()}/>
    </SafeAreaView>
  );
}

export default DetailScreen;

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
