<script setup lang="ts">
    import {ref, watch} from 'vue';

    const title = ref<string>('');
    const error = ref<string>('');

    const handleBlur = (e: BlurEvent<HTMLInputElement>) => {
        const input = e.target.value;
        e.target.setCustomValidity(" ");
        if(!input.length)
            error.value = "Can't be empty."
        else
            error.value = "";

    }

    const handleInvalid = (e : InvalidEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(" ");
        if(isEmpty)
            error.value = "Can't be empty."
        else            
            error.value = "";
    }

    watch(title, (_, newValue) => {
        if(newValue.length)
            error.value = "";   
    })

</script>

<template>
    <fieldset class="fieldset">
        <label class="label" for="title">
            Enter Title
        </label>
        <input 
            id='title' 
            type="text" 
            class="input" 
            v-model="title" 
            @blur="handleBlur"
            @invalid="handleInvalid"
            name="title" 
            required>
        <p v-if="error" class="error">
            {{error}}
        </p>
    </fieldset>
</template>

<style scoped>
    .fieldset{
        border: none;
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .label{
        color: var(--preset-text-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .input{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid var(--preset-color-grey-1);
        padding: 0px 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .input:focus{
        outline: none;
        border: 1px solid var(--preset-color-black-1);
    }

    .error{
        margin: 0px;
        color: var(--preset-color-red-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>