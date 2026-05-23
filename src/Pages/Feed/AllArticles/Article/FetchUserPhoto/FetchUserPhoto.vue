<script setup lang="ts">
    const {accountId} = defineProps<{accountId: string}>()
</script>

<template>
    <img class="OP_image" :src="`http://localhost:4000/get-image/${accountId}`"/>
</template>

<style scoped>
    .OP_image{
        width: 30px;
        object-fit: contain;
    }
</style>

