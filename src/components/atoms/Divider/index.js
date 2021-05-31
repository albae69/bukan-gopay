import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
    marginTop: 15,
  },
});
