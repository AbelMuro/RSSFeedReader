<script setup lang="ts">
    import {ref} from 'vue';

    const content = ref<string>('');
</script>

<template>
    <fieldset class="fieldset">
        <label for="content" class="label">
            Enter Content
        </label>
        <textarea id="content" class="textarea" v-model="content" name="content" />
    </fieldset>
</template>

<style scoped>
    .fieldset{
        width: 100%;
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
    }  
    
    .label{
        color: var(--preset-text-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .textarea{
        width: 100%;
        height: 150px;
        border-radius: 5px;
        border: 1px solid var(--preset-color-grey-1);
        padding: 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        resize: none;
    }

    .textarea:focus{
        outline: none;
        border: 1px solid var(--preset-color-black-1);
    }
</style>