<script setup lang="ts">
    import {onBeforeMount, ref, watch, watchEffect, onMounted} from 'vue';
    import {useRoute} from 'vue-router';
    import {Article} from '../../Types/Article';
    import {useToastStore} from '../../../Store';
    import Categories from '../../Categories';
    import {useMediaQuery} from '../../Hooks';
    import icons from './icons';

    const mobile = useMediaQuery('(max-width: 770px)');
    const article = ref<Article>({});
    const isArticleSaved = ref<boolean>(false);
    const articleOwnerName = ref<string>('');
    const articleDate = ref<string>('');
    const route = useRoute();
    const articleId = route.query.id;
    const store = useToastStore();
    const {showToast} = store;
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

    const handleSave = async () => {
        try{
            const response = await fetch('http://localhost:4000/save-article', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({articleId}),
                credentials: 'include'
            });

            const result = await response.text();
            console.log(result);
            showToast(result);

            if(response.status === 200){
                isArticleSaved.value = true;
                const event = new CustomEvent('fetch-saved-articles');
                document.dispatchEvent(event);
            }
                
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }
    
    const handleUnsave = async () => {
        try{
            const response = await fetch('http://localhost:4000/unsave-article',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({articleId}),
                    credentials: 'include'
                }
            );

            const results = await response.text();
            console.log(results);
            showToast(results);

            if(response.status === 200){
                isArticleSaved.value = false;
                const event = new CustomEvent('fetch-saved-articles');
                document.dispatchEvent(event);
            }
                
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }

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
    });

    onMounted(async () => {
        try{
            const response = await fetch('http://localhost:4000/update-article-views',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({articleId})
                }
            );

            const results = await response.text();
            console.log(results);
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }

    })

    onMounted(async () => {
        try{
            const response = await fetch(`http://localhost:4000/is-article-saved/${articleId}`,
                {
                    method: 'GET',
                    credentials: 'include'
                }
            );

            if(response.status === 200){
                const result = await response.json();
                console.log(result);
                isArticleSaved.value = result
            }
            else{
                const result = await response.text();
                console.log(result);
                showToast(result);
            }
               
            
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    })

</script>

<template>
    <article class="article" v-if="article">
        <button class="save_article_button" @click="handleSave" v-if="!isArticleSaved">
            <img :src="icons['unselectedBookmark']"/>
        </button>
        <button class="unsave_article_button" @click="handleUnsave" v-else>
            <img :src="icons['selectedBookmark']"/>
        </button>
        <section class="article_owner">
            <img v-if="article.account_id" :src="`http://localhost:4000/get-image/${article.account_id}`"/>
            {{articleOwnerName}}
        </section>
        <p class="article_date">
            • {{articleDate}}
        </p>
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

    .save_article_button, .unsave_article_button{
        width: 40px;
        height: 40px;
        background-color: transparent;
        padding: 0px;
        grid-column: 2/3;
        grid-row: 1/2;
        justify-self: end;
        align-self: center;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    }

    .save_article_button{
        border: 2px solid var(--preset-color-grey-1);
    }

    .unsave_article_button{
        border: 2px solid var(--preset-color-blue-1);
    }

    .save_article_button:after, .unsave_article_button:after{
        height: fit-content;
        padding: 8px;
        background-color: var(--preset-color-grey-2);
        border-radius: 5px;
        position: absolute;
        bottom: 20px;
        right: 30px;
        display: none;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        color: var(--preset-color-black-1);
    }

    .save_article_button:after{
        width: 90px;
    }

    .unsave_article_button:after{
        width: 120px;
    }

    .save_article_button:after{
        content: 'Save article';
    }

    .unsave_article_button:after{
        content: 'Unsave article';
    }

    .save_article_button:hover:after, 
    .unsave_article_button:hover:after{
        display: block;
    }

    .save_article_button > img,
    .unsave_article_button > img{
        width: 30px;
        object-fit: contain;
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
        margin: 0px;
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