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

    if (chunkedDex[chunkedDex.length - 1].length !== chunkSize) {
        chunkedDex.pop()
    }

    splitDeck.value = chunkedDex

    return {
        splitDeck,
        totalNumberOfPokemon
    }
}
