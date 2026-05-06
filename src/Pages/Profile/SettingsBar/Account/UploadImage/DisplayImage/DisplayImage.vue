<script setup lang="ts">
    const src = defineModel<string>();
</script>

<template>
    <img class="file_uploaded" :src="src"> 
</template>

<style scoped>
    .file_uploaded{
        width: 120px;
        object-fit: contain;
        align-self: center;
    }
</style>