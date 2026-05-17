<script setup lang="ts">
    import {ref} from 'vue'; 
    import Navigation from '../Navigation';
    import Categories from '../Categories';
    import CheckStatusFeeds from '../CheckStatusFeeds';
    import {motion} from 'motion-v';
    import icons from './icons';

    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }
</script>

<template>
    <motion.aside 
        :initial="false"
        :animate="open ? {width: '300px', padding: '15px 55px 15px 15px'} : {width: '40px', padding: '0px'}"
        class="mobile_sidebar">
            <Navigation/>
            <hr/>
            <Categories/>
            <hr/>
            <CheckStatusFeeds/>
            <button 
                @click="handleOpen"
                class="expand_sidebar" 
                >
                <motion.img 
                    :initial="false"
                    :animate="open ? {rotate: '180deg'} : {rotate: '0deg'}"
                    class="arrow" 
                    :src="icons['arrow']"/>
            </button>
    </motion.aside>
</template>

<style scoped>
    .mobile_sidebar{
        width: 300px;
        height: calc(100vh - 70px);
        border-right: 1px solid var(--preset-color-grey-1);
        background-color: var(--preset-color-white-2);
        display: flex;
        flex-direction: column;
        grid-row: 1/3;
        grid-column: 1/2;
        gap: 15px;
        position: relative;
        overflow: hidden;
    }

    .mobile_sidebar > hr{
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

    @media(max-width: 915px){
        .mobile_sidebar{
            grid-row: 1/2;
            height: calc(100vh - 70px - 80px);
        }

        .expand_sidebar{
            height: calc(100vh - 70px - 80px);
        }
    }
</style>