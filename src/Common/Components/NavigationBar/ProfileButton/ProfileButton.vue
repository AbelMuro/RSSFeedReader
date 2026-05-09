<script setup lang="ts">
    import {useRouter} from 'vue-router';
    import icons from './icons';

    const router = useRouter();

    const handleRoute = () => {
        router.push('/profile');
    }
</script>

<template>
    <button class="profile_button" @click="handleRoute">
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
        background: var(--preset-linear-gradient-purple-black-1);
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