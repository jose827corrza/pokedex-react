import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Pokedex } from '../types/Pokemon'

interface props {
  loadPokemons: Function
  pokemons: Pokedex[]
}
export default function PokeList({pokemons, loadPokemons}: props) {
  console.log(pokemons);
  
  return (
    // <FlatList 
    //   data={pokemons}
    //   numColumns={2}
    //   showsVerticalScrollIndicator={false}
    //   renderItem={({item}) => }
    // />
    <View>
      {
        pokemons.map(pokemon => (
          <Text>{pokemon.name}</Text>
        ))
      }
    </View>
  )
}