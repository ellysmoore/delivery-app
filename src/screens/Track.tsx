/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../constants/color';
import Fonts from '../constants/fonts';
import user from '../assets/images/user.png';
import Button from '../components/Button';
import TextField from '../components/TextInput';
import box from '../assets/images/box-round.png';
import truck from '../assets/images/truck-round.png';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import Mask from '../assets/images/Mask.png';

type ItemData = {
  id: number;
  code: string;
  info: string;
  img: any;
};

const historyData: ItemData[] = [
  {
    id: 1,
    code: 'SCP9374826473',
    info: 'In the process',
    img: box,
  },
  {
    id: 2,
    code: 'SCP6653728497',
    info: 'In delivery',
    img: truck,
  },
];

// type ItemProps = {
//   item: ItemData;
// };

// const renderItem = ({item}: ItemProps) => {
//   return (
//     <View style={styles.historyBox}>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//         }}>
//         <Image source={item.img} />
//         <View style={{paddingLeft: 20}}>
//           <Text style={styles.historyCode}>{item.code}</Text>
//           <Text style={styles.historyText}>{item.info}</Text>
//         </View>
//       </View>
//       <Text style={{justifyContent: 'center', alignItems: 'center'}}>
//         arrow
//       </Text>
//     </View>
//   );
// };

const Track = ({navigation}: any) => {
  const [receiptNumber, setReceiptNumber] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <Image source={user} />
          <Header />
        </View>
        <Text style={styles.helloText}>Hello, Good Morining!</Text>

        <ImageBackground
          source={Mask}
          // style={styles.catalog}
          style={{borderRadius: 80, padding: 20, marginTop: 30}}>
          <Text style={styles.trackText}>Track your package</Text>
          <Text style={styles.TrackSubText}>
            Enter the receipt number that has been given by the officer
          </Text>
          <View style={{marginTop: 40}}>
            <TextField
              onChangeText={(text: string) => setReceiptNumber(text)}
              value={receiptNumber}
              placeholder={'Enter the receipt number'}
              keyboardType={'default'}
            />
            <View style={{marginTop: 20}}>
              <Button
                title={'Track Now'}
                onPress={() => navigation.navigate('TrackingDetail')}
                text1={undefined}
                text2={undefined}
              />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.history}>
          <Text style={styles.trackText}>Tracking history</Text>
        </View>

        {/* <FlatList
          contentContainerStyle={{height: 300}}
          renderItem={renderItem}
          data={historyData}
          showsVerticalScrollIndicator={false}
        /> */}
        <View style={{marginBottom: 30}}>
          {historyData.map((item, index) => (
            <View style={styles.historyBox} key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Image source={item.img} />
                <View style={{paddingLeft: 20}}>
                  <Text style={styles.historyCode}>{item.code}</Text>
                  <Text style={styles.historyText}>{item.info}</Text>
                </View>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon
                  name="chevron-forward-outline"
                  color={'#1E3354'}
                  size={20}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Track;

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
    padding: 20,
    // backgroundColor: Colors.yellow,
    borderRadius: 60,
  },
  yellowBox: {
    backgroundColor: Colors.yellow,
    marginHorizontal: -20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 30,
    marginTop: 40,
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
  trackText: {
    fontSize: Fonts.h4,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 1,
    marginTop: 20,
  },
  TrackSubText: {
    fontSize: Fonts.p2,
    fontWeight: '400',
    color: Colors.greyText,
    marginTop: 20,
    letterSpacing: 1,
  },
  history: {
    marginTop: 30,
  },
  historyBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  historyCode: {
    fontSize: Fonts.p2,
    fontWeight: '400',
    color: Colors.black,
    letterSpacing: 1,
  },
  historyText: {
    fontSize: Fonts.p2,
    fontWeight: '400',
    color: Colors.grey2,
    letterSpacing: 1,
    marginTop: 3,
  },
});
