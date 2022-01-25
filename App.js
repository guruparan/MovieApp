import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import MovieInfoScreen from './src/screens/movieInfo/MovieInfoScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainStack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <MainStack.Screen
            name="MovieInfo"
            component={MovieInfoScreen}
            options={{
              title:''
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
