<script setup lang="ts">
    import {ref, watch} from 'vue';

    const email = ref<string>('');
    const error = ref<string>('');

    const handleBlur = (e: BlurEvent<HTMLInputElement>) => {
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

    const handleInvalid = (e : InvalidEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        e.target.setCustomValidity(" ");
        if(isEmpty)
            error.value = "Can't be empty."
        else if(isInvalid)
            error.value = "Invalid email."
        else            
            error.value = "";
    }

    watch(email, (_, newValue) => {
        if(newValue.length){
            error.value = "";  
        }
             
    })

       
</script>

<template>
    <fieldset class="fieldset">
        <label class='label' for="email">Enter Email</label>
        <input 
            type="email" 
            class="input"
            @blur="handleBlur"
            @invalid="handleInvalid"
            id="email" 
            name="email" 
            v-model="email"
            required/>

        <p class="error" v-if="error">
            {{error}}
        </p>
    </fieldset>
</template>

<style scoped>
    .fieldset{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        border: none;
        margin: 0px;
        padding: 0px;
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