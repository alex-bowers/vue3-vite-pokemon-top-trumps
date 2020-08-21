import {
    computed,
    ref
} from 'vue';

export const useCheckCards = (splitDeck) => {
    const activePlayer = ref(0)
    const cardsInTheMiddle = ref([])

    const currentTopCards = computed(() => {
        const topCards = []

        if (splitDeck.value.length) {
            for (let i = 0; i < splitDeck.value.length; i++) {
                const topOfTheDeck = splitDeck.value[i][0] || null;
                topCards.push(topOfTheDeck)
            }
        }

        return topCards
    })
    const numberOfCardsInTheMiddle = computed(() => cardsInTheMiddle.value.length)

    const addCardsToWinner = (winner) => {
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

    const addCardsToTheMiddle = () => {
        for (let i = 0; i < currentTopCards.value.length; i++) {
            cardsInTheMiddle.value.push(currentTopCards.value[i])
        }
    }

    const removePreviousTopCards = () => {
        for (let i = 0; i < splitDeck.value.length; i++) {
            splitDeck.value[i].shift();
        }
    }

    const checkCards = async (currentPlayer, stat) => {
        const allStatValues = ref([])
        const largestStatNumber = ref(0)
        const userWithWinningCard = ref(currentPlayer)

        for (let i = 0; i < currentTopCards.value.length; i++) {
            const card = currentTopCards.value[i]
            if (card) {
                const cardStat = card.stats[stat]

                allStatValues.value.push(cardStat)
                if (cardStat > largestStatNumber.value) {
                    largestStatNumber.value = cardStat
                    userWithWinningCard.value = i;
                }
            }
        }

        const largestDuplicateCount = allStatValues.value.reduce(function(n, val) {
            return n + (val === largestStatNumber);
        }, 0);

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
