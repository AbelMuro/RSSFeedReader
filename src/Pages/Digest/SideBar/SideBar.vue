<script setup lang="ts">
    import {useMediaQuery} from '../../../Common/Hooks';
    import MobileSideBar from './MobileSideBar';
    import Links from './Links';

    const mobile = useMediaQuery('(max-width: 915px)');

</script>

<template>
    <section class="sidebar" v-if="!mobile">
        <Links/>
    </section>
    <MobileSideBar v-else/>
</template>

<style scoped>
    .sidebar{
        width: 300px;
        height: calc(100vh - 70px);
        border-right: 1px solid var(--preset-color-grey-1);
        background-color: var(--preset-color-white-2);
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .links{
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    .link{
        width: 100%;
        height: 40px;
        text-align: left;
        border-radius: 5px;
        padding: 0px 15px;
        background-color: transparent;
        border: none;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .link > img{
        width: 25px;
        object-fit: contain;
    }
</style>