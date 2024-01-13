<script>
import { version } from 'vue';

    export default{
        name:'ProductCardserie',
        props:{
            component: Object
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
    
    <!-- card serieTV -->
    <div>
        <img :src="'https://image.tmdb.org/t/p/w300'+component.backdrop_path" alt="copertina">
        <h3>{{ component.name }}</h3>
        <h4>{{ component.original_name }}</h4>
        <img id="bandierina" v-for="(flag,i) in flags" :src="flags[i].lang ===component.original_language ? flags[i].src : ''" :alt="flags[i].lang === component.original_language ? flags[i].lang : ''">

        <h5>{{ component.original_language }}</h5>
        <h5>{{ component.vote_average }}</h5>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>

