import { ref } from 'vue';

import { allKantoPokemon } from '../assets/pokemon';

export const useShuffleDeck = (numberOfPlayers) => {
    const chunkedDex = []
    const chunkSize: number = Math.floor(allKantoPokemon.length / numberOfPlayers)
    const randomDex = allKantoPokemon.sort(() => Math.random() - 0.5)
    const splitDeck = ref([])
    const totalNumberOfPokemon = ref(0)

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
