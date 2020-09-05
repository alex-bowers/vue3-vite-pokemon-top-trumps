<template>
    <div>
        <p>
            Number of Players: <strong>{{ numberOfPlayers }}</strong>
        </p>
        <p v-if="props.chosenGymType">
            You are playing in the <strong>{{ gymName }}</strong> type gym
        </p>
        <p v-if="numberOfCardsInTheMiddle">
            Number of cards in the pot: {{ numberOfCardsInTheMiddle }}
        </p>
        <div v-for="(deck, index) in splitDeck" :key="index">
            <div class="game-container">
                <ComputerDeck
                    v-if="index !== 0"
                    :active-player="activePlayer"
                    :check-cards="checkCards"
                    :deck="deck"
                    :player-index="index"
                    :total-number-of-pokemon="totalNumberOfPokemon"
                />
                <PlayerDeck
                    v-else
                    :active-player="activePlayer"
                    :check-cards="checkCards"
                    :deck="deck"
                    :player-index="index"
                    :total-number-of-pokemon="totalNumberOfPokemon"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
  computed,
    defineComponent,
    ref
} from 'vue';

import ComputerDeck from "./ComputerDeck.vue";
import PlayerDeck from "./PlayerDeck.vue";
import {
    allKantoPokemon,
    allKantoPokemonTypes
} from '../assets/pokemon';
import { useShuffleDeck } from "../composables/useShuffle";
import { useCheckCards } from "../composables/useCheckCards";

export default defineComponent({
    components: {
        ComputerDeck,
        PlayerDeck
    },
    props: {
        chosenGymType: {
            type: String
        },
        numberOfPlayers: {
            type: Number
        }
    },
    setup (props) {
        const { splitDeck, totalNumberOfPokemon } = useShuffleDeck(props.numberOfPlayers)
        const { activePlayer, checkCards, numberOfCardsInTheMiddle } = useCheckCards(splitDeck);

        const gymName = computed(() => allKantoPokemonTypes[props.chosenGymType])

        return {
            activePlayer,
            checkCards,
            props,
            gymName,
            numberOfCardsInTheMiddle,
            splitDeck,
            totalNumberOfPokemon
        }
    }
})
</script>

<style lang="css" scoped>
.game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
