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
    getCards(){
      axios.get(`${store.apiURL}?api_key=${store.apiKey}&query=${store.query}`)
      
      .then((res) => {
        console.log(res.data.results);
        store.cardlistArray = res.data.results;
      })

      .catch((err) => {
        console.log("Errori = ",err);
      })
    }
  },
  created(){
    this.getCards();
  }
}
</script>

<template>
  <main>
    <AppSearch @filtro="getCards"/>
    <CardList/>
  </main>
</template>

<style lang="scss">
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>
