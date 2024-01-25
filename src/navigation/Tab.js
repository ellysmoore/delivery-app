/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Track from '../screens/Track';
import {HomeStack, TrackStack} from './root';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/color';
import Fonts from '../constants/fonts';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          let color;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? Colors.black : '#BBBFD0';
          } else if (route.name === 'Track') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
            color = focused ? Colors.black : '#BBBFD0';
          } else if (route.name === 'Send') {
            iconName = focused ? 'send' : 'send-outline';
            color = focused ? Colors.black : '#BBBFD0';
          } else {
            iconName = focused ? 'settings' : 'settings-outline';
            color = focused ? Colors.black : '#BBBFD0';
          }
          return <Icon name={iconName} size={Fonts.h4} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
        }}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Track',
          title: 'Track',
        }}
        name="Track"
        component={TrackStack}
      />
      <Tab.Screen name="Send" component={Track} />
      <Tab.Screen name="Settings" component={Track} />
    </Tab.Navigator>
  );
};

export default MyTabs;
