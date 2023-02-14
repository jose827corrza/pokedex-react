import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable, Image } from  'react-native'
import React from 'react'


interface props {
    character: 
}
export default function CharacterCard({character}: props) {

    const goToCharacterDetail = () => {
        // console.log(`go to: ${character.name} || ${character.id}`);
        console.log(character);
        
    }
  return (
    // <View style={styles.container}>
    //     <Pressable
    //     onPress={goToCharacterDetail}
    //     >
    //     <View style={styles.card}>
    //         <View style={styles.spacing}>
    //         <View style={styles.bgCard}>
    //             <Text>{character.birth_year}</Text>
    //             <Image source={{uri: character.image}} style={styles.image}/>
    //             <Text style={styles.name}>{character.name}</Text>
    //         </View>
    //         </View>
    //     </View>
    // </Pressable>
    // </View>
    <View>
        <Text>Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height:190,
        // marginTop:30
    },
    container:{
        flex: 1,
        // paddingTop:40
    },
    spacing:{
        flex:1,
        padding:5,
    },
    bgStyles:{
        flex:1,
        borderRadius:15,
        padding:10,
        backgroundColor: 'red'
    },
    bgCard: {
        backgroundColor: 'gray',
        borderRadius: 10,
        paddingBottom:10,
        paddingTop:60,
        paddingLeft:15,
        marginTop: 10
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    name: {
        paddingTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})