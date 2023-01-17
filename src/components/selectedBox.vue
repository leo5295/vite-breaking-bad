<template>
    <select v-model="selectedOption" @change="changeArchetype">
        <option v-for="archetype in archetypes" :value="archetype">{{ archetype }}</option>
    </select>
</template>

<script>

export default {
    data() {
        return {
            selectedOption: 'Alien',
            archetypes: [
                'Alien',
                'Dark Magician',
                'Blue-Eyes',
                'Prank-Kids'
            ]
        }
    },
    methods: {
        changeArchetype() {
            this.$emit('changeArchetype', this.selectedOption)
        }
    }
}
</script>
