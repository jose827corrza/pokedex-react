import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';


const Stack = createStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'Pokedex'} component={PokedexScreen}/>
        <Stack.Screen name={'Pokemon Info'} component={PokemonScreen}/>
    </Stack.Navigator>
  )
}