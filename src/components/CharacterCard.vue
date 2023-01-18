<script>

export default {
  props: {
    character: Object
  }
}
</script>

<template lang="">
  <div class="bg">
    <div class="name">
      {{character.name}}
    </div>
    <div class="card">
      <img :src="character.card_images[0].image_url" alt="" class="card">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/generals.scss';

.bg {
  background-color: orange;
}

.name {
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 80px;
}
</style>
