import React from 'react';
import  {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';
import InformationScreen from '../screens/InformationsScreen';
import FriendScreen from '../screens/FriendsScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import { Ionicons } from '@expo/vector-icons';
import ListScreen from '../screens/ListScreen';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Home'} screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          let rn = route.name
          let color = focused ? '#348AA7' : 'black';

          if(rn === "Home") {
            iconName = focused ? 'home' : 'home-outline';
          }else if ( rn === "Information") {
            iconName = focused ? 'book' : 'book-outline';
          }else if ( rn === "Friend") {
            iconName = focused ? 'body' : 'body-outline';
          }else if ( rn === "Notification") {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }else if ( rn === "List") {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        }
      })}>
        <Tab.Screen name={"Home"} component={MainStack} options={{headerShown:false}}/>
        <Tab.Screen name={"Information"} component={InformationScreen}/>
        <Tab.Screen name={"Friend"} component={FriendScreen}/>
        <Tab.Screen name={"Notification"} component={NotificationScreen}/>
        <Tab.Screen name={"List"} component={ListScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabContainer;
