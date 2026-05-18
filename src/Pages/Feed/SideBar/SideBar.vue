<script setup lang="ts">
    import {useMediaQuery} from '../../../Common/Hooks';
    import MobileSideBar from './MobileSideBar';
    import Navigation from './Navigation';
    import Categories from './Categories';
    import CheckStatusFeeds from './CheckStatusFeeds';

    const mobile = useMediaQuery('(max-width: 1025px)');


</script>

<template>
    <aside class="sidebar" v-if="!mobile">
        <Navigation/>
        <hr/>
        <Categories/>
        <hr/>
        <CheckStatusFeeds/>
    </aside>
    <MobileSideBar v-else/>
</template>

<style scoped>
    .sidebar{
        width: 300px;
        height: calc(100vh - 70px);
        padding: 15px;
        border-right: 1px solid var(--preset-color-grey-1);
        background-color: var(--preset-color-white-2);
        display: flex;
        flex-direction: column;
        grid-row: 1/3;
        grid-column: 1/2;
        gap: 15px;
        position: relative;
    }

    .sidebar > hr{
        width: 100%;
        height: 1px;
        border: none;
        margin: 0px;
        padding: 0px;
        background-color: var(--preset-color-grey-1);
    }

    .expand_sidebar{
        width: 40px;
        height: calc(100vh - 70px);
        border: none;
        background-color: var(--preset-color-grey-2);
        position: absolute;
        top: 0px;
        right: 0px;
        cursor: pointer;
    }

    .arrow{
        width: 30px;
        object-fit: contain;
    }

    @media(max-width: 1025px){
        .sidebar{
            padding-right: 50px;
        }
    }

</style>