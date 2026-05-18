<script setup lang="ts">
    const layout = defineModel<string>();
</script>

<template>
    <section class="align_justify" v-if="layout === 'align-justify'">
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
    .align_justify{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .all_articles_title{
        margin: 0px;
        padding: 15px 0px 0px 25px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: 500;
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }


    .article{
        width: 100%;
        padding: 0px 55px 25px 55px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
    .article:not(.article:last-child){
        border-bottom: 1px solid var(--preset-color-grey-1);
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

    @media(max-width: 770px){
        .article{
            padding: 15px;
        }

        .article_name{
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }

</style>