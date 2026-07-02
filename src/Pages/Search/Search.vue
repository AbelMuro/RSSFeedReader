<script setup lang="ts">
    import Article from '../../Common/Components/Article';
    import {storeToRefs} from 'pinia';
    import {useArticlesStore} from '../../Store';

    const store = useArticlesStore();
    const {searchedArticles} = storeToRefs(store);


</script>

<template>
    <section class="search">
        <Article v-for="(article) in searchedArticles" :article="article" />
    </section>
</template>

<style scoped>
    .search{
        width: 100%;
        height: calc(100vh - 70px);
        display: flex;
        flex-direction: column;
    }
</style>