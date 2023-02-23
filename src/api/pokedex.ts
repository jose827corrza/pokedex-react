import { Pokedex } from "../types/Pokedex";
import { Pokedex as Pokemon } from "../types/Pokemon";

export const getAllCharacters = async(endpoint: string | null): Promise<Pokedex> => {
    try {
        // console.log('endpoint ----->',endpoint);
        
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
        const response = await fetch(endpoint || url);
        const result = await response.json();
        // console.log(result);
        
        return result;
    } catch (error) {
        throw error;
    }
}

export const getCharacterDetail = async(url: string) => {
    try {
        const response = await fetch(url)
        const result = await response.json();
        // console.log(result);
        
        return result
    } catch (error) {
        throw error;
    }
}

export const getPokemonsFavInfo = async(favPokemons: number[]) => {
    const favPokemonsWithInfo: Pokemon[] = []
    for await( const pokemonId of favPokemons){
        const pokemonDetail = await getPokemonInfoById(pokemonId)
        favPokemonsWithInfo.push(pokemonDetail)
    }
    return favPokemonsWithInfo
}

export const getPokemonInfoById = async(id: number) : Promise<Pokemon> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await fetch(url)
        return  await response.json()
    } catch (error) {
        throw error
    }
}