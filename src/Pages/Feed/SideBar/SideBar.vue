<script setup lang="ts">
    import Navigation from './Navigation';
    import Categories from './Categories';
    import CheckStatusFeeds from './CheckStatusFeeds';
</script>

<template>
    <aside class="sidebar">
        <Navigation/>
        <hr/>
        <Categories/>
        <hr/>
        <CheckStatusFeeds/>
    </aside>
</template>

<style scoped>
    .sidebar{
        width: 300px;
        height: calc(100vh - 70px);
        padding: 15px;
        border-right: 1px solid var(--preset-color-grey-1);
        background-color: var(--preset-color-white-2);
        display: flex;
        flex-direction: column;
        grid-row: 1/3;
        grid-column: 1/2;
        gap: 15px
    }

    .sidebar > hr{
        width: 100%;
        height: 1px;
        border: none;
        margin: 0px;
        padding: 0px;
        background-color: var(--preset-color-grey-1);
    }
</style>