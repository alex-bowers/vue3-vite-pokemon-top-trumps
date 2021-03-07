import {
    computed,
    ref
} from 'vue'

import { Pokemon } from '../assets/pokemon'

export const useCheckCards = (splitDeck) => {
    const activePlayer = ref<number>(0)
    const cardsInTheMiddle = ref<Pokemon[]>([])

    const currentTopCards = computed(() => {
        const topCards: Pokemon[] = []

        if (splitDeck.value.length) {
            for (let i = 0; i < splitDeck.value.length; i++) {
                const topOfTheDeck: Pokemon = splitDeck.value[i][0] || null
                topCards.push(topOfTheDeck)
            }
        }

        return topCards
    })
    const numberOfCardsInTheMiddle = computed<number>(() => cardsInTheMiddle.value.length)

    const addCardsToWinner = (winner: number): void => {
        for (let i = 0; i < currentTopCards.value.length; i++) {
            if (currentTopCards.value[i]) {
                splitDeck.value[winner].push(currentTopCards.value[i])
            }
        }

        if (numberOfCardsInTheMiddle) {
            for (let i = 0; i < cardsInTheMiddle.value.length; i++) {
                if (cardsInTheMiddle.value[i]) {
                    splitDeck.value[winner].push(cardsInTheMiddle.value[i])
                }
            }

            cardsInTheMiddle.value = []
        }
    }

    const addCardsToTheMiddle = (): void => {
        for (let i = 0; i < currentTopCards.value.length; i++) {
            cardsInTheMiddle.value.push(currentTopCards.value[i])
        }
    }

    const removePreviousTopCards = (): void => {
        for (let i = 0; i < splitDeck.value.length; i++) {
            splitDeck.value[i].shift()
        }
    }

    const checkCards = async (currentPlayer: number, stat: string): Promise<void> => {
        const allStatValues = ref([])
        const largestStatNumber = ref<number>(0)
        const userWithWinningCard = ref<number>(currentPlayer)

        for (let i = 0; i < currentTopCards.value.length; i++) {
            const card: Pokemon = currentTopCards.value[i]
            if (card) {
                const cardStat: number = card.stats[stat]

                allStatValues.value.push(cardStat)
                if (cardStat > largestStatNumber.value) {
                    largestStatNumber.value = cardStat
                    userWithWinningCard.value = i
                }
            }
        }

        const largestDuplicateCount: number = allStatValues.value.reduce((n, val) => {
            return n + (val === largestStatNumber)
        }, 0)

        if (largestDuplicateCount === 0) {
            await addCardsToWinner(userWithWinningCard.value)

            activePlayer.value = userWithWinningCard.value
        } else {
            await addCardsToTheMiddle()
        }
        await removePreviousTopCards()
    }

    return {
        activePlayer,
        checkCards,
        numberOfCardsInTheMiddle
    }
}
