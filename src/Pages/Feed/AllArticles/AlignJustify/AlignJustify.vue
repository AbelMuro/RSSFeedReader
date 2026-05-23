<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';
    import {useLayoutStore} from '../../../../Store';
    import type { Article as ArticleType } from '../../../../Common/Types';
    import Article from '../Article'

    const articles = defineModel<Array<Article>>();
    const store = useLayoutStore();
    const {layout} = storeToRefs(store);

</script>

<template>
    <section class="align_justify" v-if="layout === 'align-justify'">
        <h2 class="all_articles_title">
            TODAY
        </h2>
        <Article v-for="(article) in articles" :article="article" :key="article.date_created"/>
    </section>
</template>

<style scoped>
    .align_justify{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .all_articles_title{
        margin: 0px;
        padding: 15px 0px 0px 25px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: 500;
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }


</style>