/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/color';
import Button from '../components/Button';
import Fonts from '../constants/fonts';
import google from '../assets/images/icon-google.png';
// import boxes from '../assets/images/loginsvg.svg';
import boxes from '../assets/images/boxes.png';

const Login = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={boxes}
        style={{
          height: 250,
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 65,
        }}
      />
      <View style={{height: '50%'}}>
        <View>
          <Text style={styles.welcomeHeader}>Welcome to E-Bikes</Text>
          <Text style={styles.welcomeText}>
            Buying Electric bikes just got a lot easier, Try us today.
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Button
            title={'Login with Google'}
            onPress={() => navigation.navigate('Home')}
            text1={
              <View
                style={{
                  backgroundColor: Colors.white,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={google}
                  style={{padding: 13, height: 5, width: 5}}
                />
              </View>
            }
            text2={undefined}
          />
          <Text style={styles.signupText}>
            Don’t have any account?{' '}
            <Text style={{color: Colors.black}}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD337',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  signupText: {
    fontSize: Fonts.p1,
    fontWeight: '500',
    color: Colors.greyText,
    marginTop: 30,
    alignSelf: 'center',
  },
  welcomeHeader: {
    fontSize: Fonts.h4,
    fontWeight: '500',
    color: Colors.black,
    marginTop: 50,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: Fonts.p1,
    fontWeight: '400',
    color: Colors.greyText,
    marginTop: 20,
    textAlign: 'center',
    marginHorizontal: 30,
  },
});
