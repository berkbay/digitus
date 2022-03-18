import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



const STORIES_RESPONSE = [
  {
    id: '0',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
  },
  {
    id: '1',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
  },
  {
    id: '2',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
  },
  {
    id: '3',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
  },
  {
    id: '4',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
  },
  {
    id: '5',
    image: require('../../assets/kadincalisan.png'),
    name: 'Günün Menüsü',
  },
]

const NewsComponent = () => {

  const [showedStories, setShowedStories] = useState([])
  const [count, setCount]= useState(0)

  const renderItem = ({ item }) => {
    const isShowed = showedStories?.find((element) => element.id === item.id)
    const STORY_BORDER_CONTAINER = isShowed ? '#BEBEBE': '#2A9D8F'

    return (
      <View style={styles.bodyView}>
        <TouchableOpacity onPress={() => {
          const tempArray = showedStories
          tempArray.push({id: item.id})
          setShowedStories(tempArray)
          setCount(count+1)
        }} style={[styles.buttonBody, { borderColor: STORY_BORDER_CONTAINER }]}>
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
        extraData={count}
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
