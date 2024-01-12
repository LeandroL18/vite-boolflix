<script>
    export default{
        name:'ProductCard',
        props:{
            info: Object
        }
    }
</script>

<template>
    <!-- card -->
    <div>
        <img src="" alt="img">
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <h5>{{ info.original_language }}</h5>
        <h5>{{ info.vote_average }}</h5>

    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
</style>