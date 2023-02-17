import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


import {Type} from '../../types/Pokemon'
import { getColorByPokemonType } from '../../utils/getColorsByPokemonType'

interface Props {
  types: Type[]
}
export default function Types({types}: Props) {
  return (
    <View style={styles.content}>
      {types.map((type, index) => (
      <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(type.type.name)}}>
        <Text style={styles.name} >{type.type.name}</Text>
      </View>
 
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop:50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill:{
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  name: {
    color: 'white'
  },
})