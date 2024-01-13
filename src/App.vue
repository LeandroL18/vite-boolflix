<script>
import axios from 'axios'

import AppSearch from './components/AppSearch.vue'
import CardList from './components/CardList.vue'

import {store} from './store'

export default{
  components:{
    AppSearch,
    CardList,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getFilm(){
      axios.get(`${store.apiURLfilm}?api_key=${store.apiKey}&query=${store.query}`)
      
      .then((res) => {
        store.films = res.data.results;
        console.log(store.films);
      })

      .catch((err) => {
        console.log("Errori = ",err);
      })
    },

    getSerieTV(){
      axios.get(`${store.apiURLserie}?api_key=${store.apiKey}&query=${store.query}`)
      
      .then((res) => {
        store.serieTV = res.data.results;
        console.log(store.serieTV);
      })

      .catch((err) => {
        console.log("Errori = ",err);
      })
    }
  },
  created(){
    this.getFilm();
    this.getSerieTV();
  }
}
</script>

<template>
  <main>
    <AppSearch @filtro="getFilm" @filter="getSerieTV" />
    <CardList/>
  </main>
</template>

<style lang="scss">
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>
