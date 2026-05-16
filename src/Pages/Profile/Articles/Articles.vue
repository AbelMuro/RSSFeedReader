<script setup lang="ts">
    import DisplayArticles from './DisplayArticles';
</script>

<template>
    <section class="articles">
        <h1 class="articles_title">
            Your articles
        </h1>
        <DisplayArticles/>
    </section>
</template>

<style scoped>
    .articles{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .articles_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
    }

    @media(max-width: 770px){
        .articles{
            height: calc(100vh - 60px - 60px);
            overflow: auto;
        }

        .articles_title{
            font-size: 1.8rem;
        }
    }
</style>