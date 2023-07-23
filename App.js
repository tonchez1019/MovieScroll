import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './src/helpers/rootNavigation'
import { Provider as HomeProvider } from './src/context/HomeContext';
import HomeScreen from './src/screens/HomeScreen';
import MovieItemScreen from './src/screens/MovieItemScreen';
import LenguageScreen from './src/screens/LenguageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef} theme={{ colors: { background: 'white' } }}>
      <HomeProvider>
        <Stack.Navigator
          initialRouteName="LenguageScreen"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LenguageScreen" component={LenguageScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MovieItemScreen" component={MovieItemScreen} />
        </Stack.Navigator>
      </HomeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
