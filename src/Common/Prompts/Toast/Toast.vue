<script setup lang="ts">
    import {motion, AnimatePresence} from 'motion-v';
    import {storeToRefs} from 'pinia'
    import {useToastStore} from '../../../Store';

    const toastStore = useToastStore();
    const {show, message} = storeToRefs(toastStore);

</script>

<template>
    <AnimatePresence>
        <motion.div 
            v-if="show"
            class="toast"
            :initial="{bottom: '-100px'}"
            :animate="{bottom: '40px'}"
            :exit="{bottom: '-100px'}"
            >
            <p class="message">{{message}}.</p>
        </motion.div>
    </AnimatePresence>
</template>

<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--preset-color-white-1);
        padding: 10px 20px;
        border-radius: 5px;
        opacity: 0.9;
        z-index: var(--fourth-layer);
        box-shadow: var(--preset-box-shadow-1)
    }

    .message{
        color: var(--preset-color-black-1);
        margin: 0px;
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
    }
</style>