import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import PokeList from '../components/PokeList'
import { getAllCharacters } from '../api/pokedex'
import { Pokemon } from '../types/Pokedex'

export default function PokemonScreen() {
  
  return (
    <SafeAreaView>
      <Text>
        Screen one pokemon
      </Text>
    </SafeAreaView>
  )
}