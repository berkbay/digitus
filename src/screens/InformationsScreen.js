import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

const InformationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Click here" onPress={() => navigation.navigate("DetailScreen")}/>
    </SafeAreaView>
  );
}

export default InformationScreen;

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
