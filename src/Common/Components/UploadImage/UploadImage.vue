<script setup lang="ts">
    import {ref, watch} from 'vue';

    const src = ref<string>('');

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files[0];
        src.value = URL.createObjectURL(uploadedFile);
    }

</script>

<template>
    <fieldset class="fieldset">
        <label class="input_container" for="file">
            Upload Photo
            <input 
                type="file" 
                class="input"
                accept="image/png, image/jpeg, image/jpg"
                id="file" 
                name="file" 
                @change="handleChange"/>
        </label>
        <img class="file_uploaded" v-if="src" :src="src">
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
        width: 100%;
        height: 40px;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-1);
        background-repeat: no-repeat;
        border-radius: 5px;
        padding: 0px 10px;
        border: none;        
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }    

    .input_container:hover{
       background-position: -100px 0px;
    }

    .input_container:active{
        background-position: -150px 0px;
    }

    .file_uploaded{
        width: 80px;
        object-fit: contain;
        align-self: center;
    }

    .input{
        display: none;
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