<script setup lang="ts">
    import {ref} from 'vue';
    import AddArticleDialog from '../../AddArticleDialog';
    import icons from './icons';

    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }
</script>

<template>
    <button class="article_button" @click="handleOpen">
        <img :src="icons['plus']"/>
    </button>
    <AddArticleDialog v-model="open" :handleOpen="handleOpen"/>
</template>

<style scoped>
    .article_button{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--preset-color-grey-1);
        background-color: transparent;
        cursor: pointer;
    }

    .article_button:hover{
        background-color: var(--preset-color-grey-2);
    }

    .article_button:active{
        background-color: var(--preset-color-grey-3);
    }

    .article_button > img{
        width: 20px;
        object-fit: contain;
    }


</style>