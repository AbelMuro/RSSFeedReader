<script setup lang="ts">
    import Sidebar from './Sidebar';
    import {RouterView} from 'vue-router';
</script>

<template>
    <section class="container">
        <Sidebar/>
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