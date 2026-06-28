<script setup lang="ts">
    import Article from '../Article';
</script>

<template>
    <section class="container">
        <Article v-for="(i) in [1,2,3,4,5]"/>
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: auto;
    }
</style>