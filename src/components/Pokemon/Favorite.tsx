import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { savePokemonToFavorite, isPokemonFavorite, removePokemonFromFav } from '../../api/favorite'



interface Props {
    id: number
}
export default function Favorite({id}: Props) {
  const [favorite, setIsFavorite] = useState<boolean | undefined>(undefined)
  const [reload, setReload] = useState(false)
  const Icon = favorite ? FontAwesome : FontAwesome5
    
  const addToFavorite = async () => {
    try {
          console.log('Added to favorites');
          await savePokemonToFavorite(id)
          onFavReload()
          
        } catch (error) {
          console.log(error)
        }
  }

  const removeFromFavorite = async() => {
    try {
      await removePokemonFromFav(id)
      onFavReload()
      console.log('delete from fav');
    } catch (error) {
      console.log(error);
      
    }
    
  }

  const onFavReload = () => {
    setReload(!reload)
  }

  useEffect(() => {
    (async() => {
      try {
        const response = await isPokemonFavorite(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  },[favorite, reload])  
  return (

    <Icon 
        name='heart'
        color={'#fff'}
        size={20}
        onPress={favorite ? removeFromFavorite : addToFavorite}
        style={{marginTop:10, marginRight: 20}}
        solid={favorite}
    />
  )
}