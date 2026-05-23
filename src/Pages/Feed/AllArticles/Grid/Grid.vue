<script setup lang="ts"> 
    import { storeToRefs } from 'pinia';
    import {useLayoutStore} from '../../../../Store';
    import type {Article as ArticleType} from '../../../../Common/Types';
    import Article from '../Article';

    const articles = defineModel<Array<ArticleType>>();
    const store = useLayoutStore();
    const {layout} = storeToRefs(store);

</script>

<template>
    <section class="grid" v-if="layout === 'grid'">
        <h2 class="all_articles_title">
            TODAY
        </h2>
        <Article v-for="(article) in articles" :article="article" :key="article.date_created"/>
    </section>
</template>

<style scoped>
    .grid{
        height: 100%;
        display: grid;
        padding: 0px 25px 25px 25px;
        grid-template-columns: 1fr 1fr 1fr;
        align-content: start;
        gap: 15px;
    }

    .all_articles_title{
        grid-column: 1/4;
        grid-row: 1/2;
        margin: 0px;
        padding: 15px 0px 0px 15px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: 500;
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }


    .article{
        width: 100%;
        padding: 25px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border: 1px solid var(--preset-color-grey-1);
    }
    


    .article_title{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0px;
        color: var( --preset-color-black-3);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .article_title > span{
        color: var(--preset-color-grey-1);
    }

    .article_icon{
        width: 25px;
        height: 25px;
        border-radius: 10px;
        background-color: var(--preset-color-red-1);
        color: var(--preset-color-white-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article_name{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
    }

    .article_content{
        margin: 0px;
        color: var( --preset-color-black-3);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .categories{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 5px;
        column-gap: 10px;
    }

    .category{
        padding: 5px;
        border-radius: 10px;
        color: var(--preset-color-pink-2);
        background-color: var(--preset-color-pink-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
    
    @media(max-width: 1200px){
        .grid{
            grid-template-columns: 1fr 1fr;
        }

        .all_articles_title{
            grid-column: 1/3;
        }
    }

    @media(max-width: 940px){
        .article{
            padding: 15px;
        }

        .article_name{
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }

    @media(max-width: 680px){
        .grid{
            grid-template-columns: 1fr;
        }

        .all_articles_title{
            grid-column: 1/2;
        }
    }

</style>