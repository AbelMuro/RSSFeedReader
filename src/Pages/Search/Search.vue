<script setup lang="ts">
    import Article from '../../Common/Components/Article';
    import {storeToRefs} from 'pinia';
    import {RouterView} from 'vue-router';
    import {useArticlesStore} from '../../Store';

    const store = useArticlesStore();
    const {searchedArticles} = storeToRefs(store);

</script>

<template>
    <RouterView v-slot="{Component}">
        <component :is="Component"/>
        <section class="search" v-if="!Component">
            <Article v-for="(article) in searchedArticles" :article="article" />
        </section>
    </RouterView>
</template>

<style scoped>
    .search{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .search:not(.search:last-child){
        border-bottom: 1px solid var(--preset-color-grey-1);
    }
</style>