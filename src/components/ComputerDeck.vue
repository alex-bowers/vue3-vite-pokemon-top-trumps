<template>
    <div>
        <h3>CPU {{ playerIndex }}<small v-if="isActivePlayer"> - Active Player</small></h3>
        Number of cards left: {{ numberOfCardsLeft }}
    </div>
    <div
        v-if="isActivePlayer && currentCard"
        class="computer-card"
    >
        CPU {{ playerIndex }} has a <strong>{{ currentCard.name }}</strong> and will select <strong>{{ strongestStatOnCurrentCard }}</strong>
    </div>
</template>

<script lang="ts">
import {
    computed,
    defineComponent,
    watch
} from 'vue'

export default defineComponent({
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
        const currentCard = computed(() => props.deck[0])
        const currentCardStats = computed(() => currentCard.value.stats)
        const isActivePlayer = computed(() => props.activePlayer === props.playerIndex)
        const numberOfCardsLeft = computed(() => props.deck.length)

        const strongestStatOnCurrentCard = computed(() => {
            let bestStat = Object.keys(currentCardStats.value)[0]
            for (const stat in currentCardStats.value) {
                if (currentCardStats.value[stat] > currentCardStats.value[bestStat]) {
                    bestStat = stat
                }
            }

            return bestStat
        })

        watch(currentCard, (value, oldValue) => {
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

        return {
            isActivePlayer,
            currentCard,
            numberOfCardsLeft,
            strongestStatOnCurrentCard
        }
    }
})
</script>
