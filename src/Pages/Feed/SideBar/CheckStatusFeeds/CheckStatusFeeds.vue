<script setup lang="ts">
    import icons from './icons';
</script>

<template>
    <div class="status">
        <img class="status_icons" :src="icons['checkmark']"/>
        All Feeds healthy
    </div>
</template>

<style scoped>
    .status{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--preset-color-black-4);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .status_icons{
        width: 20px;
        height: 20px;
    }
</style>