<script setup lang="ts">
    import {RouterView} from 'vue-router';
    import { onMounted } from 'vue';
    import AlignJustify from '../AlignJustify';
    import AlignJustifyLessContent from '../AlignJustifyLessContent';
    import Grid from '../Grid';
    import {useArticlesStore} from '../../../../Store';
    import {storeToRefs} from 'pinia';

    const store = useArticlesStore();
    const {articles} = storeToRefs(store);
    const {setAllCategories} = store;

    onMounted(() => {
        setAllCategories();
    })

</script>

<template>
    <RouterView v-slot="{Component}">
        <component :is="Component"/>
        <AlignJustify v-model="articles" v-if="!Component"/>
        <AlignJustifyLessContent v-model="articles" v-if="!Component"/>
        <Grid v-model="articles" v-if="!Component"/>
    </RouterView>

</template>

