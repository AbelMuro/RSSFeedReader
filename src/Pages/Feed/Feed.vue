<script setup lang="ts">
    import SideBar from './SideBar';
</script>

<template>
    <section class="container">
        <SideBar/>
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        display: flex;
    }
</style>