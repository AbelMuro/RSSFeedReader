<script setup lang="ts">
    import icons from './icons';
</script>

<template>
    <button class="profile_button">
        <img class="profile_icon" :src="icons['user']">
    </button>
</template>

<style scoped>
    .profile_button{
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: none;
        background: var(--preset-linear-gradient-purple-black);
        cursor: pointer;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .profile_icon{
        width: 20px;
        object-fit: contain;
    }
</style>