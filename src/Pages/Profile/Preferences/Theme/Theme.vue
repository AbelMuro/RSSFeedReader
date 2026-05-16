<script setup lang="ts">
    import Switch from '../../../../Common/Components/Switch';

    const itemName = 'dark-theme';

    const watcher = (on : boolean) => {
        localStorage.setItem(itemName, JSON.stringify(on));
    }
</script>

<template>
    <section class="theme">
        <Switch :item="itemName" :watcher="watcher"/>
        Display Dark Theme
    </section>
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

   
</style>