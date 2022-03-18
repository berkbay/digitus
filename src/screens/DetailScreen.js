import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView,Image,View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const item = useRoute().params.item
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
        <Image source={{uri: item.owner.avatar_url}} style={{width:'100%', height: 285, resizeMode:'stretch'}}/>
        <View style={{borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: -20, backgroundColor:'#FFFFFF', height: '100%'}}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.detailView}>
            <Text style={styles.detailText}>{item.language}</Text>
          </View>
          <View style={{marginHorizontal: 25, marginVertical: 25}}>
            <Text style={[styles.detailText, {color: '#292929', fontSize: 13, fontFamily: 'Helvetica Neue', lineHeight:20}]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
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
