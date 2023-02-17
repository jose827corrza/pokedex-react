import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'

import { getColorByPokemonType} from '../../utils/getColorsByPokemonType'

interface Props {
    name: string
    order: number
    image: string
    type: string
}
export default function Header({name, order, image, type}: Props) {
    console.log(name + '----' + order);
    
    const color = getColorByPokemonType(type)
    const bgStyles =  { backgroundColor: color, ...styles.bgStyles}
  return (
    <>
        <View style={bgStyles}/>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.order}>#{`${order}`.padStart(3,'0')}</Text>
        </View>
        <View style={styles.contentImg}>
            <Image source={{uri: image}} style={styles.image}/>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal: 20,
        marginTop: 30
    },
    bgStyles:{
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomRightRadius: 300,
        transform: [{scaleX: 2}]
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40
    },
    name:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27,
        marginLeft:30,
        textTransform: 'capitalize'
    },
    order:{
        color: 'white',
        fontWeight: 'bold',
    },
    contentImg:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        top: 30
    },
    image: {
        width: 250,
        height: 350,
        resizeMode:'contain'
    },
})