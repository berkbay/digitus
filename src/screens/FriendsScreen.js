import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

const FriendScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Click here" onPress={() => navigation.navigate("DetailScreen")}/>
    </SafeAreaView>
  );
}

export default FriendScreen;

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
