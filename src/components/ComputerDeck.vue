<template>
    <div>
        <h3>CPU {{ playerIndex }}<small v-if="statusMessage">{{ statusMessage }}</small></h3>
        Number of cards left: {{ numberOfCardsLeft }}
    </div>
    <div
        v-if="isActivePlayer && !isWinner && currentCard"
        class="computer-card"
    >
        CPU {{ playerIndex }} has a <strong>{{ currentCard.name }}</strong> and will select <strong>{{ strongestStatOnCurrentCard }}</strong>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    nextTick,
    PropType,
    watch
} from 'vue'

import { Pokemon, PokemonStats } from '../types'

export default defineComponent({
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
        const isActivePlayer = computed<boolean>(() => props.activePlayer === props.playerIndex)
        const currentCard = computed<Pokemon>(() => props.deck[0])
        const currentCardStats = computed<PokemonStats>(() => {
            if (currentCard && currentCard.value) {
                return currentCard.value.stats
            }

            return null
        })
        const numberOfCardsLeft = computed<number>(() => props.deck.length)
        const isWinner = computed<boolean>(() => numberOfCardsLeft.value === props.totalNumberOfPokemon)
        const statusMessage = computed<string>(() => {
            return isWinner.value ?
                ' is the winner!' :
                isActivePlayer.value ?
                    ' - Active Player' :
                    null
        })
        const strongestStatOnCurrentCard = computed<string>(() => {
            if (currentCard && currentCard.value) {
                let bestStat = Object.keys(currentCardStats.value)[0]
                for (const stat in currentCardStats.value) {
                    if (currentCardStats.value[stat] > currentCardStats.value[bestStat]) {
                        bestStat = stat
                    }
                }

                return bestStat
            }

            return null
        })

        watch(currentCard, (value) => {
            nextTick(() => {
                if (
                    isActivePlayer.value
                    && value
                    && (props.totalNumberOfPokemon !== numberOfCardsLeft.value)
                ) {
                    setTimeout(() => {
                        props.checkCards(props.playerIndex, strongestStatOnCurrentCard.value)
                    }, 3000)
                }
            })
        })

        return {
            currentCard,
            isActivePlayer,
            isWinner,
            numberOfCardsLeft,
            statusMessage,
            strongestStatOnCurrentCard
        }
    }
})
</script>
