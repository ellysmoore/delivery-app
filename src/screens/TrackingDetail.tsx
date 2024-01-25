/* eslint-disable react-native/no-inline-styles */
import React, {
  useEffect,
  useRef, //useState
} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/color';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Fonts from '../constants/fonts';
// import RBSheet from 'react-native-raw-bottom-sheet';
import pin1 from '../assets/images/pin1.png';
import pin2 from '../assets/images/pin2.png';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Timeline from 'react-native-timeline-flatlist';
import {useNavigation} from '@react-navigation/native';

const timelineData = [
  {
    time: '09:00',
    title: 'In Delivery',
    description: 'Bali, Indonesia',
    icon: require('../assets/images/truck-round-colore.png'),
  },
  {
    time: '10:45',
    title: 'Transit - Sending City',
    description: 'Jakarta, Indonesia',
    icon: require('../assets/images/mailbox.png'),
  },
  {
    time: '12:00',
    title: 'Send Form Sukabumi',
    description: 'Sukabumi, Indonesia',
    icon: require('../assets/images/box-round.png'),
  },
];

const TrackingDetail = () => {
  const navigation = useNavigation();
  const markerRef = useRef();
  const markerRef2 = useRef();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  const origin = {latitude: 37.78825, longitude: -122.4324};
  const destination = {latitude: 37.7749, longitude: -122.4194};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDZWVVB5rozZRxzP2sNSJ1ffMfcSd8vKZk';

  useEffect(() => {
    getInitialState();
  }, []);

  function getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  return (
    <>
      {/* <View
        style={{
          backgroundColor: Colors.yellow,
          borderRadius: 46,
          padding: 10,
          marginHorizontal: 30,
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.yellow,
            borderRadius: 46,
            borderWidth: 0.8,
            width: '100%',
            padding: 10,
            borderColor: Colors.black,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: Fonts.p3,
              fontWeight: '400',
              color: Colors.black,
              paddingVertical: 7,
            }}>
            SCP6653728497
          </Text>
        </View>
      </View> */}
      <MapView
        style={{flex: 1, overflow: 'hidden'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View />
          <Text
            onPress={() => {
              if (sheet === 'close') {
                setSheet('open');
                refRBSheet?.current.open();
              } else {
                setSheet('close');
                refRBSheet?.current.close();
              }
            }}
            style={styles.trackText}>
            Tracking Details
          </Text>
          <View />
        </View> */}
        {/* @ts-ignore */}
        <Marker ref={markerRef} coordinate={origin} image={pin1} />
        {/* @ts-ignore */}
        <Marker ref={markerRef2} coordinate={destination} image={pin2} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor={'#FFD337'}
        />
      </MapView>
      <BottomSheet
        isOpen={false}
        sliderMinHeight={130}
        sliderMaxHeight={Dimensions.get('window').height - 200}>
        {(onScrollEndDrag: any) => (
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScrollEndDrag={onScrollEndDrag}>
            <View>
              <Text
                style={{
                  fontSize: Fonts.p3,
                  fontWeight: '400',
                  color: Colors.grey2,
                  paddingVertical: 7,
                }}>
                Estimated arrival in
              </Text>
              <Text
                style={{
                  fontSize: Fonts.h4,
                  fontWeight: '600',
                  color: Colors.black,
                  letterSpacing: 1,
                  // marginTop: 5,
                }}>
                2h 49m
              </Text>
            </View>
            <View style={styles.catalog}>
              <Text style={styles.yellowDetails}>Sukabumi, Indonesia</Text>
              <Text style={styles.yellowDetailsInfo}>
                No receipt : SCP6653728497
              </Text>

              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderColor: Colors.greyText,
                  marginVertical: 10,
                }}
              />

              <Text style={styles.yellowDetails}>2,50 USD</Text>
              <Text style={styles.yellowDetailsInfo}>Postal fee</Text>

              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderColor: Colors.greyText,
                  marginVertical: 10,
                }}
              />

              <Text style={styles.yellowDetails}>Bali, Indonesia</Text>
              <Text style={styles.yellowDetailsInfo}>Parcel, 24kg</Text>
            </View>

            <View style={styles.history}>
              <Text style={styles.trackHistoryHeader}>History</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Timeline
                data={timelineData}
                lineColor={'#DFE6ED'}
                iconStyle={{width: 50, height: 50}}
                descriptionStyle={{color: 'gray'}}
                titleStyle={{marginTop: -20}}
                rowContainerStyle={{marginBottom: 30}}
                separatorStyle={{
                  alignSelf: 'flex-start',
                  justifyContent: 'flex-start',
                  height: 10,
                  width: 10,
                }}
                //@ts-ignore
                options={{
                  style: {paddingTop: 25, paddingLeft: 10},
                }}
                eventContainerStyle={{
                  paddingLeft: 30,
                }}
                isUsingFlatlist={true}
                innerCircle={'icon'}
                showTime={false}
              />
            </View>
          </ScrollView>
        )}
      </BottomSheet>
    </>
  );
};

export default TrackingDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  catalog: {
    marginTop: 30,
    padding: 24,
    backgroundColor: Colors.yellow,
    borderRadius: 32,
  },
  trackText: {
    fontSize: Fonts.p1,
    fontWeight: '600',
    color: Colors.black,
    letterSpacing: 1,
    marginTop: 60,
  },
  trackHistoryHeader: {
    fontSize: Fonts.p1,
    fontWeight: '600',
    color: Colors.black,
    // marginTop: 10,
  },
  yellowDetails: {
    fontSize: Fonts.p2,
    fontWeight: '500',
    color: Colors.black,
    // letterSpacing: 1,
  },
  yellowDetailsInfo: {
    fontSize: Fonts.p3,
    fontWeight: '400',
    color: Colors.greyText,
    // letterSpacing: 1,
    marginTop: 6,
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
