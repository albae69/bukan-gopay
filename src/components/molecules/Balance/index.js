import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Color, dimens, strings} from '../../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balance_wrapper}>
        <Text style={styles.available_balance}>
          {strings.available_balance}
        </Text>
        <Text style={styles.balance}>
          Rp <Text style={{fontWeight: 'bold'}}>69.696.969</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.plus_btn}>
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: dimens.default_12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plus_btn: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: dimens.large,
    width: dimens.large,
    borderRadius: dimens.small,
  },
  available_balance: {
    color: 'gray',
    fontSize: dimens.default_12,
    fontWeight: '500',
  },
  balance: {
    fontSize: dimens.default_22,
    marginTop: -3,
  },
});
