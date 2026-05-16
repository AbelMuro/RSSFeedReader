<script setup lang="ts">
    import Switch from '../../../../Common/Components/Switch';

    const itemName = 'tag-5-newest-articles';

    const watcher = (on : boolean) => {
        localStorage.setItem(itemName, JSON.stringify(on));
    }

</script>

<template>
    <section class="tag_articles">
        <Switch :item="itemName" :watcher="watcher"/>
        Tag 5 Newest Articles
    </section>
</template>

<style scoped>
    .tag_articles{
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