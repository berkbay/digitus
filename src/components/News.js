import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const NewsComponent = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(0,0,0,0.1)','transparent']} style={styles.lineargradient}/>
      <View style={styles.bodyView}>
        <TouchableOpacity style={styles.buttonBody}>
          <Image style= {styles.buttonImage} source={require('../../assets/kadincalisan.png')}/>
          <Text style={styles.buttonText}>Günün Menüsü</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection:'row',
    marginTop: 15
  },
  buttonBody: {
    borderRadius:26.5,
    width: 53,
    height:53,
    marginHorizontal:10,
    borderWidth:2,
    borderColor:'#2A9D8F'
  },
  buttonImage:{
    width:47,
    height:47,
    borderRadius:23.5,
    marginTop:1,
    alignSelf:'center',
  },
  buttonText:{
    fontSize:11,
    color:'#999EB9',
    width: 53,
    marginVertical: 5,
    textAlign:'center'
  }
})
