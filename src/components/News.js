import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const STORIES_RESPONSE = [
  {
    id: '0',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: false
  },
  {
    id: '1',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: true
  },
  {
    id: '2',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: true
  },
  {
    id: '3',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: true
  },
  {
    id: '4',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: true
  },
  {
    id: '5',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: true
  },
  {
    id: '6',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
    isShow: true
  },
]


const NewsComponent = () => {
  const [isShow, setIsShow] = useState(isShow)
  const renderItem = ({ item }) => {
    const STORY_BORDER_CONTAINER = item.isShow ? '#2A9D8F' : '#BEBEBE'
    return (
      <View style={styles.bodyView}>
        <TouchableOpacity onPress={() => setIsShow(!isShow)} style={[styles.buttonBody, { borderColor: STORY_BORDER_CONTAINER }]}>
          <Image style= {styles.buttonImage} source={item.image}/>
        </TouchableOpacity>
        <Text style={styles.infoText}>{item.name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.1)','transparent']} style={styles.lineargradient}/>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={STORIES_RESPONSE}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default NewsComponent;

const styles= StyleSheet.create({
  container: {
    height: 107,
    backgroundColor: '#FFFFFF',
  },
  lineargradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 7,
  },
  bodyView: {
    marginTop: 15,
    justifyContent: 'center',
    marginHorizontal:10,
  },
  buttonBody: {
    borderRadius:26.5,
    width: 53,
    height:53,
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage:{
    width:47,
    height:47,
    borderRadius:23.5,
  },
  infoText:{
    fontSize:11,
    color:'#999EB9',
    width: 53,
    marginVertical: 5,
    textAlign:'center'
  }
})
