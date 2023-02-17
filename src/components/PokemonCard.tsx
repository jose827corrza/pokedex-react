import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable, Image } from  'react-native'
import React from 'react'
import { getColorByPokemonType } from './../utils/getColorsByPokemonType';
import { useNavigation } from '@react-navigation/native';
import { Pokedex } from './../types/Pokemon';
import { PokemonParams } from '../navigation/PokedexNavigation';
import { StackNavigationProp } from '@react-navigation/stack';


interface props {
    character: Pokedex
}

export default function PokemonCard({character}: props) {

    const navigation = useNavigation<StackNavigationProp<PokemonParams>>();
    const goToCharacterDetail = () => {
        console.log(`go to: ${character.name} || ${character.id}`);
        navigation.navigate('PokemonInfo',{character: character})
    }

  const pokemonColor = getColorByPokemonType(character.types[0].type.name)  
  const bgStyles =  { backgroundColor: pokemonColor, ...styles.bgStyles}  
  return (
    <View style={styles.container}>
        <Pressable onPress={goToCharacterDetail}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                <View style={bgStyles}>
                    <Text style={styles.number}>
                    #{`${character.order}`.padStart(3, '0')}
                    </Text>
                    <Text style={styles.name}>{character.name}</Text>
                    <Image source={{ uri: character.sprites.front_default}} style={styles.image} />
                </View>
                </View>
            </View>
        </Pressable>
    </View>
    
  )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      height: 130,
    },
    container:{
        flex: 1,
        // paddingTop:40
    },
    spacing: {
      flex: 1,
      padding: 5,
    },
    bgStyles: {
      flex: 1,
    borderRadius: 15,
    padding: 10,
    },
    number: {
      position: "absolute",
      right: 10,
      top: 10,
      color: "#fff",
      fontSize: 11,
    },
    name: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 15,
      paddingTop: 10,
      textTransform: 'capitalize'
    },
    image: {
      position: "absolute",
      bottom: 2,
      right: 2,
      width: 90,
      height: 90,
    },
  });