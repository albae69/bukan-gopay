import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Card, Home, Profile, Transaction} from '../screens/';
import {strings} from '../utils/strings';
import Feather from 'react-native-vector-icons/Feather';

const Router = () => {
  const Stack = createBottomTabNavigator();
  const Tab = createBottomTabNavigator();

  const TransactionButton = () => {
    return null;
  };

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === strings.navigation.home) {
              iconName = focused
                ? strings.navigation.home.toLowerCase()
                : strings.navigation.home.toLowerCase();
            }

            if (route.name === strings.navigation.card) {
              iconName = focused ? 'credit-card' : 'credit-card';
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          tabStyle: {marginBottom: 10},
          style: {height: 60},
        }}>
        <Tab.Screen name={strings.navigation.home} component={Home} />
        <Tab.Screen
          name={strings.navigation.transaction}
          component={TransactionButton}
          options={{
            tabBarIcon: () => <Transaction />,
          }}
        />
        <Tab.Screen name={strings.navigation.card} component={Card} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{tabBarVisible: false}}>
        <Stack.Screen name={strings.navigation.home} component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
