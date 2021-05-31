import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Card from '../Card';

const Feed = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card />
      <Card />
      <Card />
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
