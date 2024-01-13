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
    <div id="container_generale">
        <h1>Film</h1>
        <div id="container_cards">
            <!-- visualizzazione cards -->
            <div v-for="(film,i) in store.films" :key="i">
                <ProductCard :info="film"/>
            </div>
        </div>
        <hr>
        <h1>Serie TV</h1>
        <div id="container_cards">
            <div v-for="(item,i) in store.serieTV" :key="i">
                <ProductCardserie :component="item"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    #container_generale{
        background-color: grey;
        padding: 20px;
    }

    #container_cards{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    h1{
        margin-bottom: 20px;
    }

    hr{
        border: 1px solid black;
        margin: 20px 0;
    }
</style>