<template>
    <div v-if="!numberOfPlayers">
        <h2>How many players?</h2>
        <form>
            <input type="number" min="2" v-model="newNumberOfPlayers">
            <button @click.prevent="updateNumberOfPlayers(newNumberOfPlayers)">Submit</button>
        </form>
    </div>
    <div v-else>
        <button @click="reload()">Reset game</button>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref
} from 'vue'

export default defineComponent({
    props: {
        numberOfPlayers: {
            type: Number
        },
        updateNumberOfPlayers: {
            type: Function
        }
    },
    setup () {
        const newNumberOfPlayers = ref<number>(2)
        const reload = (): void => window.location.reload()

        return {
            newNumberOfPlayers,
            reload
        }
    }
})
</script>
