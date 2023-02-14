import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import PokeList from '../components/PokeList'
import { Pokedex } from '../types/Pokemon'
import { getAllCharacters, getCharacterDetail } from '../api/pokedex'

export default function PokedexScreen() {
  const [nextUrl, setNextUrl] = useState<string | null>(null)
  const [pokemons, setPokemons] = useState<Pokedex[]>([])

  useEffect(() => {
    (
      async () => {
        await loadPokemons()
      }
    )()
  },[])

  const loadPokemons = async() => {
    try {
      const response = await getAllCharacters(nextUrl)
      // console.log(response);
      
      setNextUrl(response.next)
      const pokemonArray: Array<Pokedex> = [];
      for await (const pokemon of response.results){
        const pokemonDetail = await getCharacterDetail(pokemon.url)
        pokemonArray.push(pokemonDetail)
      }
      setPokemons([...pokemons, ...pokemonArray])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView>
      <PokeList loadPokemons={loadPokemons} pokemons={pokemons} />
    </SafeAreaView>
  )
}