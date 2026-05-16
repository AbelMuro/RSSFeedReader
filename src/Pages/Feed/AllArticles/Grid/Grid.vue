<script setup lang="ts">
    const layout = defineModel<string>();
</script>

<template>
    <section class="grid" v-if="layout === 'grid'">
        <h2 class="all_articles_title">
            TODAY
        </h2>
        <article class="article" v-for="(i) in [1,2,3,4,5]">
            <h2 class="article_title">
                <div class="article_icon">
                    S
                </div>
                Smashing Magazine 
                <span> • 2h ago</span>
            </h2>
            <h1 class="article_name">
                Practical Guide To Designing For Colorblind Users
            </h1>
            <p class="article_content">
                Color blindness affects roughly 8% of men and 0.5% of women worldwide. 
                Yet most interfaces rely heavily on color to convey meaning, status, and hierarchy. 
                Here's how to design interfaces that work for everyone without sacrificing visual richness.
            </p>
            <div class="categories">
                <div class="category">
                    Development
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped>
    .grid{
        height: calc(100vh - 70px - 80px);
        display: grid;
        padding: 0px 25px 25px 25px;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        overflow: auto;
    }

    .all_articles_title{
        grid-column: 1/4;
        grid-row: 1/2;
        margin: 0px;
        padding: 15px 0px 0px 15px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: 500;
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }


    .article{
        width: 100%;
        padding: 25px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border: 1px solid var(--preset-color-grey-1);
    }
    


    .article_title{
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0px;
        color: var( --preset-color-black-3);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .article_title > span{
        color: var(--preset-color-grey-1);
    }

    .article_icon{
        width: 25px;
        height: 25px;
        border-radius: 10px;
        background-color: var(--preset-color-red-1);
        color: var(--preset-color-white-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article_name{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
    }

    .article_content{
        margin: 0px;
        color: var( --preset-color-black-3);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .categories{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 5px;
        column-gap: 10px;
    }

    .category{
        padding: 5px;
        border-radius: 10px;
        color: var(--preset-color-pink-2);
        background-color: var(--preset-color-pink-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
    
    @media(max-width: 1200px){
        .grid{
            grid-template-columns: 1fr 1fr;
        }

        .all_articles_title{
            grid-column: 1/3;
        }
    }

    @media(max-width: 770px){
        .article_name{
            font-size: 1.5rem;
            line-height: 2rem;
        }

    }
</style>