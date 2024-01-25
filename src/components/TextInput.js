import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Colors from '../constants/color';
import Fonts from '../constants/fonts';

const TextField = ({onChangeText, value, placeholder, keyboardType}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.text}
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'}
        cursorColor={Colors.black}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontSize: Fonts.p1,
    fontWeight: '500',
    color: Colors.black,
  },
});
