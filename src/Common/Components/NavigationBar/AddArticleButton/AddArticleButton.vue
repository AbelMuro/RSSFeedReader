<script setup lang="ts">
    import {ref} from 'vue';
    import Form from './Form';
    import {motion, AnimatePresence} from 'motion-v'
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
                            Add Article
                        </h1>
                        <button class="dialog_close" @click="handleOpen">
                            <img :src="icons['close']"/>
                        </button>
                        <Form/>
                </motion.dialog>
        </motion.div>
    </AnimatePresence>

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


    .overlay{
        position: fixed;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: var(--preset-color-black-2);
    }

    .dialog{
        width: 400px;
        height: 500px;
        padding: 25px;
        border-radius: 10px;
        background-color: var(--preset-color-white-1);
        border: none;
        display: grid;
        align-content: start;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
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