<script setup lang="ts">
    import {RouterView} from 'vue-router';
    import { onMounted } from 'vue';
    import AlignJustify from '../AlignJustify';
    import AlignJustifyLessContent from '../AlignJustifyLessContent';
    import Grid from '../Grid';
    import {useArticlesStore} from '../../../../Store';
    import {storeToRefs} from 'pinia';

    const store = useArticlesStore();
    const {savedArticles} = storeToRefs(store);
    const {setSavedCategories} = store;

    onMounted(() => {
        setSavedCategories();
    })

</script>

<template>
    <RouterView v-slot="{Component}">
        <component :is="Component"/>
        <AlignJustify v-model="savedArticles" v-if="!Component"/>
        <AlignJustifyLessContent v-model="savedArticles" v-if="!Component"/>
        <Grid v-model="savedArticles" v-if="!Component"/>
    </RouterView>

</template>

<style scoped>

</style>