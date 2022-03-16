import React from 'react';
import  {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';
import InformationScreen from '../screens/InformationsScreen';
import FriendScreen from '../screens/FriendsScreen';
import NotificationScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Home"} component={MainStack} options={{headerShown:false}}/>
        <Tab.Screen name={"Information"} component={InformationScreen}/>
        <Tab.Screen name={"Friend"} component={FriendScreen}/>
        <Tab.Screen name={"Notification"} component={NotificationScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabContainer;
