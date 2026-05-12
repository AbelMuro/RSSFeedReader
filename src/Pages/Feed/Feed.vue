<script setup lang="ts">
    import { RouterView } from 'vue-router';
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
        display: flex;
    }
</style>