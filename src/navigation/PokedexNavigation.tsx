import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { Pokedex } from './../types/Pokemon';
import Navigation from './navigation';

export type PokemonParams = {
  Pokedex: object
  PokemonInfo: {
    character: Pokedex
    navigation: typeof Navigation
  }
}
const Stack = createStackNavigator<PokemonParams>();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'Pokedex'} component={PokedexScreen}/>
        <Stack.Screen name={'PokemonInfo'} component={PokemonScreen} options={{
          // headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false
        }}/>
    </Stack.Navigator>
  )
}