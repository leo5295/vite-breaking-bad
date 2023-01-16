<script>

export default {
  props: {
    message: String
  }
}
</script>

<template lang="">
  <header class="container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="" class="yugioh">
    <h1 class="app-title">{{message}}</h1>
  </header>
  <main>
    <CharactersList :Characters="CharactersList"/>
  </main>
</template>

<style lang="scss">
.yugioh {
  height: 50px;
}
</style>