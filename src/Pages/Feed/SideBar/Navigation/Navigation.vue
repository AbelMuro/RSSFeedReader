<script setup lang="ts">

</script>

<template>
    <div class="navigation">
        <button class="option">
            All Items
        </button>
        <button class="option">
            Saved
        </button>
    </div>
</template>

<style scoped>
    .navigation{
        display: flex;
        flex-direction: column;
        gap: 5px
    }

    .option{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        background-color: var(--preset-color-transparent-blue);
        border: none;
        color: var(--preset-color-blue-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>