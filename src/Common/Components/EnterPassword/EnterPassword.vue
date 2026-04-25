<script setup lang="ts">
    import {ref, watch} from 'vue';
    import icons from './icons';

    const password = ref<string>('');
    const error = ref<string>('');
    const visible = ref<boolean>(false);

    const handleVisible = () => {
        visible.value = !visible.value;
    }

    const handleBlur = (e: BlurEvent<HTMLInputElement>) => {
        const input = e.target.value;
        if(!input.length){
            error.value = "Can't be empty."
            e.target.setCustomValidity(" ");
        }
        else{
            error.value = "";
            e.target.setCustomValidity("")
        }
            

    }

    const handleInvalid = (e : InvalidEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        e.target.setCustomValidity(" ");
        if(isEmpty)
            error.value = "Can't be empty."
        else            
            error.value = "";
    }

    watch(password, (_, newValue) => {
        if(newValue.length)
            error.value = "";   
    })


</script>

<template>
    <fieldset class="fieldset">
        <label class="label" for="password">
            Enter password
        </label>
        <fieldset class="input_container">
            <input 
                class="input" 
                @blur="handleBlur"
                @invalid="handleInvalid"
                v-model="password"
                :type="visible ? 'text' : 'password'" 
                id="password" 
                name="password"
                required/>
                    <img v-if="visible" :src="icons['invisible']" class="input_icon" @click="handleVisible"/>
                    <img v-else :src="icons['visible']"  class="input_icon" @click="handleVisible"/>                
        </fieldset>
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

    .input_container{
        border: none;
        margin: 0px;
        padding: 0px;
        width: 100%;
        position: relative;
    }

    .input_icon{
        width: 20px;
        object-fit: contain;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
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

    .input::-ms-reveal, .input::-ms-clear{
        display: none;
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