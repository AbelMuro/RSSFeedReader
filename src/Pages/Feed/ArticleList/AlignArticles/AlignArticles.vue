<script setup lang="ts">
    import AlignJustify from './AlignJustify';
    import AlignJustifyLessContent from './AlignJustifyLessContent';
    import Grid from './Grid';
    import {useArticlesStore} from '../../../../Store';
    import {storeToRefs} from 'pinia';

    const store = useArticlesStore();
    const {articles} = storeToRefs(store);
</script>

<template>
    <AlignJustify v-model="articles"/>
    <AlignJustifyLessContent v-model="articles"/>
    <Grid v-model="articles"/>
</template>

