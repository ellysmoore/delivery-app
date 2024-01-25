/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#F1F6FB',
        padding: 5,
        borderRadius: 8,
      }}>
      <Icon name={'notifications-outline'} size={25} color={'#2E3E5C'} />
    </View>
  );
};

export default Header;
