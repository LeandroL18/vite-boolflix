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
    <div id="container">
        <div>
            <h1>BOOLFLIX</h1>
        </div>
        <div>
            <input type="text" placeholder="Inserisci un titolo" v-model="store.query">
            <button @click="$emit('filtro'), $emit('filter')">Cerca</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    #container{
        background-color: black;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        height: 6vh;
    }

    h1{
        color: red;
    }

    input, button{
        padding: 5px;
        font-size: 15px;
    }

    button:hover{
        background-color: rgb(205, 205, 205);
    }

</style>