<script>
import CharacterCard from './CharacterCard.vue';

export default {
  components: {
    CharacterCard
  },
  props: {
    Characters: Array
  }
}
</script>

<template lang="">
  <div class="container">
    <div v-for="(item, index) in store.charactersList" :key="index" :character="item"></div>
  </div>
</template>

<style lang="">
  
</style>