<script setup lang="ts">
    import icons from './icons';
</script>

<template>
    <button class="newest">
        <img :src="icons['signal']"/>
        Newest
    </button>
</template>

<style scoped>
    .newest{
        height: 30px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--preset-color-grey-1);
        border-radius: 10px;
        color: var(--preset-color-black-4);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .newest > img {
        width: 10px;
        object-fit: contain;
        transform: rotate(-90deg), 
    }
</style>