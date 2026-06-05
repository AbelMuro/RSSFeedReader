<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {useRoute, useRouter} from 'vue-router';
    import icons from './icons';

    const route = useRoute();
    const router = useRouter();
    const link = ref<string>('Feed');

    const handleLink = (newLink : string) => {
        router.push(newLink);
    }

    const handleSelectedStyle = (currentLink : string) => {
        return link.value.includes(currentLink) ? {backgroundColor: '#dedede', color: 'black'} : {};
    }

    watch(() => route.path, (path) => {
        link.value = path;
    })

</script>

<template>
    <ul class="nav_links">
        <li>
            <img class="nav_logo" :src="icons['logo']">
            Frontpage
        </li>
        <li>
            <button class="nav_link" @click="handleLink('/feed/all')" :style="handleSelectedStyle('/feed/all')">
                Feed
            </button>
        </li>
        <li>
            <button class="nav_link" @click="handleLink('/digest')" :style="handleSelectedStyle('/digest')">
                Digest
            </button>
        </li>
        <li>
            <button class="nav_link" @click="handleLink('/discover')":style="handleSelectedStyle('/discover')">
                Discover
            </button>
        </li>
    </ul>
</template>

<style scoped>
    .nav_links{
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .nav_links > li:nth-of-type(1){
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: 800;
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        margin-right: 15px;
    }

    .nav_logo{
        width: 50px;
        object-fit: contain;
    }

    .nav_link{
        cursor: pointer;
        color: var(--preset-color-grey-1);
        padding: 5px 10px;
        background-color: transparent;
        border: none;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        border-radius: 5px;
    }

    .nav_link:hover{
        background-color: var(--preset-color-grey-2);
    }

</style>