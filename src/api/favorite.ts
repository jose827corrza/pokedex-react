import AsyncStorage from "@react-native-async-storage/async-storage"

export const FAVORITE_POKEMON = 'fav-pokemons_V2'

export const savePokemonToFavorite = async(id: number) => {
    try {
        const favorites: Array<number> = await getPokemonFromFavorite()
        favorites.push(id)
        console.log(favorites);
        
        await AsyncStorage.setItem(FAVORITE_POKEMON, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}

export const getPokemonFromFavorite = async(): Promise<number[]> => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_POKEMON)
        return JSON.parse(response || '[]')
    } catch (error) {
        throw error
    }
}

export const isPokemonFavorite = async(id: number) => {
    const favorites = await getPokemonFromFavorite()
    return favorites.includes(id)
}

export const removePokemonFromFav = async(id: number) => {
    try {
        const favorites = await getPokemonFromFavorite()
        const newFavorites = favorites.filter(favId => favId != id)
        await AsyncStorage.setItem(FAVORITE_POKEMON, JSON.stringify(newFavorites))
        console.log(newFavorites);
        
        
    } catch (error) {
        throw error
    }
}