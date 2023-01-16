<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';


export default {
  components: {
    AppHeader, CharactersList
  },
  data() {
    return {
      CharactersList: [],
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien'
    }
  },
  created() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      axios.get(this.url).then((response) => {
        this.CharactersList = response.data.data;
        console.log(response.data.data)
      })

    }

  }

}
</script>

<template lang="">
  <div>
    <AppHeader message="yugioh" />
    <CharactersList />
  </div>
</template>

<style lang="scss" scoped>
@use './assets/styles/generals.scss';
</style>
