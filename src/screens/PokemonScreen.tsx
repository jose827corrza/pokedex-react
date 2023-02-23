import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ParamListBase } from '@react-navigation/native'
import PokeList from '../components/PokeList'
import { getAllCharacters } from '../api/pokedex'
import { Pokedex } from './../types/Pokemon';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PokemonParams } from '../navigation/PokedexNavigation'
import Header from '../components/Pokemon/Header'
import Types from '../components/Pokemon/Types'
import Stats from '../components/Pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Favorite from '../components/Pokemon/Favorite'
import useAuth from '../hooks/useAuth'

type Props = NativeStackScreenProps<PokemonParams,'PokemonInfo'>

const PokemonScreen: React.FC<Props> =(props) => {
// const PokemonScreen =({route, navigation}: NativeStackScreenProps<ParamListBase>) => {
  const [pokemon, setPokemon] = useState<Pokedex>()
  const {auth} = useAuth()
  const {route, navigation} = props
  // setPokemon(route.params.character)
  // console.log(route.params.character.name);
  // const pokemonTest : Pokedex = route.params! as Pokedex
  
  useEffect(() => {
    navigation.setOptions({
      // headerRight: () => (auth ? <Favorite id={route.params!.character.id}/>: null), // TODO,
      headerRight: () => (auth ? <Favorite id={route.params.character.id}/>: null), // TODO,
      headerLeft: () => (
        <Icon 
          name='arrow-left' 
          color='#fff' 
          size={20} 
          style={{marginLeft: 20,}}
          onPress={navigation.goBack}
          
          />)
    })
  }, [navigation, route.params])
  return (
    <ScrollView>
      <Header 
        name={route.params.character.name}
        order={route.params.character.order}
        image={route.params.character.sprites.front_default}
        type={route.params.character.types[0].type.name}
      />
      <Types types={route.params.character.types}/>
      <Stats stats={route.params.character.stats}/>
      {/* <Stats stats={route.params.character.stats}/> */}
    </ScrollView>
  )
}

export default PokemonScreen;