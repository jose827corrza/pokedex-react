import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { } from '@react-navigation/native'
import PokeList from '../components/PokeList'
import { getAllCharacters } from '../api/pokedex'
import { Pokedex } from './../types/Pokemon';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PokemonParams } from '../navigation/PokedexNavigation'
import Header from '../components/Pokemon/Header'
import Types from '../components/Pokemon/Types'
import Stats from '../components/Pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome5'

type Props = NativeStackScreenProps<PokemonParams,'PokemonInfo'>

const PokemonScreen: React.FC<Props> =(props) => {
  const [pokemon, setPokemon] = useState<Pokedex>()
  const {route, navigation} = props
  // setPokemon(route.params.character)
  // console.log(route.params.character.name);
  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null, // TODO,
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
    </ScrollView>
  )
}

export default PokemonScreen;