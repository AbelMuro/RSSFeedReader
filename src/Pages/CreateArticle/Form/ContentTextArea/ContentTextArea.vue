<script setup lang="ts">
    import {ref, watch} from 'vue';
    import OverlayText from './OverlayText';

    const content = ref<string>('');
    const error = ref<string>('');     


    const handleBlur = (e : BlurEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        
        if(!input.length){
           error.value = "Can't be empty.";
           e.target.setCustomValidity(" ");  
        }
        else{
            error.value = "";
            e.target.setCustomValidity("");
        }
    }   

    const handleInvalid = (e : InvalidEvent<HTMLTextAreaElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(" ");
        if(isEmpty)
            error.value = "Can't be empty."
        else            
            error.value = "";
    }

    watch(content, (_, newValue) => {
        if(newValue.length)
            error.value = "";   
    })
</script>

<template>
    <fieldset class="fieldset">
        <label for="content" class="label">
            Enter Content
        </label>
        <fieldset class="inner_fieldset">
            <OverlayText v-model="content"/>
            <textarea 
                id="content" 
                @blur="handleBlur"
                @invalid="handleInvalid"
                class="textarea" 
                v-model="content" 
                name="content" 
                required/>
        </fieldset>
        <p v-if="error" class="error">
            {{ error }}
        </p>
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

    .inner_fieldset{
        width: 100%;
        height: 350px;
        padding: 0px;
        border: none;
        position: relative;
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
        height: 315px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top: none;
        border-left: 1px solid var(--preset-color-grey-1);
        border-right: 1px solid var(--preset-color-grey-1);
        border-bottom: 1px solid var(--preset-color-grey-1);
        padding: 10px;
        color: transparent;
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