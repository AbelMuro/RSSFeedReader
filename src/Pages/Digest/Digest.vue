<script setup lang="ts">
    import {RouterView} from 'vue-router';
    import SideBar from './SideBar';
</script>

<template>
    <section class="container">
        <SideBar/>
        <RouterView/>
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        display: grid;
        grid-template-columns: auto 1fr;
    }

    .title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
    }
</style>

