<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import DisplayImage from './DisplayImage';
    import icons from '../../../icons';

    const src = ref<string>(icons['placeholder']);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files[0];
        updateImage(uploadedFile);
        src.value = URL.createObjectURL(uploadedFile);
    }
    
    const updateImage = async (image : Blob) => {
        try{
            const formData = new FormData();
            formData.append('image', image);

            const response = await fetch('http://localhost:4000/update-image', {
                method: 'PUT',
                body: formData
            });

            const results = await response.text();
            console.log(results)
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    }

    onMounted(async () => {
        try{
            const response = await fetch(`http://localhost:4000/get-image?cache=${Date.now()}`, {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const results = await response.blob();
                src.value = URL.createObjectURL(results);
            }
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    });

</script>

<template>
    <form class="form">
        <fieldset class="fieldset">
            <DisplayImage v-model="src"/>     
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
        </fieldset>
    </form>
</template>

<style scoped>
    .form{
        width: 400px
    }

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
        background-color: var(--preset-color-black-3);
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