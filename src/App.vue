<template>
  <div>
    <AppHeader message="yugioh" />
    <div>
      <SelectBox @changeArchetype="changeArchetype" />
    </div>
  </div>
  <div>
    <CharactersList :Characters="CharactersList" />
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import SelectBox from './components/selectedBox.vue';
import { store } from './store.js'


export default {
  components: {
    AppHeader, CharactersList, SelectBox
  },
  data() {
    return {
      CharactersList: [],
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
    }
  },
  created() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.selectedArchetype}`).then((response) => {
        this.CharactersList = response.data.data;
      });
    },
    changeArchetype(archetype) {
      store.selectedArchetype = archetype;
      this.getCharacters();
    }
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/generals.scss';
</style>