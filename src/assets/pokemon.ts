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

export const allKantoPokemon: Pokemon[] = [
    {
        "name": "Bulbasaur",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "sp-attack": 65,
            "sp-defense": 65,
            "speed": 45
        }
    },
    {
        "name": "Ivysaur",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "sp-attack": 80,
            "sp-defense": 80,
            "speed": 60
        }
    },
    {
        "name": "Venusaur",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "sp-attack": 100,
            "sp-defense": 100,
            "speed": 80
        }
    },
    {
        "name": "Charmander",
        "types": ["FIR"],
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "sp-attack": 60,
            "sp-defense": 50,
            "speed": 65
        }
    },
    {
        "name": "Charmeleon",
        "types": ["FIR"],
        "stats": {
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "sp-attack": 80,
            "sp-defense": 65,
            "speed": 80
        }
    },
    {
        "name": "Charizard",
        "types": ["FIR","FLY"],
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "sp-attack": 109,
            "sp-defense": 85,
            "speed": 100
        }
    },
    {
        "name": "Squirtle",
        "types": ["WAT"],
        "stats": {
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "sp-attack": 50,
            "sp-defense": 64,
            "speed": 43
        }
    },
    {
        "name": "Wartortle",
        "types": ["WAT"],
        "stats": {
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "sp-attack": 65,
            "sp-defense": 80,
            "speed": 58
        }
    },
    {
        "name": "Blastoise",
        "types": ["WAT"],
        "stats": {
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "sp-attack": 85,
            "sp-defense": 105,
            "speed": 78
        }
    },
    {
        "name": "Caterpie",
        "types": ["BUG"],
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "sp-attack": 20,
            "sp-defense": 20,
            "speed": 45
        }
    },
    {
        "name": "Metapod",
        "types": ["BUG"],
        "stats": {
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "sp-attack": 25,
            "sp-defense": 25,
            "speed": 30
        }
    },
    {
        "name": "Butterfree",
        "types": ["BUG","FLY"],
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "sp-attack": 90,
            "sp-defense": 80,
            "speed": 70
        }
    },
    {
        "name": "Weedle",
        "types": ["BUG","POI"],
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "sp-attack": 20,
            "sp-defense": 20,
            "speed": 50
        }
    },
    {
        "name": "Kakuna",
        "types": ["BUG","POI"],
        "stats": {
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "sp-attack": 25,
            "sp-defense": 25,
            "speed": 35
        }
    },
    {
        "name": "Beedrill",
        "types": ["BUG","POI"],
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "sp-attack": 45,
            "sp-defense": 80,
            "speed": 75
        }
    },
    {
        "name": "Pidgey",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "sp-attack": 35,
            "sp-defense": 35,
            "speed": 56
        }
    },
    {
        "name": "Pidgeotto",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "sp-attack": 50,
            "sp-defense": 50,
            "speed": 71
        }
    },
    {
        "name": "Pidgeot",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "sp-attack": 70,
            "sp-defense": 70,
            "speed": 101
        }
    },
    {
        "name": "Rattata",
        "types": ["NOR"],
        "stats": {
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "sp-attack": 25,
            "sp-defense": 35,
            "speed": 72
        }
    },
    {
        "name": "Raticate",
        "types": ["NOR"],
        "stats": {
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "sp-attack": 50,
            "sp-defense": 70,
            "speed": 97
        }
    },
    {
        "name": "Spearow",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "sp-attack": 31,
            "sp-defense": 31,
            "speed": 70
        }
    },
    {
        "name": "Fearow",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "sp-attack": 61,
            "sp-defense": 61,
            "speed": 100
        }
    },
    {
        "name": "Ekans",
        "types": ["POI"],
        "stats": {
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "sp-attack": 40,
            "sp-defense": 54,
            "speed": 55
        }
    },
    {
        "name": "Arbok",
        "types": ["POI"],
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 69,
            "sp-attack": 65,
            "sp-defense": 79,
            "speed": 80
        }
    },
    {
        "name": "Pikachu",
        "types": ["ELE"],
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "sp-attack": 50,
            "sp-defense": 50,
            "speed": 90
        }
    },
    {
        "name": "Raichu",
        "types": ["ELE"],
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "sp-attack": 90,
            "sp-defense": 80,
            "speed": 110
        }
    },
    {
        "name": "Sandshrew",
        "types": ["GRO"],
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "sp-attack": 20,
            "sp-defense": 30,
            "speed": 40
        }
    },
    {
        "name": "Sandslash",
        "types": ["GRO"],
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "sp-attack": 45,
            "sp-defense": 55,
            "speed": 65
        }
    },
    {
        "name": "Nidoran♀",
        "types": ["POI"],
        "stats": {
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "sp-attack": 40,
            "sp-defense": 40,
            "speed": 41
        }
    },
    {
        "name": "Nidorina",
        "types": ["POI"],
        "stats": {
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "sp-attack": 55,
            "sp-defense": 55,
            "speed": 56
        }
    },
    {
        "name": "Nidoqueen",
        "types": ["POI","GRO"],
        "stats": {
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "sp-attack": 75,
            "sp-defense": 85,
            "speed": 76
        }
    },
    {
        "name": "Nidoran♂",
        "types": ["POI"],
        "stats": {
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "sp-attack": 40,
            "sp-defense": 40,
            "speed": 50
        }
    },
    {
        "name": "Nidorino",
        "types": ["POI"],
        "stats": {
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "sp-attack": 55,
            "sp-defense": 55,
            "speed": 65
        }
    },
    {
        "name": "Nidoking",
        "types": ["POI","GRO"],
        "stats": {
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "sp-attack": 85,
            "sp-defense": 75,
            "speed": 85
        }
    },
    {
        "name": "Clefairy",
        "types": ["FAI"],
        "stats": {
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "sp-attack": 60,
            "sp-defense": 65,
            "speed": 35
        }
    },
    {
        "name": "Clefable",
        "types": ["FAI"],
        "stats": {
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "sp-attack": 95,
            "sp-defense": 90,
            "speed": 60
        }
    },
    {
        "name": "Vulpix",
        "types": ["FIR"],
        "stats": {
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "sp-attack": 50,
            "sp-defense": 65,
            "speed": 65
        }
    },
    {
        "name": "Ninetales",
        "types": ["FIR"],
        "stats": {
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "sp-attack": 81,
            "sp-defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Jigglypuff",
        "types": ["NOR","FAI"],
        "stats": {
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "sp-attack": 45,
            "sp-defense": 25,
            "speed": 20
        }
    },
    {
        "name": "Wigglytuff",
        "types": ["NOR","FAI"],
        "stats": {
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "sp-attack": 85,
            "sp-defense": 50,
            "speed": 45
        }
    },
    {
        "name": "Zubat",
        "types": ["POI","FLY"],
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "sp-attack": 30,
            "sp-defense": 40,
            "speed": 55
        }
    },
    {
        "name": "Golbat",
        "types": ["POI","FLY"],
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "sp-attack": 65,
            "sp-defense": 75,
            "speed": 90
        }
    },
    {
        "name": "Oddish",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "sp-attack": 75,
            "sp-defense": 65,
            "speed": 30
        }
    },
    {
        "name": "Gloom",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "sp-attack": 85,
            "sp-defense": 75,
            "speed": 40
        }
    },
    {
        "name": "Vileplume",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "sp-attack": 110,
            "sp-defense": 90,
            "speed": 50
        }
    },
    {
        "name": "Paras",
        "types": ["BUG","GRA"],
        "stats": {
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "sp-attack": 45,
            "sp-defense": 55,
            "speed": 25
        }
    },
    {
        "name": "Parasect",
        "types": ["BUG","GRA"],
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "sp-attack": 60,
            "sp-defense": 80,
            "speed": 30
        }
    },
    {
        "name": "Venonat",
        "types": ["BUG","POI"],
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "sp-attack": 40,
            "sp-defense": 55,
            "speed": 45
        }
    },
    {
        "name": "Venomoth",
        "types": ["BUG","POI"],
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "sp-attack": 90,
            "sp-defense": 75,
            "speed": 90
        }
    },
    {
        "name": "Diglett",
        "types": ["GRO"],
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "sp-attack": 35,
            "sp-defense": 45,
            "speed": 95
        }
    },
    {
        "name": "Dugtrio",
        "types": ["GRO"],
        "stats": {
            "hp": 35,
            "attack": 80,
            "defense": 50,
            "sp-attack": 50,
            "sp-defense": 70,
            "speed": 120
        }
    },
    {
        "name": "Meowth",
        "types": ["NOR"],
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "sp-attack": 40,
            "sp-defense": 40,
            "speed": 90
        }
    },
    {
        "name": "Persian",
        "types": ["NOR"],
        "stats": {
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "sp-attack": 65,
            "sp-defense": 65,
            "speed": 115
        }
    },
    {
        "name": "Psyduck",
        "types": ["WAT"],
        "stats": {
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "sp-attack": 65,
            "sp-defense": 50,
            "speed": 55
        }
    },
    {
        "name": "Golduck",
        "types": ["WAT"],
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "sp-attack": 95,
            "sp-defense": 80,
            "speed": 85
        }
    },
    {
        "name": "Mankey",
        "types": ["FIG"],
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "sp-attack": 35,
            "sp-defense": 45,
            "speed": 70
        }
    },
    {
        "name": "Primeape",
        "types": ["FIG"],
        "stats": {
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "sp-attack": 60,
            "sp-defense": 70,
            "speed": 95
        }
    },
    {
        "name": "Growlithe",
        "types": ["FIR"],
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "sp-attack": 70,
            "sp-defense": 50,
            "speed": 60
        }
    },
    {
        "name": "Arcanine",
        "types": ["FIR"],
        "stats": {
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "sp-attack": 100,
            "sp-defense": 80,
            "speed": 95
        }
    },
    {
        "name": "Poliwag",
        "types": ["WAT"],
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "sp-attack": 40,
            "sp-defense": 40,
            "speed": 90
        }
    },
    {
        "name": "Poliwhirl",
        "types": ["WAT"],
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "sp-attack": 50,
            "sp-defense": 50,
            "speed": 90
        }
    },
    {
        "name": "Poliwrath",
        "types": ["WAT","FIG"],
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "sp-attack": 70,
            "sp-defense": 90,
            "speed": 70
        }
    },
    {
        "name": "Abra",
        "types": ["PSY"],
        "stats": {
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "sp-attack": 105,
            "sp-defense": 55,
            "speed": 90
        }
    },
    {
        "name": "Kadabra",
        "types": ["PSY"],
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "sp-attack": 120,
            "sp-defense": 70,
            "speed": 105
        }
    },
    {
        "name": "Alakazam",
        "types": ["PSY"],
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "sp-attack": 135,
            "sp-defense": 95,
            "speed": 120
        }
    },
    {
        "name": "Machop",
        "types": ["FIG"],
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "sp-attack": 35,
            "sp-defense": 35,
            "speed": 35
        }
    },
    {
        "name": "Machoke",
        "types": ["FIG"],
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "sp-attack": 50,
            "sp-defense": 60,
            "speed": 45
        }
    },
    {
        "name": "Machamp",
        "types": ["FIG"],
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "sp-attack": 65,
            "sp-defense": 85,
            "speed": 55
        }
    },
    {
        "name": "Bellsprout",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "sp-attack": 70,
            "sp-defense": 30,
            "speed": 40
        }
    },
    {
        "name": "Weepinbell",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "sp-attack": 85,
            "sp-defense": 45,
            "speed": 55
        }
    },
    {
        "name": "Victreebel",
        "types": ["GRA","POI"],
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "sp-attack": 100,
            "sp-defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Tentacool",
        "types": ["WAT","POI"],
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "sp-attack": 50,
            "sp-defense": 100,
            "speed": 70
        }
    },
    {
        "name": "Tentacruel",
        "types": ["WAT","POI"],
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "sp-attack": 80,
            "sp-defense": 120,
            "speed": 100
        }
    },
    {
        "name": "Geodude",
        "types": ["ROC","GRO"],
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "sp-attack": 30,
            "sp-defense": 30,
            "speed": 20
        }
    },
    {
        "name": "Graveler",
        "types": ["ROC","GRO"],
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "sp-attack": 45,
            "sp-defense": 45,
            "speed": 35
        }
    },
    {
        "name": "Golem",
        "types": ["ROC","GRO"],
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "sp-attack": 55,
            "sp-defense": 65,
            "speed": 45
        }
    },
    {
        "name": "Ponyta",
        "types": ["FIR"],
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "sp-attack": 65,
            "sp-defense": 65,
            "speed": 90
        }
    },
    {
        "name": "Rapidash",
        "types": ["FIR"],
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "sp-attack": 80,
            "sp-defense": 80,
            "speed": 105
        }
    },
    {
        "name": "Slowpoke",
        "types": ["WAT","PSY"],
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "sp-attack": 40,
            "sp-defense": 40,
            "speed": 15
        }
    },
    {
        "name": "Slowbro",
        "types": ["WAT","PSY"],
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "sp-attack": 100,
            "sp-defense": 80,
            "speed": 30
        }
    },
    {
        "name": "Magnemite",
        "types": ["ELE","STE"],
        "stats": {
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "sp-attack": 95,
            "sp-defense": 55,
            "speed": 45
        }
    },
    {
        "name": "Magneton",
        "types": ["ELE","STE"],
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "sp-attack": 120,
            "sp-defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Farfetch'd",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 52,
            "attack": 65,
            "defense": 55,
            "sp-attack": 58,
            "sp-defense": 62,
            "speed": 60
        }
    },
    {
        "name": "Doduo",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "sp-attack": 35,
            "sp-defense": 35,
            "speed": 75
        }
    },
    {
        "name": "Dodrio",
        "types": ["NOR","FLY"],
        "stats": {
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "sp-attack": 60,
            "sp-defense": 60,
            "speed": 100
        }
    },
    {
        "name": "Seel",
        "types": ["WAT"],
        "stats": {
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "sp-attack": 45,
            "sp-defense": 70,
            "speed": 45
        }
    },
    {
        "name": "Dewgong",
        "types": ["WAT","ICE"],
        "stats": {
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "sp-attack": 70,
            "sp-defense": 95,
            "speed": 70
        }
    },
    {
        "name": "Grimer",
        "types": ["POI"],
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "sp-attack": 40,
            "sp-defense": 50,
            "speed": 25
        }
    },
    {
        "name": "Muk",
        "types": ["POI"],
        "stats": {
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "sp-attack": 65,
            "sp-defense": 100,
            "speed": 50
        }
    },
    {
        "name": "Shellder",
        "types": ["WAT"],
        "stats": {
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "sp-attack": 45,
            "sp-defense": 25,
            "speed": 40
        }
    },
    {
        "name": "Cloyster",
        "types": ["WAT","ICE"],
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "sp-attack": 85,
            "sp-defense": 45,
            "speed": 50
        }
    },
    {
        "name": "Gastly",
        "types": ["GHO","POI"],
        "stats": {
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "sp-attack": 100,
            "sp-defense": 35,
            "speed": 80
        }
    },
    {
        "name": "Haunter",
        "types": ["GHO","POI"],
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "sp-attack": 115,
            "sp-defense": 55,
            "speed": 95
        }
    },
    {
        "name": "Gengar",
        "types": ["GHO","POI"],
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "sp-attack": 130,
            "sp-defense": 75,
            "speed": 110
        }
    },
    {
        "name": "Onix",
        "types": ["ROC","GRO"],
        "stats": {
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "sp-attack": 30,
            "sp-defense": 45,
            "speed": 70
        }
    },
    {
        "name": "Drowzee",
        "types": ["PSY"],
        "stats": {
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "sp-attack": 43,
            "sp-defense": 90,
            "speed": 42
        }
    },
    {
        "name": "Hypno",
        "types": ["PSY"],
        "stats": {
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "sp-attack": 73,
            "sp-defense": 115,
            "speed": 67
        }
    },
    {
        "name": "Krabby",
        "types": ["WAT"],
        "stats": {
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "sp-attack": 25,
            "sp-defense": 25,
            "speed": 50
        }
    },
    {
        "name": "Kingler",
        "types": ["WAT"],
        "stats": {
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "sp-attack": 50,
            "sp-defense": 50,
            "speed": 75
        }
    },
    {
        "name": "Voltorb",
        "types": ["ELE"],
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "sp-attack": 55,
            "sp-defense": 55,
            "speed": 100
        }
    },
    {
        "name": "Electrode",
        "types": ["ELE"],
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "sp-attack": 80,
            "sp-defense": 80,
            "speed": 140
        }
    },
    {
        "name": "Exeggcute",
        "types": ["GRA","PSY"],
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "sp-attack": 60,
            "sp-defense": 45,
            "speed": 40
        }
    },
    {
        "name": "Exeggutor",
        "types": ["GRA","PSY"],
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "sp-attack": 125,
            "sp-defense": 65,
            "speed": 55
        }
    },
    {
        "name": "Cubone",
        "types": ["GRO"],
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "sp-attack": 40,
            "sp-defense": 50,
            "speed": 35
        }
    },
    {
        "name": "Marowak",
        "types": ["GRO"],
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "sp-attack": 50,
            "sp-defense": 80,
            "speed": 45
        }
    },
    {
        "name": "Hitmonlee",
        "types": ["FIG"],
        "stats": {
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "sp-attack": 35,
            "sp-defense": 110,
            "speed": 87
        }
    },
    {
        "name": "Hitmonchan",
        "types": ["FIG"],
        "stats": {
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "sp-attack": 35,
            "sp-defense": 110,
            "speed": 76
        }
    },
    {
        "name": "Lickitung",
        "types": ["NOR"],
        "stats": {
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "sp-attack": 60,
            "sp-defense": 75,
            "speed": 30
        }
    },
    {
        "name": "Koffing",
        "types": ["POI"],
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "sp-attack": 60,
            "sp-defense": 45,
            "speed": 35
        }
    },
    {
        "name": "Weezing",
        "types": ["POI"],
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "sp-attack": 85,
            "sp-defense": 70,
            "speed": 60
        }
    },
    {
        "name": "Rhyhorn",
        "types": ["GRO","ROC"],
        "stats": {
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "sp-attack": 30,
            "sp-defense": 30,
            "speed": 25
        }
    },
    {
        "name": "Rhydon",
        "types": ["GRO","ROC"],
        "stats": {
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "sp-attack": 45,
            "sp-defense": 45,
            "speed": 40
        }
    },
    {
        "name": "Chansey",
        "types": ["NOR"],
        "stats": {
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "sp-attack": 35,
            "sp-defense": 105,
            "speed": 50
        }
    },
    {
        "name": "Tangela",
        "types": ["GRA"],
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "sp-attack": 100,
            "sp-defense": 40,
            "speed": 60
        }
    },
    {
        "name": "Kangaskhan",
        "types": ["NOR"],
        "stats": {
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "sp-attack": 40,
            "sp-defense": 80,
            "speed": 90
        }
    },
    {
        "name": "Horsea",
        "types": ["WAT"],
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "sp-attack": 70,
            "sp-defense": 25,
            "speed": 60
        }
    },
    {
        "name": "Seadra",
        "types": ["WAT"],
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "sp-attack": 95,
            "sp-defense": 45,
            "speed": 85
        }
    },
    {
        "name": "Goldeen",
        "types": ["WAT"],
        "stats": {
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "sp-attack": 35,
            "sp-defense": 50,
            "speed": 63
        }
    },
    {
        "name": "Seaking",
        "types": ["WAT"],
        "stats": {
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "sp-attack": 65,
            "sp-defense": 80,
            "speed": 68
        }
    },
    {
        "name": "Staryu",
        "types": ["WAT"],
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "sp-attack": 70,
            "sp-defense": 55,
            "speed": 85
        }
    },
    {
        "name": "Starmie",
        "types": ["WAT","PSY"],
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "sp-attack": 100,
            "sp-defense": 85,
            "speed": 115
        }
    },
    {
        "name": "Mr. Mime",
        "types": ["PSY","FAI"],
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "sp-attack": 100,
            "sp-defense": 120,
            "speed": 90
        }
    },
    {
        "name": "Scyther",
        "types": ["BUG","FLY"],
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "sp-attack": 55,
            "sp-defense": 80,
            "speed": 105
        }
    },
    {
        "name": "Jynx",
        "types": ["ICE","PSY"],
        "stats": {
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "sp-attack": 115,
            "sp-defense": 95,
            "speed": 95
        }
    },
    {
        "name": "Electabuzz",
        "types": ["ELE"],
        "stats": {
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "sp-attack": 95,
            "sp-defense": 85,
            "speed": 105
        }
    },
    {
        "name": "Magmar",
        "types": ["FIR"],
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "sp-attack": 100,
            "sp-defense": 85,
            "speed": 93
        }
    },
    {
        "name": "Pinsir",
        "types": ["BUG"],
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "sp-attack": 55,
            "sp-defense": 70,
            "speed": 85
        }
    },
    {
        "name": "Tauros",
        "types": ["NOR"],
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "sp-attack": 40,
            "sp-defense": 70,
            "speed": 110
        }
    },
    {
        "name": "Magikarp",
        "types": ["WAT"],
        "stats": {
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "sp-attack": 15,
            "sp-defense": 20,
            "speed": 80
        }
    },
    {
        "name": "Gyarados",
        "types": ["WAT","FLY"],
        "stats": {
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "sp-attack": 60,
            "sp-defense": 100,
            "speed": 81
        }
    },
    {
        "name": "Lapras",
        "types": ["WAT","ICE"],
        "stats": {
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "sp-attack": 85,
            "sp-defense": 95,
            "speed": 60
        }
    },
    {
        "name": "Ditto",
        "types": ["NOR"],
        "stats": {
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "sp-attack": 48,
            "sp-defense": 48,
            "speed": 48
        }
    },
    {
        "name": "Eevee",
        "types": ["NOR"],
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "sp-attack": 45,
            "sp-defense": 65,
            "speed": 55
        }
    },
    {
        "name": "Vaporeon",
        "types": ["WAT"],
        "stats": {
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "sp-attack": 110,
            "sp-defense": 95,
            "speed": 65
        }
    },
    {
        "name": "Jolteon",
        "types": ["ELE"],
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "sp-attack": 110,
            "sp-defense": 95,
            "speed": 130
        }
    },
    {
        "name": "Flareon",
        "types": ["FIR"],
        "stats": {
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "sp-attack": 95,
            "sp-defense": 110,
            "speed": 65
        }
    },
    {
        "name": "Porygon",
        "types": ["NOR"],
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "sp-attack": 85,
            "sp-defense": 75,
            "speed": 40
        }
    },
    {
        "name": "Omanyte",
        "types": ["ROC","WAT"],
        "stats": {
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "sp-attack": 90,
            "sp-defense": 55,
            "speed": 35
        }
    },
    {
        "name": "Omastar",
        "types": ["ROC","WAT"],
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "sp-attack": 115,
            "sp-defense": 70,
            "speed": 55
        }
    },
    {
        "name": "Kabuto",
        "types": ["ROC","WAT"],
        "stats": {
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "sp-attack": 55,
            "sp-defense": 45,
            "speed": 55
        }
    },
    {
        "name": "Kabutops",
        "types": ["ROC","WAT"],
        "stats": {
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "sp-attack": 65,
            "sp-defense": 70,
            "speed": 80
        }
    },
    {
        "name": "Aerodactyl",
        "types": ["ROC","FLY"],
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "sp-attack": 60,
            "sp-defense": 75,
            "speed": 130
        }
    },
    {
        "name": "Snorlax",
        "types": ["NOR"],
        "stats": {
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "sp-attack": 65,
            "sp-defense": 110,
            "speed": 30
        }
    },
    {
        "name": "Articuno",
        "types": ["ICE","FLY"],
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "sp-attack": 95,
            "sp-defense": 125,
            "speed": 85
        }
    },
    {
        "name": "Zapdos",
        "types": ["ELE","FLY"],
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "sp-attack": 125,
            "sp-defense": 90,
            "speed": 100
        }
    },
    {
        "name": "Moltres",
        "types": ["FIR","FLY"],
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "sp-attack": 125,
            "sp-defense": 85,
            "speed": 90
        }
    },
    {
        "name": "Dratini",
        "types": ["DRA"],
        "stats": {
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "sp-attack": 50,
            "sp-defense": 50,
            "speed": 50
        }
    },
    {
        "name": "Dragonair",
        "types": ["DRA"],
        "stats": {
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "sp-attack": 70,
            "sp-defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Dragonite",
        "types": ["DRA","FLY"],
        "stats": {
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "sp-attack": 100,
            "sp-defense": 100,
            "speed": 80
        }
    },
    {
        "name": "Mewtwo",
        "types": ["PSY"],
        "stats": {
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "sp-attack": 154,
            "sp-defense": 90,
            "speed": 130
        }
    },
    {
        "name": "Mew",
        "types": ["PSY"],
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "sp-attack": 100,
            "sp-defense": 100,
            "speed": 100
        }
    }
]

export interface PokemonTypes {
    [key: string]: string
}

export const allKantoPokemonTypes: PokemonTypes = {
    "BUG": "Bug",
    "DRA": "Dragon",
    "ELE": "Electric",
    "FAI": "Fairy",
    "FIG": "Fighting",
    "FIR": "Fire",
    "FLY": "Flying",
    "GHO": "Ghost",
    "GRA": "Grass",
    "GRO": "Ground",
    "ICE": "Ice",
    "NOR": "Normal",
    "POI": "Poison",
    "PSY": "Psychic",
    "ROC": "Rock",
    "STE": "Steel",
    "WAT": "Water"
}
