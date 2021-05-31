import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {dimens, strings} from '../../../utils';
import useStateContext from '../../../store/useStateContext';

const FeedAndRequest = () => {
  const [selected, setSelected] = useState(1);
  const {dispatch} = useStateContext();

  useEffect(() => {
    setSelected(1);
    dispatch({type: 'SET_FEED', value: true});
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setSelected(1);
          dispatch({type: 'SET_FEED', value: true});
        }}
        style={[
          styles.btn,
          {backgroundColor: selected == 1 ? 'white' : 'lightgray'},
        ]}
        activeOpacity={0.8}>
        <Text
          style={[styles.btn_title, {color: selected == 1 ? 'black' : 'gray'}]}>
          {strings.feed}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected(2);
          dispatch({type: 'SET_REQUEST', value: false});
        }}
        style={[
          styles.btn,
          {backgroundColor: selected == 2 ? 'white' : 'lightgray'},
        ]}
        activeOpacity={0.8}>
        <Text
          style={[styles.btn_title, {color: selected == 2 ? 'black' : 'gray'}]}>
          {strings.request}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedAndRequest;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    padding: 2,
    borderRadius: 10,
    elevation: 1,
  },
  btn: {
    padding: dimens.default_12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 2,
  },
  btn_title: {
    fontWeight: 'bold',
    fontSize: dimens.default_14,
  },
});
