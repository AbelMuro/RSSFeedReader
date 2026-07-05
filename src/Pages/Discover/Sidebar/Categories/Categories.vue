<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import Categories from '../../../../Common/Categories';

    const allCategories = Object.entries(Categories);
    const currentRoute = ref<string>('Technology');
    const router = useRouter();
    const route = useRoute();

    const handleLink = (route : string) => {  
        router.push({
            path: `/discover/${route}`,
        })
    };

    const handleStyles = (route : string) => {
        if(currentRoute.value?.includes(route))
            return {backgroundColor: '#d8eafd80', color: '#001dc4', borderColor: '#001dc4'};
        else
            return {}
    }

    watch(() => route.path, (newRoute) => {
        currentRoute.value = newRoute;
    }, {immediate: true})
</script>

<template>
    <button class="category" v-for="(category) in allCategories" :style="handleStyles(category[0])" @click="handleLink(category[0])">
        {{category[0]}}
    </button>
</template>

<style scoped>
    .category{
        width: 100%;
        height: 40px;
        text-align: left;
        border-radius: 5px;
        padding: 0px 15px;
        background-color: transparent;
        border: 1px solid var(--preset-color-grey-1);
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        flex-shrink: 0;
    }

</style>