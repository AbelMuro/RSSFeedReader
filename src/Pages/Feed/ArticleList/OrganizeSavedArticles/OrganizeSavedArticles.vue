<script setup lang="ts">
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
    <AlignJustify v-model="savedArticles"/>
    <AlignJustifyLessContent v-model="savedArticles"/>
    <Grid v-model="savedArticles"/>
</template>

<style scoped>

</style>