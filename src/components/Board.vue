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
import { defineComponent } from 'vue'

import ComputerDeck from "./ComputerDeck.vue"
import PlayerDeck from "./PlayerDeck.vue"
import { useShuffleDeck } from "../composables/useShuffle"
import { useCheckCards } from "../composables/useCheckCards"

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
        const { splitDeck, totalNumberOfPokemon } = useShuffleDeck(props.numberOfPlayers)
        const { activePlayer, checkCards, numberOfCardsInTheMiddle } = useCheckCards(splitDeck)

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
