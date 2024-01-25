/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/color';
import Fonts from '../constants/fonts';
import user from '../assets/images/user.png';
import metrics from '../constants/metrics';
import Button from '../components/Button';
import LottieView from 'lottie-react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons';

type ItemData = {
  id: number;
  img: any;
};

type ItemProps = {
  item: ItemData;
};

const Item = ({item}: ItemProps) => (
  <View style={styles.catalog}>
    <Image source={item.img} style={{height: '70%'}} />
  </View>
);

const Home = ({navigation}: any) => {
  const images: ItemData[] = [
    {
      img: require('../assets/images/bigbike.png'),
      id: 1,
    },
    {
      img: require('../assets/images/bigbike.png'),
      id: 2,
    },
    {
      img: require('../assets/images/bigbike.png'),
      id: 3,
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <Image source={user} />
          {/* <Image source={bell} /> */}
          <Header />
        </View>
        <Text style={styles.helloText}>Hello, Good Morining!</Text>
        <FlatList
          horizontal
          // contentContainerStyle={{flex: 1}}
          // style={{flex: 1}}
          renderItem={({item, index}) => <Item item={item} key={index} />}
          // renderItem={Item}
          data={images}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          decelerationRate={'normal'}
          scrollEventThrottle={16}
        />
        <View style={styles.yellowBox}>
          <Text style={styles.orderText}>Gotten your E-Bike yet</Text>
          <Button
            title={'Your Orders'}
            onPress={() => navigation.navigate('Track')}
            text1={undefined}
            text2={
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 8,
                }}>
                <Icon
                  name="arrow-forward-outline"
                  color={'#FFFFFF'}
                  size={20}
                />
              </View>
            }
          />
        </View>
        <View style={styles.joinContainer}>
          {/* <Image source={biker} /> */}
          <LottieView
            source={require('../assets/images/biker-ninja.json')}
            style={{width: 150, height: 150}}
            autoPlay
            loop
          />
          <Text style={styles.joinText}>
            You too can join our Elite squad of E-bikers
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  helloText: {
    fontSize: Fonts.h4,
    fontWeight: '600',
    color: Colors.black,
    marginTop: 30,
    letterSpacing: 1,
  },
  catalog: {
    marginTop: 40,
    backgroundColor: Colors.lightWhite,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.width / 1.5,
    height: '100%',
    flex: 1,
    marginRight: 20,
    marginBottom: 60,
  },
  yellowBox: {
    backgroundColor: Colors.yellow,
    marginHorizontal: -20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 30,
    marginTop: 60,
  },
  orderText: {
    fontSize: Fonts.p1,
    fontWeight: '400',
    color: Colors.greyText,
    width: 100,
    // letterSpacing: 1,
  },
  joinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  joinText: {
    fontSize: Fonts.p1,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'left',
    width: 200,
    letterSpacing: 1,
  },
});
