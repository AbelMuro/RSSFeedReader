<script setup lang="ts">
    import {onBeforeMount, ref, watch} from 'vue';
    import {useRoute} from 'vue-router';
    import {Article} from '../../../Types/Article';
    import Categories from '../../../../Common/Categories';

    const article = ref<Article>({});
    const articleOwnerName = ref<string>('');
    const route = useRoute();
    const articleId = route.query.id;

    onBeforeMount(async () => {
        try{
            const response = await fetch(`http://localhost:4000/get-article/${articleId}`,
                {
                    method: 'GET',
                }
            );

            if(response.status === 200){
                const results = await response.json();
                console.log(results);
                article.value = results;
            }
            else{
                const results = await response.text();
                console.log(results);
            }
                
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    });

    watch(article, async (article) => {
        try{
            const response = await fetch(`http://localhost:4000/get-account-name/${article.account_id}`,
                {
                    method: 'GET'
                }
            );
            const results = await response.text(); 

            if(response.status === 200)
                articleOwnerName.value = results;
            else
                console.log(results);
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    });

</script>

<template>
    <article class="article" v-if="article">
        <section class="article_owner">
            <img :src="`http://localhost:4000/get-image/${article.account_id}`"/>
            {{articleOwnerName}}
        </section>
        <h1 class="article_title">
            {{article.title}}
        </h1>
        <div class="article_categories">
            <div 
                class="article_category" 
                v-for="(category) in article.category?.split(',')" 
                :style="{
                    backgroundColor: Categories[category].backgroundColor,
                    color: Categories[category].color
                }">
                    {{category}}
            </div>
        </div>
    </article>
</template>

<style scoped>
    .article{
        width: 100%;
        height: calc(100vh - 80px - 70px);
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .article_owner{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--preset-color-black-3);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-lettter-spacing);
    }

    .article_owner > img{
        width: 50px;
        object-fit: contain;
    }

    .article_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
    }

    .article_categories{
        display: flex;
        gap: 10px;
    }

    .article_category{
        padding: 5px;
        border-radius: 5px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>