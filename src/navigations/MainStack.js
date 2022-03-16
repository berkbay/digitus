import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import HeaderLogo from '../components/HeaderLogo';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import TabContainer from './BottomNavigation';

const AppStack = createStackNavigator()



const MainStack = () => {
  return(

      <AppStack.Navigator>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerStyle: {height:105} ,
          headerTitle: (props) => <HeaderLogo{...props}/>,
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert('Click Search Button')}>
              <Image style={styles.headerButton} source={require('../../assets/search.png')}/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Click Profile Button')}>
              <Image style={styles.headerButton} source={require('../../assets/profileIcon.png')}/>
            </TouchableOpacity>
          )
        }}/>
        <AppStack.Screen name="DetailScreen" component={DetailScreen} options={{
          headerStyle: {height:105} ,
          headerTitle: (props) => <HeaderLogo{...props}/>,
          headerBackImage: () => <Image style={styles.headerButton} source={require('../../assets/backIcon.png')}/>,
          headerBackTitleVisible: false
        }}/>
      </AppStack.Navigator>
  )
}

export default MainStack;

const styles = StyleSheet.create({
  headerButton: {
    marginHorizontal: 18
  }
})
