import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const STORIES_RESPONSE = [
  {
    id: '0',
    image: require('../../assets/kadincalisanBody.png'),
    name: 'Günün Menüsü',
    isShow: false,
    count: 922
  },
  {
    id: '1',
    image: require('../../assets/kadincalisanBody.png'),
    name: 'Günün Menüsü',
    isShow: false,
    count: 918
  },
  {
    id: '2',
    image: require('../../assets/kadincalisanBody.png'),
    name: 'Günün Menüsü',
    isShow: true,
    count: 1054
  },
]


const BodyCard = (props) => {
  const renderItem = ({ item }) => {
    const STORY_BORDER_CONTAINER = item.isShow ? '#2A9D8F' : '#2A9D8F'
    return (
      <View style={styles.container}>
        <Image source={item.image} style={{height: 201, width: '100%'}} />
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.information}>
          <TouchableOpacity onPress={() => (props.navigation.navigate('DetailScreen', {item: item}))}>
            <View style={styles.detailView}>
              <Text style={styles.detailText}>Detay</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Feather name="calendar" size={16} color="#999EB9" />
            <Text style={ [styles.detailText,{color: '#999EB9', fontSize:12, marginHorizontal:5}]}>21.05.2020</Text>
          </View>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.detailText, {color: '#FF6767', fontSize: 11}]}>{item.count}</Text>
              <Ionicons name="heart-outline" size={18} color="#FF6767" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View>
      <FlatList
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
