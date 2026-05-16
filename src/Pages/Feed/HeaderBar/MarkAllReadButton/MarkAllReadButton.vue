<script setup lang="ts">

</script>

<template>
    <button class="read">
        Mark all read
    </button>
</template>

<style scoped>
    .read{
        height: 30px;
        padding: 7px 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--preset-color-grey-1);
        border-radius: 10px;
        color: var(--preset-color-black-4);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
    }

    .read:hover{
        background-color: var(--preset-color-white-2);
    }

    .read:active{
        background-color: var(--preset-color-grey-2);
    }
</style>
