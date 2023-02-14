import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from '../screens/FavoriteScreen';


const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name={'Favorite'} component={FavoriteScreen} options={{headerTitleAlign:'center'}}/>
    </Stack.Navigator>
  )
}