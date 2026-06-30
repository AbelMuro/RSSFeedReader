<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import {RouterView} from 'vue-router';
    import DisplayArticle from '../Article';
    import { Article } from '../../../Common/Types';

    const articles = ref<Array<Article>>([]);

    onMounted(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-most-saved-articles', {
                method: 'GET'
            });

            if(response.status === 200){
                const result = await response.json();
                console.log(result);
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
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: auto;
    }
</style>