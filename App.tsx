/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/root';
import MyTabs from './src/navigation/Tab';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <RootStack /> */}
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
