<script>
import {store} from '../store'
import ProductCard from './ProductCard.vue'
import ProductCardserie from './ProductCardserie.vue';

export default{
    name:'CardList',
    components:{
    ProductCard,
    ProductCardserie
},
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-- visualizzazione cards -->
    <h1>Film</h1>
    <div v-for="(film,i) in store.films" :key="i">
        <ProductCard :info="film"/>
    </div>
    <h1>Serie TV</h1>
    <div v-for="(item,i) in store.serieTV" :key="i">
        <ProductCardserie :component="item"/>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>