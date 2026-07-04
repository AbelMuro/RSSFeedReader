<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import {RouterView} from 'vue-router';
    import DisplayArticle from '../../../Common/Components/Article';
    import { Article } from '../../../Common/Types';

    const articles = ref<Array<Article>>([]);

    onMounted(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-most-viewed-articles', {
                method: 'GET'
            });

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
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    })
</script>

<template>
    <section class="container">
        <RouterView v-slot="{Component}">
            <component :is="Component"/>
            <DisplayArticle v-for="(article) of articles" :article="article" v-if="!Component"/>
        </RouterView>
       
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: auto;
    }

    @media(max-width: 770px){
        .container{
            padding: 15px 0px 0px 0px;
        }
    }
</style>