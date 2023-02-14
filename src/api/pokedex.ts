import { Pokedex } from "../types/Pokedex";

export const getAllCharacters = async(endpoint: string | null): Promise<Pokedex> => {
    try {
        console.log('endpoint ----->',endpoint);
        
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