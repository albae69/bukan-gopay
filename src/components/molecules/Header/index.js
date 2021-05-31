import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {dimens} from '../../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="search" size={24} />
      </TouchableOpacity>
      <Text style={styles.text}>
        Bukan Go<Text style={[styles.text, {fontWeight: 'normal'}]}>Pay</Text>
      </Text>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/curlybraces.png')}
          style={styles.profile_image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_image: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    elevation: 3,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
