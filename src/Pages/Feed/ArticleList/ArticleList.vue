<script setup lang="ts">
    import {onBeforeUnmount, onMounted, onBeforeMount, watch} from 'vue';
    import {RouterView, useRouter, useRoute} from 'vue-router';
    import {useArticlesStore} from '../../../Store';
    import { storeToRefs } from 'pinia';
    import {Article} from '../../../Common/Types';

    const router = useRouter();
    const route = useRoute();
    const store = useArticlesStore();
    const {setSavedArticles, sortArticlesBasedOnDate, setArticles, setUnreadArticles, setAllCategories, setSavedCategories} = store;
    const {sortNewestFirst} = storeToRefs(store);

    const fetchSavedArticles = async () => {
         try{
            const response = await fetch('http://localhost:4000/get-saved-articles', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                let {articles : results} = await response.json();
                results = results.map((article: Article) => {
                    return {
                        ...article,
                        category: article.category.split(','),
                    }
                });
                setSavedArticles(results);
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

    const fetchAllArticles = async () => {
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

    const checkOnlineStatus = async () => {
        try{
            const response = await fetch('http://localhost:4000/get-login-status',{
                    method: 'GET',
                    credentials: 'include'        
                }
            );

            if(response.status !== 200)
                return router.push('/');
            else{
                await fetchSavedArticles();
                await fetchAllArticles();
            }
            const pathname = route.fullPath;
            if(pathname.includes('all'))
                setAllCategories();
            else
                setSavedCategories();
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }

    watch(sortNewestFirst, (newestFirst) => {
        if(newestFirst)
            sortArticlesBasedOnDate();
    })

    onMounted(() => {
        checkOnlineStatus();        
    });

    onMounted(() => {
        document.addEventListener('fetch-saved-articles', fetchSavedArticles);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('fetch-saved-articles', fetchSavedArticles);
    });

</script>

<template>
    <section class="all_articles_container">
        <RouterView/>
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