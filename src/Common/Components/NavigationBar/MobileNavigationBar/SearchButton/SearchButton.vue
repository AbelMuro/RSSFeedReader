<script setup lang="ts">
    import {AnimatePresence, motion} from 'motion-v';
    import SearchBar from '../../../SearchBar';
    import {ref} from 'vue';
    import icons from './icons';

    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }
</script>

<template>
    <button class="link" @click="handleOpen">
        Search
    </button>
    <AnimatePresence>
        <motion.div 
            v-if="open"
            class="overlay" 
            :initial="{opacity: 0}" 
            :animate="{opacity: 1}"
            :exit="{opacity: 0}">
                <motion.dialog 
                    class="dialog" 
                    :initial="{scale: 0}"
                    :animate="{scale: 1}"
                    :exit="{scale: 0}"
                    :open="true">
                        <h1 class="dialog_title">
                            Search
                        </h1>
                        <div class="dialog_search">
                            <SearchBar/>
                        </div>
                        <button class="dialog_close" @click="handleOpen">
                            <img :src="icons['close']"/>
                        </button>
                </motion.dialog>
        </motion.div>
    </AnimatePresence>
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
        border-radius: 10px;
        cursor: pointer;
        color: var(--preset-color-blue-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .overlay{
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: var(--fifth-layer);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .dialog{
        width: 270px;
        height: fit-content;
        padding: 25px;
        border-radius: 10px;
        background-color: var(--preset-color-white-1);
        border: none;
        display: grid;
        align-content: start;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        box-shadow: var(--preset-box-shadow-1);
    }

    .dialog_title{
        grid-column: 1/2;
        grid-row: 1/2;
        margin: 0px;
        text-align: center;
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
    }

    .dialog_search{
        grid-column: 1/3;
        grid-row: 2/3;
    }

    .dialog_close{
        grid-column: 2/3;
        grid-row: 1/2;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--preset-color-grey-1);
        background-color: var(--preset-color-white-1);
        justify-self: end;
        cursor: pointer;
    }

    .dialog_close:hover{
        background-color: var(--preset-color-white-2);
    }

    .dialog_close:active{
        background-color: var(--preset-color-white-3);
    }

    .dialog_close > img{
        width: 15px;
        object-fit: contain;
    }
</style>