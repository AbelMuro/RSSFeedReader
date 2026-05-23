<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import {useCategoriesStore} from '../../../../Store';
    import {storeToRefs} from 'pinia';
    import {LayoutGroup, AnimatePresence, motion} from 'motion-v';
    import Category from './Category';

    const store = useCategoriesStore();
    const {categories} = storeToRefs(store);


</script>

<template>
    <LayoutGroup>
        <motion.section layout class="categories">
            <motion.h1 layout class="categories_title">
                CATEGORIES
            </motion.h1>
            <Category v-for="(category) in categories" :category="category.category" :accountIds="category.accountIds" />
        </motion.section>
    </LayoutGroup>
</template>

<style scoped>
    .categories{
        height: 500px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .categories_title{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>