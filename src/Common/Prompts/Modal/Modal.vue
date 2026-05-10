<script setup lang="ts">
    import {motion, AnimatePresence} from 'motion-v';

    const open = defineModel<{open: boolean}>();


</script>

<template>
    <AnimatePresence>
        <motion.div 
            class="overlay" 
            v-if="open"
            :initial="{opacity: 0}"
            :animate="{opacity: 1}"
            :exit="{opacity: 0}"
            >
            <motion.dialog 
                open="true" 
                class="dialog"
                :initial="{scale: 0}"
                :animate="{scale: 1}"
                :exit="{scale: 0}"
                >
                <slot/>
            </motion.dialog>
        </motion.div>
    </AnimatePresence>
</template>

<style scoped>
    .overlay{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: var(--fifth-layer);
        background-color: var(--preset-color-transparent-black);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dialog{
        width: 400px;
        height: fit-content;
        border-radius: 15px;
        border: none;
        padding: 25px;
        position: static;
        background-color: var(--preset-color-white-1);
        box-shadow: var(--preset-box-shadow-1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
</style>