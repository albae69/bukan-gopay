import 'react-native-gesture-handler';
import React from 'react';
import Store from './store';
import Router from './router';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Store>
      <Router />
    </Store>
  );
};

export default App;
