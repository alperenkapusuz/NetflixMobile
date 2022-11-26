import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import MoviesScreen from './pages/MoviesScreen';
import SeriesScreen from './pages/SeriesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
        <Stack.Screen name="SeriesScreen" component={SeriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;