import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged() {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>To Watch this sreen, First you must be logged</Text>
      <Button title='Go to login' onPress={() => navigation.navigate('account-tab', {screen: 'Account'})} />
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text:{
    textAlign: "center",
    marginBottom: 10,
  },
})