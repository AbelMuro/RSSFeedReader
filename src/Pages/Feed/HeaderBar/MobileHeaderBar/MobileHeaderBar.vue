<script setup lang="ts">
    import {ref} from 'vue';
    import {motion} from 'motion-v';
    import GridLayoutButtons from '../GridLayoutButtons';
    import NewestButton from '../NewestButton';
    import RefreshButton from '../RefreshButton';
    import MarkAllReadButton from '../MarkAllReadButton';
    import icons from './icons';

    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }

</script>

<template>
    <motion.header 
        :initial="false"
        :animate="open ? {height: '400px', padding: '55px 25px 25px 25px'} : {height: '40px', padding: '0px'}"
        class="mobile_header">
        <button class="mobile_header_expand" @click="handleOpen">
            <motion.img 
                :initial="false"
                :animate="open ? {rotate: '0deg'} : {rotate: '180deg'}"
                :src="icons['arrow']"/>
        </button>
        <section>
            <h1 class="mobile_header_title">
                All Items
            </h1>
            <p class="mobile_header_unread">
                47 unread
            </p>
        </section>
        <GridLayoutButtons/>
        <NewestButton/>
        <RefreshButton/>
        <MarkAllReadButton/>
    </motion.header>
</template>

<style scoped>
    .mobile_header{
        width: 100%;
        padding: 55px 25px 25px 25px;
        border-top: 1px solid var(--preset-color-grey-1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        grid-column: 1/3;
        position: relative;
        overflow: hidden;
    }

    .mobile_header_title{
        margin: 0px;
        color: var(--preset-color-black-2);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: 600;
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        white-space: nowrap;
    }

    .mobile_header_unread{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .mobile_header > section:nth-of-type(1){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }    


    .mobile_header_button{
        width: 90%;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
    }

    .mobile_header_expand{
        width: 100%;
        height: 50px;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: var(--preset-color-grey-2);
        border: none;
        cursor: pointer;
    }

    .mobile_header_expand > img{
        width: 30px;
        object-fit: contain;
    }
</style>