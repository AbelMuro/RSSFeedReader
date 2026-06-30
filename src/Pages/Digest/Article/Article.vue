<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import { Article } from '../../../Common/Types';

    const {article} = defineProps<{article: Article}>();
    const articleOwner = ref<string>('');
    const route = useRoute();
    const router = useRouter();

    const formatContent = (content: string) => {
        return content.slice(0, 50);
    }

    const getOwnerName = async() => {
        try{
            const response = await fetch(`http://localhost:4000/get-account-name/${article.account_id}`,
                {
                    method: 'GET'
                }
            );
            const result = await response.text();

            if(response.status === 200)
                articleOwner.value = result;
            else 
                console.log(result);
            
                
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }

    const handleClick = () => {
        router.push({
            path: `${route.path}/${article.title}`,
            query: {
                id: article.id
            }
        });
    }

    onMounted(() => {
        getOwnerName();
    })

</script>

<template>
    <article class="article" @click="handleClick">
        <img class="article_image" :src="`http://localhost:4000/get-article-cover-image/${article.id}`"/>
        <h2 class="article_title">
            {{article.title}}
        </h2>
        <h3 class="article_owner">
            by {{articleOwner}}
        </h3>
        <h2 class="article_content">
            {{formatContent(article.content)}}
        </h2>
        <p class="article_posted">
            Posted 2h ago
        </p>
    </article>
</template>

<style scoped>

    .article{
        width: 100%;
        height: 220px;
        padding: 10px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: auto 1fr;
        flex-shrink: 0;
        align-content: start;
        column-gap: 15px;
        overflow: hidden;
        row-gap: 10px;
        cursor: pointer;
    }

    .article:hover{
        background-color: var(--preset-color-white-2);
    }

    .article_image{
        width: 200px;
        object-fit: contain;
        border-radius: 10px;
        grid-column: 1/2;
        grid-row: 1/5;
    }

    .article_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-size: var(--preset-text-4-font-size);
        font-family: var(--preset-text-4-font-family);
        font-weight: var(--preset-text-4-font-weight);
        letter-spacing: var(--preset-text-4-letter-spacing);
        line-height: var(--preset-text-4-line-height);
        grid-column: 2/3;
        grid-row: 1/2;
    }

    .article_owner{
        margin: 0px;
        color: var(--preset-color-black-4);
        font-size: var(--preset-text-5-font-size);
        font-family: var(--preset-text-5-font-family);
        font-weight: var(--preset-text-5-font-weight);
        letter-spacing: var(--preset-text-5-letter-spacing);
        line-height: var(--preset-text-5-line-height);
        grid-column: 2/3;
        grid-row: 2/3;
    }

    .article_content{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-size: var(--preset-text-5-font-size);
        font-family: var(--preset-text-5-font-family);
        font-weight: var(--preset-text-5-font-weight);
        letter-spacing: var(--preset-text-5-letter-spacing);
        line-height: var(--preset-text-5-line-height);
        grid-column: 2/3;
        grid-row: 3/4;  
    }

    .article_posted{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        font-family: var(--preset-text-5-font-family);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        line-height: var(--preset-text-5-line-height);
        text-align: right;
        grid-column: 2/3;
        grid-row: 4/5;
    }
</style>