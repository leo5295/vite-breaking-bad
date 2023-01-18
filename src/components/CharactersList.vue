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
 
<template>
  <div class="container">
    <CharacterCard v-for="(item, index) in Characters" :key="index" :character="item"></CharacterCard>
  </div>
</template>
 
<style lang="scss" scoped>

</style>