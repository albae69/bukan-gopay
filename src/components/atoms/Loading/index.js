import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {dimens} from '../../../utils';

const Loading = ({isButton, size = 'large', color = 'lightgray'}) => {
  if (isButton) {
    return <ActivityIndicator size={size} color={color} />;
  }

  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
  },
  title: {
    fontSize: dimens.default_12,
    fontWeight: '300',
    marginTop: dimens.default,
  },
});
