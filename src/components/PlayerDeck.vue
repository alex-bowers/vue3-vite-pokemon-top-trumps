<template>
    <div class="stats-container">
        <h3>Your Cards</h3>
        Number of cards left: {{ numberOfCardsLeft }}

        <CurrentCard
            v-if="deck.length"
            :check-cards="checkCards"
            :is-active-player="isActivePlayer"
            :player-index="playerIndex"
            :pokemon="currentCard"
        />
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    reactive
} from 'vue'

import CurrentCard from "./CurrentCard.vue"

export default defineComponent({
    components: {
        CurrentCard
    },
    props: {
        activePlayer: {
            type: Number
        },
        checkCards: {
            type: Function
        },
        deck: {
            type: Array
        },
        playerIndex: {
            type: Number
        },
        totalNumberOfPokemon: {
            type: Number
        }
    },
    setup (props) {
        const currentCard: object = computed(() => props.deck[0])
        const isActivePlayer = computed(() => props.activePlayer === props.playerIndex)
        const numberOfCardsLeft = computed(() => props.deck.length)

        return {
            isActivePlayer,
            currentCard,
            numberOfCardsLeft
        }
    }
})
</script>

<style lang="css" scoped>
.stats-container {
    width: 300px;
}
</style>
