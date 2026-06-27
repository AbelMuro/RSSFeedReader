<script setup lang="ts">

</script>

<template>
    <section class="container">
        <article class="article" v-for="(i) in [1,2,3,4,5]">
            <div class="article_image"/>
            <h2 class="article_title">
                Article Name
            </h2>
            <h3 class="article_owner">
                Smash Magazine
            </h3>
            <p class="article_posted">
                2h ago
            </p>
        </article>
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-content: start;
        column-gap: 15px;
        row-gap: 20px;
    }

    .article{
        width: 100%;
        height: 150px;
        border-radius: 10px;
        background-color: var(--preset-color-grey-3);
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-template-rows: repeat(3, auto);
        align-content: flex-start;
        align-items: flex-start;
        overflow: hidden;
        row-gap: 10px;
    }

    .article_image{
        width: 100px;
        height: 150px;
        background-color: aqua;
        grid-column: 1/2;
        grid-row: 1/5;
    }

    .article_title{
        margin: 10px 0px 0px 0px;
        color: var(--preset-color-black-1);
        font-size: var(--preset-text-5-font-size);
        font-family: var(--preset-text-5-font-family);
        font-weight: var(--preset-text-5-font-weight);
        letter-spacing: var(--preset-text-5-letter-spacing);
        line-height: var(--preset-text-5-line-height);
        text-align: center;
        grid-column: 2/3;
        grid-row: 1/2;
    }

    .article_owner{
        margin: 0px;
        color: var(--preset-color-black-4);
        font-size: var(--preset-text-5-font-size);
        font-family: var(--preset-text-5-font-family);
        font-weight: var(--preset-text-5-font-weight);
        letter-spacing: var(--preset-text-5-letter-spacing);
        line-height: var(--preset-text-5-line-height);
        text-align: center;
        grid-column: 2/3;
        grid-row: 2/3;
    }

    .article_posted{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        font-family: var(--preset-text-5-font-family);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        line-height: var(--preset-text-5-line-height);
        text-align: center;
        grid-column: 2/3;
        grid-row: 3/4;
    }
</style>