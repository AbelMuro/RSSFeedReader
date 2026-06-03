<script setup lang="ts">
    import {useLayoutStore} from '../../../../Store';
    import {useRouter} from 'vue-router';
    import {onMounted, onBeforeUnmount} from 'vue';
    import { storeToRefs } from 'pinia';
    import FetchUserName from './FetchUserName';
    import FetchUserPhoto from './FetchUserPhoto';
    import {useArticlesStore} from '../../../../Store';

    type Article = {
        id: string;
        account_id: string;
        title: string;
        content: string;
        category: Array<string>;
        date_created: string;
    };

    const {article} = defineProps<{article: Article}>();
    const layoutStore = useLayoutStore();
    const {addCategory, removeCategory} = useArticlesStore();
    const {layout} = storeToRefs(layoutStore);
    const router = useRouter();

    const handleClick = () => {
        router.push({
            name: `feed/${article.title}`,
            state: {
                id : article.id
            }
        });
    }

    const formatDate = (date: string) : string => {
        const currentTime : number = Date.now();
        const articleTimePosted : number = currentTime - Number(date);

        const seconds = Math.floor(articleTimePosted / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if(years > 0)
            return `${years} year${years > 1 ? 's' : ''} ago`;
        else if(months > 0)
            return `${months} month${months > 1 ? 's' : ''} ago`;
        else if(days > 0)
            return `${days} day${days > 1 ? 's' : ''} ago`;
        else if(hours > 0)
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        else if(minutes > 0)
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        else
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    onMounted(() => {
        article.category.forEach((category) => {
            addCategory({category, accountId: article.account_id});
        })
    });

    onBeforeUnmount(() => {
        article.category.forEach((category) => {
            removeCategory({category});
        })
    })

</script>

<template>
    <article class="article" :key="article.date_created" @click="handleClick">
        <h2 class="article_title">
            <FetchUserPhoto :accountId="article.account_id"/>
            <FetchUserName :accountId="article.account_id"/>
            <span> • {{formatDate(article.date_created)}}</span>
        </h2>
        <h1 class="article_name">
            {{article.title}}
        </h1>
        <p class="article_content" v-if="layout !== 'align-justify-less-content'"> 
            {{article.content}}
        </p>
        <div class="categories" v-if="layout !== 'align-justify-less-content'">
            <div class="category" v-for="(category) in article.category">
                {{category}}
            </div>
        </div>
    </article>
</template>

<style scoped>
    .article{
        width: 100%;
        padding: 0px 55px 25px 55px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        cursor: pointer;
    }

    .article:hover{
        background-color: var(--preset-color-white-2);
    }

    .article:active{
        background-color: var(--preset-color-grey-2);
    }
    
    .article:not(.article:last-child){
        border-bottom: 1px solid var(--preset-color-grey-1);
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

    @media(max-width: 770px){
        .article{
            padding: 15px;
        }

        .article_name{
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }

</style>