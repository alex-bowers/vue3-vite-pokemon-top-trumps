<template>
    <div class="pokemon-card">
        <h4 class="pokemon-card--title">{{ pokemon.name }}</h4>

        <div
            v-for="(stat, index) in pokemon.stats"
            :key="index"
            @click="selectStat(index)"
            :class="{ 'pokemon-card--is-selectable': isActivePlayer }"
            class="pokemon-card--stats-row"
        >
            <span>{{ index }}</span>
            <span>{{ stat }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
            type: Object
        }
    },
    setup (props) {
        const selectStat = (index) => {
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
