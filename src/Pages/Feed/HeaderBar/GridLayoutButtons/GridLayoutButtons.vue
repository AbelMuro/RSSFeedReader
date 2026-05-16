<script setup lang="ts">
    import {useLayoutStore} from '../../../../Store';
    import { storeToRefs } from 'pinia';
    import icons from './icons';

    const store = useLayoutStore();
    const {layout} = storeToRefs(store);
    const {changeLayout} = store;

    const handleStyles = (option: string) => {
        return option === layout.value ? {backgroundColor: '#dfdfdf'} : {}
    }

    const handleLayout = (layout: string) => {
        changeLayout(layout);
    }



</script>

<template>
    <section class="grid">
        <button @click="handleLayout('align-justify')" :style="handleStyles('align-justify')">
            <img :src="icons['threeBars']"/>
        </button>
        <button @click="handleLayout('grid')" :style="handleStyles('grid')">
            <img :src="icons['squares']"/>
        </button>
        <button @click="handleLayout('align-justify-less-content')" :style="handleStyles('align-justify-less-content')">
            <img :src="icons['fourBars']"/>
        </button>
    </section>
</template>

<style scoped>
    .grid{
        display: flex;
    }

    .grid > button{
        width: 40px;
        height: 40px;
        border: 1px solid var(--preset-color-grey-1);
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .grid > button:hover{
        background-color: var(--preset-color-white-2);
    }

    .grid > button:active{
        background-color: var(--preset-color-grey-2);
    }

    .grid > button:nth-of-type(1){
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .grid > button:nth-of-type(3){
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .grid > button > img{
        width: 20px;
        object-fit: contain;
    }
</style>