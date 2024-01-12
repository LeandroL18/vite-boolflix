<script>
import {store} from '../store'
import ProductCard from './ProductCard.vue'

export default{
    name:'CardList',
    components:{
        ProductCard,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <ProductCard/>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>