<script setup lang="ts">
    import {useRouter} from 'vue-router';


    const router = useRouter();

    const handleOpen = () => {
        router.push('/create-article');
    }

</script>

<template>
    <button class="link" @click="handleOpen">
        Add Article
    </button>
</template>

<style scoped>
    .link{
        cursor: pointer;
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        text-align: left;
        background-color: transparent;
        border: 1px solid var(--preset-color-blue-1);
        cursor: pointer;
        color: var(--preset-color-blue-1);
        border-radius: 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>