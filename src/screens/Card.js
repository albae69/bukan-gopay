import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>this is card screen</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});
