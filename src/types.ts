export interface Pokemon {
    name: string,
    types: Array<string>,
    stats: PokemonStats
}

export interface PokemonStats {
    hp: number,
    attack: number,
    defense: number,
    "sp-attack": number,
    "sp-defense": number,
    speed: number
}
