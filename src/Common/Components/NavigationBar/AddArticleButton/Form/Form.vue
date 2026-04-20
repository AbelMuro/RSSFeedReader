<script setup lang="ts">
    import TitleInput from './TitleInput';
</script>

<template>
    <form class="form">
        <TitleInput/>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        grid-column: 1/3;
        grid-row: 2/3;
    }
</style>