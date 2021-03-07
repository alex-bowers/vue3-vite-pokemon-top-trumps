<template>
    <div class="stats-container">
        <h3>{{ playerHeader }}</h3>
        Number of cards left: {{ numberOfCardsLeft }}

        <p v-if="isActivePlayer && !isWinner">It's your turn.</p>

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
    PropType
} from 'vue'

import { Pokemon } from "../types"

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
            type: Array as PropType<Pokemon[]>
        },
        playerIndex: {
            type: Number
        },
        totalNumberOfPokemon: {
            type: Number
        }
    },
    setup (props) {
        const currentCard = computed<Pokemon>(() => props.deck[0])
        const isActivePlayer = computed<boolean>(() => props.activePlayer === props.playerIndex)
        const numberOfCardsLeft = computed<number>(() => props.deck.length)
        const isWinner = computed<boolean>(() => numberOfCardsLeft.value === props.totalNumberOfPokemon)
        const playerHeader = computed<string>(() => isWinner.value ? 'You are the winner!' : 'Your cards')

        return {
            currentCard,
            isActivePlayer,
            isWinner,
            numberOfCardsLeft,
            playerHeader
        }
    }
})
</script>

<style lang="css" scoped>
.stats-container {
    width: 300px;
}
</style>
