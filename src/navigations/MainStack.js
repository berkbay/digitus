import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import HeaderLogo from '../components/HeaderLogo';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const AppStack = createStackNavigator()


const MainStack = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown:false }}/>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerStyle: {height:105} ,
          headerTitle: (props) => <HeaderLogo{...props}/>,
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert('Click Search Button')}>
              <Image style={styles.searchButton} source={require('../../assets/search.png')}/>
            </TouchableOpacity>
          )
        }}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;

const styles = StyleSheet.create({
  searchButton: {
    marginLeft: 18
  }
})
