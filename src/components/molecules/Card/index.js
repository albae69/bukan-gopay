import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {dimens, strings} from '../../../utils';
import {Gap, Button} from '../../../components';

const Card = ({isRequest}) => {
  if (isRequest) {
    return (
      <View style={styles.container}>
        <View style={styles.wrap_picture}>
          <Image
            source={require('../../../assets/images/curlybraces.png')}
            style={styles.picture}
          />
          <View style={styles.wrap_time}>
            <MaterialCommunity name="clock-outline" size={18} color="gray" />
            <Text style={styles.time_title}>69m</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={[
              styles.wrap_inside_card,
              {justifyContent: 'space-between'},
            ]}>
            <Text
              style={[styles.time_title, {fontWeight: 'bold', color: 'black'}]}>
              Bay <Text style={styles.time_title}>request you money</Text>
            </Text>
            <View
              style={[
                styles.wrap_inside_card,
                {
                  backgroundColor: '#f5b8b8',
                  borderRadius: 10,
                  padding: 1,
                },
              ]}>
              <Text
                style={[
                  styles.time_title,
                  {
                    color: 'red',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginHorizontal: 2,
                    fontSize: 10,
                  },
                ]}>
                {'- Rp 100k '}
              </Text>
            </View>
          </View>
          <Text style={styles.feedback}>Buat Main Dota</Text>
          <Gap height={dimens.supersmall} />
          <View style={styles.wrap_button}>
            <Button
              btn_style={{
                backgroundColor: null,
                flex: 1,
              }}
              title_style={{color: 'gray'}}
              title={strings.decline}
            />
            <Button
              btn_style={{
                flex: 1,
              }}
              title_style={{color: 'white'}}
              title={strings.pay}
            />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrap_picture}>
        <Image
          source={require('../../../assets/images/curlybraces.png')}
          style={styles.picture}
        />
        <View style={styles.wrap_time}>
          <MaterialCommunity name="clock-outline" size={18} color="gray" />
          <Text style={styles.time_title}>69m</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View
          style={[styles.wrap_inside_card, {justifyContent: 'space-between'}]}>
          <Text
            style={[styles.time_title, {fontWeight: 'bold', color: 'black'}]}>
            Bae <Text style={styles.time_title}>paid</Text> Bay
          </Text>
          <View style={[styles.wrap_inside_card, {marginRight: dimens.small}]}>
            <Feather name="globe" size={18} color="gray" />
            <Text style={styles.time_title}>Public</Text>
          </View>
        </View>
        <Text style={styles.feedback}>Untuk hanya penggemar! 😊</Text>
        <Gap height={dimens.small} />
        <View style={[styles.wrap_inside_card, {justifyContent: 'flex-start'}]}>
          <View style={styles.wrap_inside_card}>
            <MaterialCommunity name="heart" size={18} color="red" />
            <Text style={[styles.time_title, {fontWeight: 'bold'}]}>4</Text>
          </View>
          <View
            style={[styles.wrap_inside_card, {marginLeft: dimens.large_50}]}>
            <MaterialCommunity
              name="message-text-outline"
              size={18}
              color="gray"
            />
            <Text style={[styles.time_title, {fontWeight: 'bold'}]}>4</Text>
          </View>
          <View
            style={[styles.wrap_inside_card, {marginLeft: dimens.large_50}]}>
            <MaterialCommunity name="emoticon" size={18} color="gray" />
            <Text style={[styles.time_title, {fontWeight: 'bold'}]}>4</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: dimens.small,
  },
  picture: {
    height: dimens.x_large,
    width: dimens.x_large,
    borderRadius: dimens.x_large / 2,
  },
  time_title: {
    fontSize: dimens.default_12,
    color: 'gray',
    fontWeight: '500',
    marginLeft: dimens.supersmall,
  },
  wrap_picture: {
    marginRight: dimens.default_12,
  },
  wrap_time: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: dimens.supersmall,
  },
  card: {
    backgroundColor: 'white',
    padding: dimens.small,
    flex: 1,
    borderRadius: 15,
  },
  wrap_inside_card: {
    flexDirection: 'row',
  },
  feedback: {
    fontSize: dimens.default_14,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: dimens.supersmall,
  },
  wrap_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
