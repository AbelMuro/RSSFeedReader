<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import AlignJustify from './AlignJustify';
    import Grid from './Grid';
    import AlignJustifyLessContent from './AlignJustifyLessContent';
    import {useLayoutStore} from '../../../Store';

    const store = useLayoutStore();
    const {layout} = storeToRefs(store);


</script>

<template>
    <section class="all_articles_container">
        <AlignJustify v-model="layout"/>
        <Grid v-model="layout"/>
        <AlignJustifyLessContent v-model="layout"/>
    </section>
</template>

<style scoped>
    .all_articles_container{
        width: 100%;
        height: calc(100vh - 70px - 80px);
        grid-column: 2/3;
        grid-row: 2/3;
    }

    @media(max-width: 915px){
        .all_articles_container{
            grid-row: 1/2;
        }
    }
</style>