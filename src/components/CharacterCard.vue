<script>

export default {
  props: {
    character: Object
  }
}
</script>

<template lang="" class="mela">
  <div>
    {{character.name}}
  </div>
  <div>
    <img :src="character.card_images[0].image_url" alt="">
  </div>
</template>

<style lang="">

</style>