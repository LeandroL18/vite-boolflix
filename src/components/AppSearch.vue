<script>
import {store} from '../store'

export default{
    name:'AppSearch',
    emits: ['filtro', 'filter'],
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <input type="text" placeholder="Inserisci un titolo" v-model="store.query">
    <button @click="$emit('filtro'), $emit('filter')">Cerca</button>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>