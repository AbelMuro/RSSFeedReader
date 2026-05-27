<script setup lang="ts">
    import {onMounted, ref, onBeforeMount, watch} from 'vue';
    import {storeToRefs} from 'pinia';
    import {useRouter} from 'vue-router';
    import AlignJustify from './AlignJustify';
    import Grid from './Grid';
    import AlignJustifyLessContent from './AlignJustifyLessContent';
    import {Article} from '../../../Common/Types';
    import {useArticlesStore} from '../../../Store';

    const store = useArticlesStore();
    const {setUnreadArticles, setArticles, sortArticlesBasedOnDate} = store;
    const {sortNewestFirst, articles} = storeToRefs(store);
    const router = useRouter();

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
                });
                setArticles(results);
                setUnreadArticles(unreadArticles);
                if(sortNewestFirst.value)
                    sortArticlesBasedOnDate();
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


    const sortArticlesAlphabetically = () => {
        articles.value.sort((articleA, ArticleB) => {
            const titleA = articleA.title.toLowerCase();
            const titleB = ArticleB.title.toLowerCase();

            if(titleA < titleB)
                return -1;
            else if(titleA > titleB)
                return 1;
            else
                return 0;
        })
    };

    const checkOnlineStatus = async () => {
        try{
            const response = await fetch('http://localhost:4000/get-login-status',{
                    method: 'GET',
                    credentials: 'include'        
                }
            );

            if(response.status !== 200)
                router.push('/');
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }

    watch(sortNewestFirst, () => {
        sortArticlesBasedOnDate();
    })

    onMounted(() => {
        console.log('mounted')
        sortArticlesAlphabetically();
    })

    onBeforeMount(async() => {
        checkOnlineStatus();        
        fetchArticles();
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