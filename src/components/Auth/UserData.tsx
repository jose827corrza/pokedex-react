import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useCallback} from 'react'

import useAuth from '../../hooks/useAuth'
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonFromFavorite } from '../../api/favorite';

export default function UserData() {
  const [favPokemonsNumber, setFavPokemonsNumber] = React.useState<number[]>()
  const {auth, logout} = useAuth();
  console.log(auth);
  const handleLogout = () => {
    logout!();
  }

  useFocusEffect(
    useCallback(() => {
      (async() => {
        const response = await getPokemonFromFavorite()
        setFavPokemonsNumber(response)
      })()
    }, [])
  )
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth!.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${auth!.firstName} ${auth!.lastName}`} />
        <ItemMenu title="Username" text={auth!.userName} />
        <ItemMenu title="Email" text={auth!.email} />
        <ItemMenu title="Total Favoritos" text={`${favPokemonsNumber ? favPokemonsNumber?.length +' Pokemons' : 'No hay favoritos'}`} />
      </View>

      <Pressable onPress={handleLogout} style={styles.btnLogoun}>
        <Text>Log Out</Text>
      </Pressable>
    </View>
  )
}
interface propsItemMenu{
  title: string
  text: string
}
function ItemMenu(props: propsItemMenu) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    backgroundColor: '#a6a6a6',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius:  4,
    elevation: 3,
    marginHorizontal: 100
  },
});