<script setup lang="ts">
    import {ref, watch} from 'vue';

    const imageURL = ref<string>('');
    const imageBlob = ref<Blob>();

    const handleFile = (e : ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files[0];
        imageURL.value = URL.createObjectURL(uploadedFile);
        imageBlob.value = uploadedFile;
    }

</script>

<template>
    <fieldset class="fieldset">
        <label class="label">
            Upload Cover Image
        </label>
        <label class="upload" for="upload">
            <input type="file" id="upload" class="input" @change="handleFile"/>
            Upload Image
        </label>
        <input type="hidden" name="coverImage" :value="imageBlob"/>
        <img class="uploaded_image" :src="imageURL" v-if="imageURL"/>
    </fieldset>
</template>

<style scoped>
    .fieldset{
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: none;
        margin: 0px;
        padding: 0px;
    }
    
    .label{
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
    }

    .upload{
        width: 100%;
        height: 50px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-1);
        background-position: 0px 0px;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
        
        
    .upload:hover{
       background-position: -100px 0px;
    }

    .upload:active{
        background-position: -150px 0px;
    }

    .input{
        display: none;
    }

    .uploaded_image{
        width: 200px;
        object-fit: cover;
        border-radius: 10px;
        margin: auto;
    }
</style>