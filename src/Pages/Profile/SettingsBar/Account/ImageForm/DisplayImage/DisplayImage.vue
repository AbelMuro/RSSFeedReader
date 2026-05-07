<script setup lang="ts">
    const src = defineModel<string>();
</script>

<template>
    <img class="image" :src="src"> 
</template>

<style scoped>
    .image{
        width: 160px;
        object-fit: contain;
        align-self: center;
    }
</style>