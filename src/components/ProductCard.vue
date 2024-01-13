<script>
import { version } from 'vue';

    export default{
        name:'ProductCard',
        props:{
            info: Object,
        },
        data(){
            return{ 
                flags:[
                    {
                        lang:"en",
                        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
                    },

                    {
                        lang:"it",
                        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png"
                    }

                    
                ]
            }
        }
    }
</script>

<template>
    <!-- card film -->
    <img :src="'https://image.tmdb.org/t/p/w342'+info.backdrop_path" alt="copertina">
    <h3>{{ info.title }}</h3>
    <h4>{{ info.original_title }}</h4>

    <img id="bandierina" v-for="(flag,i) in flags" :src="flags[i].lang === info.original_language ? flags[i].src : ''" :alt="flags[i].lang === info.original_language ? flags[i].lang : ''">

    <h5>{{ info.original_language }}</h5>
    <h5>{{ info.vote_average }}</h5>
    
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>

