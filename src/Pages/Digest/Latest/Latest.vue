<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import {RouterView} from 'vue-router';
    import { Article as ArticleType } from '../../../Common/Types';
    import Article from '../../../Common/Components/Article';

    const articles = ref<Array<ArticleType>>([]);

    onMounted(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-latest-articles', 
                {
                    method: 'GET',
                }
            );

            if(response.status === 200){
                let result = await response.json();
                result = result.map((article: Article) => {
                    return {
                        ...article,
                        category: article.category.split(','),
                    }
                });
                articles.value = result;
            }
            else{
                const result = await response.text();
                console.log(result);
            }
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    });
</script>

<template>
    <RouterView v-slot="{Component}">
        <component :is="Component"/>
        <section class="latest" v-if="!Component">
            <Article v-for="(article) in articles" :article="article"/>
        </section>
    </RouterView>
</template>

<style scoped>
    .latest{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }


    @media(max-width: 770px){
        .container{
            padding: 15px 0px 0px 0px;
        }
    }
</style>

