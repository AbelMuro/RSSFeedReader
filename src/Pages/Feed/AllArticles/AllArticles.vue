<script setup lang="ts">
    import {onMounted, ref, onBeforeUnmount} from 'vue';
    import AlignJustify from './AlignJustify';
    import Grid from './Grid';
    import AlignJustifyLessContent from './AlignJustifyLessContent';
    import {Article} from '../../../Common/Types';;
    import {useArticlesStore} from '../../../Store';

    const articles = ref<Array<Article>>([]);
    let interval : ReturnType<typeof setInterval> | null = null;
    const {setTotalArticles} = useArticlesStore();

    const fetchArticles = async () => {
         try{
            const response = await fetch('http://localhost:4000/get-all-articles', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                let {articles : results, unreadArticles} = await response.json();
                results = results.map((article: Article) => {
                    return {
                        ...article,
                        category: article.category.split(','),
                    }
                })
                articles.value = results;
                setTotalArticles(unreadArticles);
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

    onMounted(() => {
       fetchArticles();

       interval = setInterval(() => {
            console.log('polling')
            fetchArticles();
       }, 5000)
    });

    onBeforeUnmount(() => {
        if(interval)
            clearInterval(interval);
    })

</script>

<template>
    <section class="all_articles_container">
        <AlignJustify v-model="articles"/>
        <Grid v-model="articles"/>
        <AlignJustifyLessContent v-model="articles"/>
    </section>
</template>

<style scoped>
    .all_articles_container{
        width: 100%;
        height: calc(100vh - 70px - 80px);
        grid-column: 2/3;
        grid-row: 2/3;
        overflow: auto;
    }

    @media(max-width: 915px){
        .all_articles_container{
            grid-row: 1/2;
        }
    }

    @media(max-width: 625px){
        .all_articles_container{
            height: initial;
            max-height: calc(100vh - 60px - 40px);
            min-height: calc(100vh - 60px - 420px);
        }
    }
</style>