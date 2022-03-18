import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView,Image,View } from 'react-native';

const DetailScreen = ({route}) => {
  const item = route.params.item
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'100%'}}>
        <Image source={item.image} style={{width:'100%', height: 285}}/>
        <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: -20, backgroundColor:'#FFFFFF', height: '100%'}}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.detailView}>
            <Text style={styles.detailText}>{item.detail}</Text>
          </View>
          <View style={{marginHorizontal: 25, marginVertical: 25}}>
            <Text style={[styles.detailText, {color: '#292929', fontSize: 13, fontFamily: 'Helvetica Neue', lineHeight:20}]}>{item.message}</Text>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

export default DetailScreen;

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 25,
    color: '#0A8754',
    fontFamily:'Avenir Next',
  },
  detailView: {
    borderColor:'#B9CBC0',
    borderRadius: 9.5,
    height: 19,
    width:110,
    borderWidth:1,
    marginHorizontal: 25
  },
  detailText: {
    color: '#0A8754',
    textAlign:'center',
    fontFamily:'Avenir Next',
    textAlignVertical:'center',
  },
})
