<template>
    <div>
        <p>Number of Players: {{ numberOfPlayers }}</p>
        <div v-if="numberOfCardsInTheMiddle">
            Number of cards in the pot: {{ numberOfCardsInTheMiddle }}
        </div>
        <div v-for="(deck, index) in splitDeck" :key="index">
            <div class="game-container">
                <ComputerDeck
                    v-if="index !== 0"
                    :active-player="activePlayer"
                    :check-cards="checkCards"
                    :deck="deck"
                    :player-index="index"
                    :total-number-of-pokemon="totalNumberOfPokemon"
                />
                <PlayerDeck
                    v-else
                    :active-player="activePlayer"
                    :check-cards="checkCards"
                    :deck="deck"
                    :player-index="index"
                    :total-number-of-pokemon="totalNumberOfPokemon"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    onMounted,
    ref
} from 'vue';

import ComputerDeck from "./ComputerDeck.vue";
import PlayerDeck from "./PlayerDeck.vue";
import { allKantoPokemon } from '../assets/pokemon';

export default defineComponent({
    components: {
        ComputerDeck,
        PlayerDeck
    },
    props: {
        numberOfPlayers: {
            type: Number
        }
    },
    setup (props) {
        const activePlayer = ref(0)
        const cardsInTheMiddle = ref([])
        const splitDeck = ref([])
        const totalNumberOfPokemon = ref(0)

        const shuffleDeck = () => {
            const chunkedDex = []
            const chunkSize: number = Math.floor(allKantoPokemon.length / props.numberOfPlayers)
            const randomDex = allKantoPokemon.sort(() => Math.random() - 0.5)

            totalNumberOfPokemon.value = chunkSize * props.numberOfPlayers

            while (randomDex.length) {
                chunkedDex.push(randomDex.splice(0, chunkSize))
            }

            if (chunkedDex[chunkedDex.length - 1].length !== chunkSize) {
                chunkedDex.pop()
            }

            splitDeck.value = chunkedDex
        }

        onMounted(shuffleDeck)

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
            const currentPlayersCard = currentTopCards.value[currentPlayer]
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
            numberOfCardsInTheMiddle,
            splitDeck,
            totalNumberOfPokemon
        }
    }
})
</script>

<style lang="css" scoped>
.game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
