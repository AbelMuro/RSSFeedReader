<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import SideBar from './SideBar';
    import HeaderBar from './HeaderBar';
</script>

<template>
    <section class="container">
        <SideBar/>
        <HeaderBar/>
        <RouterView/>
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 80px 1fr;
    }
</style>