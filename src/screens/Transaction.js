import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';

const Transaction = () => {
  const [show, setShow] = useState(false);
  const btnSize = new Animated.Value(1);
  const mode = useRef(new Animated.Value(0)).current;

  // style
  const sizeStyle = {transform: [{scale: btnSize}]};

  useEffect(() => {
    Animated.timing(mode, {
      toValue: show ? 1 : 0,
    }).start();
  }, [show]);

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const reqMoneyX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  const reqMoneyY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -60],
  });

  const qrcodeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 90],
  });

  const qrcodeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -60],
  });

  const payBillsX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -5],
  });

  const payBillsY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -120],
  });

  const HandlePress = () => {
    setShow(!show);
    Animated.sequence([
      //btn size
      Animated.timing(btnSize, {
        toValue: 0.95,
        duration: 200,
      }),
      Animated.timing(btnSize, {
        toValue: 1,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{position: 'absolute', alignItems: 'center'}}>
      <Animated.View
        style={{
          position: 'absolute',
          left: payBillsX,
          top: payBillsY,
          alignItems: 'center',
        }}>
        <View style={styles.secondaryButton}>
          <MaterialCommunity
            name="text-box-check-outline"
            size={35}
            color="white"
          />
        </View>
        <Text style={{width: '100%', fontSize: 8, textAlign: 'center'}}>
          Pay Bills
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: qrcodeX,
          top: qrcodeY,
          alignItems: 'center',
        }}>
        <View style={styles.secondaryButton}>
          <MaterialCommunity name="qrcode" size={35} color="white" />
        </View>
        <Text style={{width: '100%', fontSize: 8, textAlign: 'center'}}>
          QR Code
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: reqMoneyX,
          top: reqMoneyY,
          alignItems: 'center',
        }}>
        <View style={styles.secondaryButton}>
          <Material name="request-page" size={35} color="white" />
        </View>
        <Text style={{width: '100%', fontSize: 8, textAlign: 'center'}}>
          Request & Send Money
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.button,
          sizeStyle,
          {backgroundColor: show ? 'black' : 'blue'},
        ]}>
        <Animated.View style={{transform: [{rotate: rotation}]}}>
          <TouchableHighlight
            underlayColor={null}
            activeOpacity={0.5}
            onPress={HandlePress}>
            <MaterialCommunity
              name="compare-horizontal"
              size={24}
              color="white"
            />
          </TouchableHighlight>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  button: {
    height: 58,
    width: 58,
    borderRadius: 58 / 2,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
    shadowRadius: 5,
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
    borderWidth: 5,
    borderColor: 'lightgray',
    shadowColor: 'lightgray',
  },
  secondaryButton: {
    height: 72,
    width: 72,
    borderRadius: 72 / 2,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
    shadowRadius: 5,
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
  },
});
