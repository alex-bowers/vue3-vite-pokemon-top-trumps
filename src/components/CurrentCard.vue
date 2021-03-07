<template>
    <div class="pokemon-card">
        <h4 class="pokemon-card--title">{{ pokemon.name }}</h4>

        <div
            v-for="(stat, moveType) in pokemon.stats"
            :key="moveType"
            :class="{ 'pokemon-card--is-selectable': isActivePlayer }"
            @click="selectStat(moveType)"
            class="pokemon-card--stats-row"
        >
            <span>{{ moveType }}</span>
            <span>{{ stat }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { Pokemon } from "../types";

export default defineComponent({
    props: {
        isActivePlayer: {
            type: Boolean
        },
        checkCards: {
            type: Function
        },
        playerIndex: {
            type: Number
        },
        pokemon: {
            type: Object as PropType<Pokemon>
        }
    },
    setup (props) {
        const selectStat = (index: number): boolean | void => {
            if (!props.isActivePlayer) return false

            props.checkCards(props.playerIndex, index)
        }

        return {
            selectStat
        }
    }
})
</script>

<style lang="css" scoped>
.pokemon-card {
    border: 10px yellow solid;
    border-radius: 5px;
    padding: 16px;
}
.pokemon-card--title {
    margin-top: 0;
}
.pokemon-card--stats-row {
    display: flex;
    justify-content: space-between;
}
.pokemon-card--is-selectable:hover {
    cursor: pointer;
    background-color: lightgray;
}
</style>
