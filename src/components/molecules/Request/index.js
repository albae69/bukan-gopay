import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../Card';

const Request = () => {
  return (
    <View>
      <Card isRequest />
      <Card isRequest />
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
