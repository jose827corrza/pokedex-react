import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { Pokedex } from '../types/Pokemon'
import PokemonCard from './PokemonCard'

interface props {
  loadPokemons: Function
  pokemons: Pokedex[]
}
export default function PokeList({pokemons, loadPokemons}: props) {
  // console.log(pokemons);
  

  const loadMore = () => {
    console.log('loading more');
    loadPokemons()
    
}
  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <PokemonCard character={item}/>}
      keyExtractor={(character) => String(character.id)}
      onEndReached={loadMore}
      contentContainerStyle={styles.flatListContainer}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size='large'
          style={styles.spinner}
          color='#AEAEAE'
          />
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
      paddingHorizontal: 5,
      paddingTop:35
  },
  spinner:{
      marginTop:20,
      marginBottom:60
  }
})