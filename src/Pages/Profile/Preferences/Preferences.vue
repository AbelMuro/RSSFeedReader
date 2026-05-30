<script setup lang="ts">
    import Theme from './Theme';
    import TagNewArticles from './TagNewArticles';
    import UpdateCategories from './UpdateCategories';
</script>

<template>
    <section class="preferences">
        <h1 class="preferences_title">
            Preferences
        </h1>
        <section class="preferences_switches">
            <Theme/>
            <TagNewArticles/>
        </section>
        <hr/>
        <UpdateCategories/>
    </section>
</template>

<style scoped>
    .preferences{
        width: 100%;
        height: calc(100vh - 60px);
        padding: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 25px;
    }

    .preferences > hr{
        width: 100%;
        height: 1px;
        border: none;
        margin: 0px;
        padding: 0px;
        background-color: var(--preset-color-black-1);
    }

    .preferences_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
    }

    .preferences_switches{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media(max-width: 770px){
        .preferences{
            height: calc(100vh - 60px - 60px);
        }

        .preferences_title{
            font-size: 1.8rem;
        }

        .preferences_switches{
            width: 300px;
        }
    }
</style>