<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import SelectBox from './components/selectedBox.vue';


export default {
  components: {
    AppHeader, CharactersList, SelectBox
  },
  data() {
    return {
      CharactersList: [],
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
      selectedArchetype: 'Alien'
    }
  },
  created() {
    this.getCharacters();
    this.getArchetypes();

  },
  methods: {
    getCharacters() {
      axios.get(this.url).then((response) => {
        this.CharactersList = response.data.data;
      })
    },
    getArchetypes() {
      axios.get(`https://db.ygoprodeck.com/api/v7/archetypes.php`).then((response) => {
        this.archetypes = response.data.data;
      });
    }
  }
}

</script>
 
<template>
  <div>
    <AppHeader message="yugioh" />
    <div>
      <select v-model="selectedArchetype" @change="changeArchetype">
        <option value="Alien">Alien</option>
        <option value="Dark Magician">Dark Magician</option>
        <option value="Elemental HERO">Elemental HERO</option>
        <option value="Gravekeeper's">Gravekeeper's</option>
      </select>
    </div>
  </div>
  <CharactersList :Characters="CharactersList" />
</template>
 
<style lang="scss" scoped>
@use './assets/styles/generals.scss';
</style>