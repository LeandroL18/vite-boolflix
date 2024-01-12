<script>
    export default{
        name:'ProductCard',
        props:{
            info: Object
        },
        data(){
            return{
                i: null,
                flags:[
                    {
                        lang:"en",
                        src:"https://www.iolecal.it/blog/posts/post088/English.jpg",
                    },

                    {
                        lang:"it",
                        src:"public/bandierina_italia.jpg"
                    }

                    
                ]
            }
        }
    }
</script>

<template>
    <!-- card -->
    <div>
        <img src="" alt="img">
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
            <img v-for="(flag,i) in flags" :src="flags[i].lang === info.original_language ? flags[i].src : ''" :alt="flags[i].lang === info.original_language ? flags[i].lang : ''">
        <h5>{{ info.vote_average }}</h5>

    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>