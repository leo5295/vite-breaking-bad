import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    CharacterList: []
});