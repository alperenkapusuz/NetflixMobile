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
    </NavigationContainer>
  );
};

export default App;
