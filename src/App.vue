<template>
    <Game />
</template>

<script>
import { defineComponent } from 'vue'
import Game from './components/Game.vue'

export default defineComponent({
    name: 'App',
    components: {
        Game
    }
})
</script>
