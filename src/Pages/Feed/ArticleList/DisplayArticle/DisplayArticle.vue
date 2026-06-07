<script setup lang="ts">
    import {onBeforeMount, ref, watch, watchEffect} from 'vue';
    import {useRoute} from 'vue-router';
    import {Article} from '../../../Types/Article';
    import Categories from '../../../../Common/Categories';
    import {useMediaQuery} from '../../../../Common/Hooks';

    const mobile = useMediaQuery('(max-width: 770px)');
    const article = ref<Article>({});
    const articleOwnerName = ref<string>('');
    const articleDate = ref<string>('');
    const route = useRoute();
    const articleId = route.query.id;
    const months : Array<string> = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];


    onBeforeMount(async () => {
        try{
            const response = await fetch(`http://localhost:4000/get-article/${articleId}`,
                {
                    method: 'GET',
                }
            );

            if(response.status === 200){
                const results = await response.json();
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

    watchEffect(() => {
        if(!article.value) return;
        const date = new Date(Number(article.value.date_created));
        const day = date.getDate();
        const month = date.getMonth();
        const fullyear = date.getFullYear();     

        if(!mobile.value)
            articleDate.value = `${day} ${months[month]} ${fullyear}`;
        else
            articleDate.value = `${month + 1}/${day}/${fullyear}`        
    })

</script>

<template>
    <article class="article" v-if="article">
        <section class="article_owner">
            <img :src="`http://localhost:4000/get-image/${article.account_id}`"/>
            {{articleOwnerName}}
        </section>
        <date class="article_date">
            • {{articleDate}}
        </date>
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
        <p class="article_content">
            {{article.content}}
        </p>
    </article>
</template>

<style scoped>
    .article{
        width: 100%;
        height: calc(100vh - 80px - 70px);
        padding: 25px;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 10px;
    }

    .article_owner{
        grid-column: 1/2;
        grid-row: 1/2;
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--preset-color-black-3);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
    }

    .article_content{
        grid-column: 1/3;
        grid-row: 4/5;
        width: 100%;
        height: calc(100vh - 80px - 70px);
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
    }

    .article_date{
        grid-column: 2/3;
        grid-row: 1/2;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: flex;
        align-items: center;
    }

    .article_owner > img{
        width: 50px;
        object-fit: contain;
    }

    .article_title{
        grid-column: 1/3;
        grid-row: 2/3;
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
    }

    .article_categories{
        grid-column: 1/3;
        grid-row: 3/4;
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

    @media(max-width: 770px){
        .article{
            padding: 15px;
        }

        .article_title{
            font-size: 2rem;
        }

        .article_owner{
            font-size: 1rem;
        }

        .article_owner > img{
            width: 40px;
        }

        .article_content{
            font-size: 1.2rem;
        }
    }
</style>