import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';





const BodyCard = (props) => {

  const [heart, setHeart] = useState(true)
  const [number, setNumber] = useState(1000)

  const STORIES_RESPONSE = [
    {
      id: '0',
      image: require('../../assets/kadincalisanBody.png'),
      name: 'Günün Menüsü',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
      like: heart,
      detail: 'Günaydın',
      count: number
    },
    {
      id: '1',
      image: require('../../assets/kadincalisanBody.png'),
      name: 'Günün Menüsü',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      like: heart,
      detail: 'Günaydın',
      count: number
    },
    {
      id: '2',
      image: require('../../assets/kadincalisanBody.png'),
      name: 'Günün Menüsü',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      like: heart,
      detail: 'Günaydın',
      count: number
    },
  ]

  const changeCount = (item) => {
    setHeart(!item.like)
    heart ? setNumber(item.count-1) : setNumber (item.count+1)
  }

  const renderItem = ({ item }) => {
    const CARD_LIKE = item.like ? "heart" : "heart-outline"
    return (
      <TouchableOpacity onPress={() => (props.navigation.navigate('DetailScreen', {item: item}))}>
        <View style={styles.container}>
          <Image source={item.image} style={{height: 201, width: '100%'}} />
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.information}>
            <View style={styles.detailView}>
              <Text style={styles.detailText}>{item.detail}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Feather name="calendar" size={16} color="#999EB9" />
              <Text style={ [styles.detailText,{color: '#999EB9', fontSize:12, marginHorizontal:5}]}>21.05.2020</Text>
            </View>
            <TouchableOpacity onPress={ () => changeCount(item)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.detailText, {color: '#FF6767', fontSize: 11}]}>{item.count}</Text>
                <Ionicons name={CARD_LIKE} size={18} color="#FF6767" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 250 }}
        showsHorizontalScrollIndicator={false}
        data={STORIES_RESPONSE}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default BodyCard;

const styles= StyleSheet.create({
  container: {
    height: 294,
    marginHorizontal:18,
    marginVertical: 18,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#0A8754',
    fontFamily:'Avenir Next',
  },
  information:{
    flexDirection:'row',
    marginHorizontal:20,
    marginTop: 10,
    justifyContent:'space-between'
  },
  detailView: {
    borderColor:'#B9CBC0',
    borderRadius: 9.5,
    height: 19,
    width:110,
    borderWidth:1,
  },
  detailText: {
    color: '#0A8754',
    textAlign:'center',
    fontFamily:'Avenir Next',
    textAlignVertical:'center',
  }
})
