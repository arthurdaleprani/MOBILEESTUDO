import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviePage from './src/pages/MoviePage';
import MovieDetailsPage from './src/pages/MovieDatailsPage';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name = 'MoviesPage' component= {MoviePage}
     options={{headerShown :false}}/>
   <Stack.Screen name = "MovieDetailsPage" component={MovieDetailsPage}/>
   
    </Stack.Navigator>
    </NavigationContainer>
  );
}



//npm install @react-navigation/native
//npx expo install react-native-screens react-native-safe-area-context