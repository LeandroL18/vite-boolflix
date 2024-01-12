<script>
  import axios from 'axios'

  import AppHeader from './components/AppHeader.vue'
  import AppSearch from './components/AppSearch.vue'
  import CardList from './components/CardList.vue'

  import {store} from './store'

  export default{
    components:{
      AppHeader,
      AppSearch,
      CardList,
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>ù
<header>
    <AppHeader/>
  </header>

  <main>
    <AppSearch/>
  </main>
  
</template>

<style lang="scss">
  @use './styles/partials/variables' as *;
  @use './styles/general.scss' as *;
</style>
