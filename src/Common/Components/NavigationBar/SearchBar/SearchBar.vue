<script setup lang="ts">
    import {ref} from 'vue';
    import icons from './icons';

    const query = ref<string>('');

    const handleClear = () => {
        query.value = '';
    }
</script>

<template>
    <div class="search">
        <img class="search_icon" :src="icons['magnifying']"/>
        <input class="search_input" placeholder="Search articles..." v-model="query"/>
        <button class="search_clear" @click="handleClear">
            /
        </button>
    </div>
</template>

<style scoped>
    .search{
        width: 220px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid var(--preset-color-grey-1);
        background-color: rgb(235, 235, 235);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 10px;
    }

    .search:hover{
        background-color: var(--preset-color-grey-2);
    }

    .search_icon{
        width: 20px;
        object-fit: contain;
    }

    .search_input{
        width: 130px;
        height: 100%;
        border: none;
        background-color: transparent;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .search_input:focus{
        outline: none;
    }

    .search_input::placeholder{
        color: var(--preset-color-grey-1);
    }

    .search_clear{
        width: 18px;
        height: 20px;
        border-radius: 5px;
        border: 1px solid var(--preset-color-grey-1);
        color: var(--preset-color-grey-1);
        background-color: var(--preset-color-white-1);
        cursor: pointer;
    }

    .search_clear:hover{
        background-color: var(--preset-color-white-2);
    }

    .search_clear:active{
        background-color: var(--preset-color-white-3);
    }
</style>