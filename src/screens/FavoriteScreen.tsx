import { View, Text } from 'react-native'
import React, {useState, useCallback} from 'react'
import useAuth from '../hooks/useAuth'
import {getPokemonFromFavorite, } from '../api/favorite'
import PokeList from '../components/PokeList'
import { getPokemonsFavInfo } from '../api/pokedex'
import {Pokedex} from '../types/Pokemon'
import { useFocusEffect } from '@react-navigation/native'
import NoLogged from './NoLogged'

export default function FavoriteScreen() {
  const [favPokemons, setFavPokemons] = useState<number[]>([])
  const [favPokemonsInfo, setFavPokemonsInfo] = useState<Pokedex[]>([])
  const {auth} = useAuth()

  const handleLoad = () => {
    
  }
  useFocusEffect(
    useCallback(() => {
      if(auth){
        (async() => {
          const response = await getPokemonFromFavorite()
          const pokemonsWithInfo = await getPokemonsFavInfo(response)
          setFavPokemons(response)
          setFavPokemonsInfo(pokemonsWithInfo)
          console.log(response);
          
        })()
      }
    }, [])

  )


  return auth ? (<PokeList  pokemons={favPokemonsInfo} loadPokemons={handleLoad} />) : (<NoLogged />)
  // return auth ? (<Text>Logeado</Text>) : (<Text>FavoriteScreen</Text>)

}