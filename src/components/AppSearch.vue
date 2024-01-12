<script>
import {store} from '../store'

import CardList from './CardList.vue';

export default{
    name:'AppSearch',
    components:{
        CardList
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <CardList/>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>