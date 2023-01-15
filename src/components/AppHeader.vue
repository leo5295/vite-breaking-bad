<script>

export default {
  props: {
    message: String
  }
}
</script>

<template lang="">
  <header class="container">
    <h1 class="app-title">{{message}}</h1>
    
  </header>
  <main>
    <CharactersList :Characters="CharactersList"/>
  </main>
</template>

<style lang="">
  
</style>