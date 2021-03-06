import { ref } from 'vue'

import { allKantoPokemon } from '../assets/pokemon'
import { Pokemon } from '../types'

export const useShuffleDeck = (numberOfPlayers: number) => {
    const chunkedDex: any[] = []
    const chunkSize: number = Math.floor(allKantoPokemon.length / numberOfPlayers)
    const randomDex: Pokemon[] = allKantoPokemon.sort(() => Math.random() - 0.5)
    const splitDeck = ref<Pokemon[]>([])
    const totalNumberOfPokemon = ref<number>(0)

    totalNumberOfPokemon.value = chunkSize * numberOfPlayers

    while (randomDex.length) {
        chunkedDex.push(randomDex.splice(0, chunkSize))
    }

    // Check that the last chunk is the correct size..
    // Check that the total number of chunks equal the number of players.
    const lastChunk = chunkedDex[chunkedDex.length - 1]
    if (
        lastChunk
        && lastChunk.length !== chunkSize
        || chunkedDex.length > numberOfPlayers
    ) {
        chunkedDex.pop()
    }

    splitDeck.value = chunkedDex

    return {
        splitDeck,
        totalNumberOfPokemon
    }
}
