<template>
    <h1>Pokemon Top Trumps</h1>
    <Welcome
        :number-of-players="numberOfPlayers"
        :update-number-of-players="updateNumberOfPlayers"
    />
    <Board
        v-if="numberOfPlayers"
        :number-of-players="numberOfPlayers"
    />
</template>

<script lang='ts'>
import {
    defineComponent,
    ref
} from 'vue'

import Board from './Board.vue'
import Welcome from './Welcome.vue'

export default defineComponent({
    components: {
        Board,
        Welcome
    },
    setup() {
        const numberOfPlayers = ref<number | null>(null)

        const updateNumberOfPlayers = (amount: number): void => {
            numberOfPlayers.value = amount
        }

        return {
            numberOfPlayers,
            updateNumberOfPlayers
        }
    }
})
</script>
