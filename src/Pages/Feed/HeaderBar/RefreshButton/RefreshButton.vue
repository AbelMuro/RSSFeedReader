<script setup lang="ts">
    import {useArticlesStore} from '../../../../Store';
    import { Article } from '../../../../Common/Types';
    import icons from './icons';

    const store = useArticlesStore();
    const {setArticles, setUnreadArticles} = store;

    const handleClick = async () => {
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
    };
</script>

<template>
    <button class="refresh" @click="handleClick">
        <img :src="icons['refresh']"/>
        Refresh
    </button>
</template>

<style scoped>
    .refresh{
        height: 30px;
        padding: 7px 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--preset-color-grey-1);
        border-radius: 10px;
        color: var(--preset-color-black-4);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
    }

    .refresh:hover{
        background-color: var(--preset-color-white-2);
    }

    .refresh:active{
        background-color: var(--preset-color-grey-2);
    }

    .refresh > img {
        width: 15px;
        object-fit: contain;
        align-self: start;
    }

    @media(max-width: 625px){
        .refresh{
            height: 40px;
            width: 300px;
            justify-content: center;
        }

        .refresh > img{
            align-self: center;
        }
    }

</style>