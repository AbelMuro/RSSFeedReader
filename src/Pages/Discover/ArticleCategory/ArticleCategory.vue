<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {useRoute} from 'vue-router';
    import {Article as ArticleType} from '../../../Common/Types';
    import Article from '../../../Common/Components/Article';
    import {RouterView} from 'vue-router';

    const route = useRoute();
    const articles = ref<Array<ArticleType>>([]);

    const fetchArticles = async (category: string) => {
        try{
            const response = await fetch(`http://localhost:4000/get-all-articles-based-on-category/${category}`, {
                method: 'GET'
            });

            if(response.status === 200){
                let results = await response.json();
                results = results.map((article: Article) => {
                    return {
                        ...article,
                        category: article.category.split(','),
                    }
                });
                articles.value = results;
            }
            else{
                const results = await response.text();
                console.log(results);
            }
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    }

    watch(() => route.path, (newPath) => {
        const category = newPath.split('/')[2];
        console.log(category);
        fetchArticles(category);
    }, {immediate: true, flush: 'post'});
</script>

<template>
    <RouterView v-slot="{Component}">
        <component :is="Component"/>
        <section class="articles" v-if="!Component">
            <Article v-for="(article) in articles" :article="article"/>
        </section>
    </RouterView>
</template>

<style scoped>
    .articles{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px 0px;
    }
</style>