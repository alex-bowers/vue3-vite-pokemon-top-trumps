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
    ref,
    Ref
} from 'vue'

import Board from './Board.vue'
import Welcome from './Welcome.vue'

export default defineComponent({
    components: {
        Board,
        Welcome
    },
    setup() {
        const numberOfPlayers: Ref<(number | null)[]> = ref(null)

        const updateNumberOfPlayers = (amount) => {
            numberOfPlayers.value = amount
        }

        return {
            numberOfPlayers,
            updateNumberOfPlayers
        }
    }
})
</script>
