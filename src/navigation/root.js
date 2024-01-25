import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Track from '../screens/Track';
import TrackingDetail from '../screens/TrackingDetail';
import MyTabs from './Tab';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={MyTabs} />
      {/* <Stack.Screen name="Track" component={Track} />
      <Stack.Screen name="TrackingDetail" component={TrackingDetail} /> */}
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Track" component={Track} />
      <Stack.Screen
        name="TrackingDetail"
        component={TrackingDetail}
        options={{tabBarStyle: {display: 'none'}}}
      />
    </Stack.Navigator>
  );
};

export const TrackStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Track" component={Track} />
      <Stack.Screen
        name="TrackingDetail"
        component={TrackingDetail}
        options={{tabBarStyle: {display: 'none'}}}
      />
    </Stack.Navigator>
  );
};
