import {POKEMON_TYPE_COLORS} from '../types/Pokedex'

export const getColorByPokemonType = (type: string) => POKEMON_TYPE_COLORS[type.toLowerCase()]