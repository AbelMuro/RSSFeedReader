<script setup lang="ts">
    import {ref, watch} from 'vue';
    import type { WatchCallback } from 'vue';
    import {motion} from 'motion-v';

    const {watcher, item} = defineProps<{
        watcher: WatchCallback<boolean, boolean>,
        item: string
    }>();

    const initialState : string | null = localStorage.getItem(item);
    const on = ref<boolean>(initialState ? JSON.parse(initialState) : false);

    const handleSwitch = () => {
        on.value = !on.value;
    }

    watch(on, watcher);

</script>

<template>
        <motion.div 
            class="theme_switch"
            @click="handleSwitch"
            :initial="false"
            :animate="on ? {backgroundColor: '#001dc4'} : {backgroundColor: ''}"
            >
            <motion.div 
                class="theme_dot"             
                :initial="false"
                :animate="on ? {x: 27, backgroundColor: '#dfdfdf'} : {x: 0, backgroundColor: ''}"
            />
        </motion.div>
</template>

<style scoped>
    .theme{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .theme_switch{
        width: 60px;
        height: 30px;
        padding: 5px;
        border-radius: 15px;
        background-color: var(--preset-color-grey-2);
        cursor: pointer;
    }

    .theme_switch:hover{
        background-color: var(--preset-color-grey-3);
    }

    .theme_switch:active{
        background-color: var(--preset-color-grey-1);
    }

    .theme_dot{
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: var(--preset-color-blue-1);
    }
</style>