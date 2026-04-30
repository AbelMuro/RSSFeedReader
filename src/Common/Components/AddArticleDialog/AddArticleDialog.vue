<script setup lang="ts">
    import {PropType} from 'vue';
    import Form from './Form';
    import {motion, AnimatePresence} from 'motion-v';
    import icons from './icons';

    const open = defineModel();
    const {handleOpen} = defineProps({
        handleOpen: {
            type: Function as PropType<(payload: PointerEvent) => void>,
            required: true
        }
    });
    
</script>

<template>
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

    .overlay{
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: var(--preset-color-black-2);
        z-index: var(--fifth-layer);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .dialog{
        width: 400px;
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

    @media(max-width: 450px){
        .dialog{
            width: 300px;
            grid-template-columns: 1fr auto;
        }
    }
</style>