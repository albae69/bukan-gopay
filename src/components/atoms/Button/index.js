import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {dimens} from '../../../utils';

const Button = ({
  onPress,
  btn_style,
  title_style,
  title = 'button',
  activeOpacity = 0.8,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, btn_style]}
      activeOpacity={activeOpacity}>
      <Text style={[styles.btn_title, title_style]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: dimens.small,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: dimens.supersmall,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: dimens.supersmall,
    marginHorizontal: dimens.supersmall,
  },
  btn_title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: dimens.default_14,
  },
});
