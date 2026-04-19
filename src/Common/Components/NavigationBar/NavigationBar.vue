<script setup lang="ts">
    import Links from './Links';
    import SearchBar from './SearchBar';

</script>

<template>
    <nav class="nav">
        <Links/>
        <SearchBar/>
    </nav>
</template>

<style scoped>
    .nav{
        width: 100%;
        height: 70px;
        padding: 0px 15px;
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>