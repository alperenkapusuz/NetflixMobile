import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './pages/HomeScreen';
import MoviesScreen from './pages/MoviesScreen';
import SeriesScreen from './pages/SeriesScreen';
import UserAgreement from './pages/UserAgreement/UserAgreement';
import ConfidentialityAgreement from './pages/ConfidentialityAgreement';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* Stack ve Tab Navigatoru Birlikte Kullandım*/
const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#831010'}}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Popular titles'}}
      />
      <Stack.Screen
        name="MoviesScreen"
        component={MoviesScreen}
        options={{title: 'Movies'}}
      />
      <Stack.Screen
        name="SeriesScreen"
        component={SeriesScreen}
        options={{title: 'Series'}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={NavigationStack}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="home" size={21} />;
            },
          }}
        />
        <Tab.Screen
          name="Kullanıcı Sözleşmesi"
          component={UserAgreement}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="book" size={21} />;
            },
          }}
        />
        <Tab.Screen
          name="Gizlilik Sözleşmesi"
          component={ConfidentialityAgreement}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="book" size={20} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
