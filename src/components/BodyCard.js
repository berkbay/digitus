import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getApi, } from '../store/actions';

const BodyCard = (props) => {
  const [likedProjects, setLikedProjects] = useState([])
  const [count, setCount]= useState(0)

  const API = useSelector((state) => state.api.items)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getApi())
  },[])

  const renderItem = ({ item }) => {

    const isLiked = likedProjects?.find((element) => element.id === item.id)
    const HEART_PRESSED = isLiked ? 'heart': 'heart-outline'
    const COUNT_NUMBER = isLiked ? count : item.stargazers_count

    return (
      <TouchableOpacity onPress={() => (props.navigation.navigate('DetailScreen', {item: item}))}>
        <View style={styles.container}>
          <Image source={{uri: item.owner.avatar_url}} style={{height: 201, width: '100%'}} />
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.information}>
            <View style={styles.detailView}>
              <Text style={styles.detailText}>{item.language}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Feather name="calendar" size={16} color="#999EB9" />
              <Text style={ [styles.detailText,{color: '#999EB9', fontSize:12, marginHorizontal:5}]}>{item.created_at.substring(0,10)}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              const tempArray = likedProjects
              tempArray.push({id: item.id})
              setLikedProjects(tempArray)
              setCount(item.stargazers_count+1)
            }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.detailText, {color: '#FF6767', fontSize: 11}]}>{COUNT_NUMBER}</Text>
                <Ionicons name={HEART_PRESSED} size={18} color="#FF6767" />
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
        showsVerticalScrollIndicator={false}
        data={API}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={count}
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
