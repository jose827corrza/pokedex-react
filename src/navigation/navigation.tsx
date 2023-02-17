import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import FavoriteNavigation from './FavoriteNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name='favorite-tab' component={FavoriteNavigation} options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({color, size}) => <Icon name='heart' color={color} size={size}/>
      }}/>
      <Tab.Screen name='pokedex-tab' component={PokedexNavigation} options={{
        tabBarLabel:'',
        tabBarIcon: () => renderLogo()
      }}/>
      <Tab.Screen name='account-tab' component={AccountNavigation} options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({color, size}) => <Icon name='user' color={color} size={size}/>
      }}/>
    </Tab.Navigator>
  )
}

function renderLogo (){
  return (
    <Image 
      source={require('../../assets/pokeball.png')}
      style={{width:75, height:75, top:5}}
    />
  )
}