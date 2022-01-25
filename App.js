import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import MovieInfoScreen from './src/screens/movieInfo/MovieInfoScreen';

const MainStack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={HomeScreen} />
          <MainStack.Screen name="MovieInfo" component={MovieInfoScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
  );
};

export default App;
