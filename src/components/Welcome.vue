<template>
    <div v-if="!numberOfPlayers">
        <form>
            <div>
                <label for="players">How many players?</label>
                <input
                    id="players"
                    min="2"
                    type="number"
                    v-model="newNumberOfPlayers"
                >
            </div>
            <div>
                <label for="useTypes"> Do you want to use type advantage?</label>
                <input
                    class="welcome--types-condition"
                    id="useTypes"
                    max="1"
                    min="0"
                    type="range"
                    v-model="shouldUseTypes"
                >
            </div>
            <div v-if="shouldUseTypes === '1'">
                <label for="types">Which type?</label>
                <select id="types" v-model="newChosenGymType">
                    <option
                        v-for="(label, short) in allKantoPokemonTypes"
                        :key="short"
                        :value="short"
                    >{{ label }}</option>
                </select>
            </div>
            <button @click.prevent="updateNumberOfPlayers(newNumberOfPlayers, newChosenGymType)">Submit</button>
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

import { allKantoPokemonTypes } from "../assets/pokemon";

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
        const newChosenGymType = ref<string>(null)
        const newNumberOfPlayers = ref<number>(2)
        const shouldUseTypes = ref<string>("0")
        const reload = (): void => window.location.reload()

        return {
            allKantoPokemonTypes,
            newChosenGymType,
            newNumberOfPlayers,
            reload,
            shouldUseTypes
        }
    }
})
</script>

<style scoped>
.welcome--types-condition {
    width: 30px;
}
</style>
