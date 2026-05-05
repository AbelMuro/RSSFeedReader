<script setup lang="ts">
    import Switch from '../../../../../Common/Components/Switch';

    const itemName = 'text-updates';

    const watcher = (on : boolean) => {
        console.log('text -updates')
    }
</script>

<template>
    <section class="email">
        <Switch :item="itemName" :watcher="watcher"/>
        Receive Text Updates
    </section>
</template>

<style scoped>
    .email{
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