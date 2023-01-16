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
    <CharacterCard />
  </div>
</template>

<style lang="">
  
</style>