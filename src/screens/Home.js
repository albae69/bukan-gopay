import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Header,
  Balance,
  Gap,
  FeedAndRequest,
  Feed,
  Request,
} from '../components';
import {dimens} from '../utils';
import useStateContext from '../store/useStateContext';

const Home = () => {
  const {state} = useStateContext();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Gap height={dimens.default_12} />
      <Balance />
      <Gap height={dimens.default_12} />
      <FeedAndRequest />
      <Gap height={dimens.default_12} />
      {state.feed ? <Feed /> : <Request />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingHorizontal: dimens.default_14,
  },
});
