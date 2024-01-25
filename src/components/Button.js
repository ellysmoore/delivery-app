import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../constants/color';
import Fonts from '../constants/fonts';

const Button = ({title, onPress, text1, text2}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {text1 ? text1 : <View />}
      <Text style={styles.text}>{title}</Text>
      {text2 ? text2 : <View />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 50,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.p1,
    fontWeight: '500',
  },
});
