<script setup lang="ts">
    import {ref} from 'vue';
    import {useToastStore} from '../../../Store';
    import { VueSpinner } from 'vue3-spinners';
    import TitleInput from './TitleInput';
    import ContentTextArea from './ContentTextArea';
    import Category from './Category';
    import UploadCoverImage from './UploadCoverImage';

    const open = defineModel();

    const loading = ref<boolean>(false);
    const error = ref<string>('');
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e: SubmitEvent) => {
        try{
            e.preventDefault();
            loading.value = true;
            const formElement = e.target as HTMLFormElement;
            const titleElement = formElement.elements.namedItem('title') as HTMLInputElement;
            const contentElement = formElement.elements.namedItem('content') as HTMLTextAreaElement;
            const categoryElement = formElement.elements.namedItem('categories') as HTMLInputElement;
            const coverImage = formElement.elements.namedItem('coverImage') as HTMLInputElement;
            const title = titleElement.value;
            const content = contentElement.value;
            const category = categoryElement.value;
            const coverImageFile = coverImage?.files?.[0] || '';
            const form = new FormData();
            form.append('title', title);
            form.append('content', content);
            form.append('category', category);
            form.append('file', coverImageFile);

            if(!category.length){
                error.value = "Can't be empty.";
                return;
            }
 
            const response = await fetch('http://localhost:4000/add-article', {
                method: 'POST',
                body: form,
                credentials: 'include'
            });

            const results = await response.text();
            console.log(results);
            showToast(results);

            if(response.status === 200)
                open.value = false;
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
        finally{
            loading.value = false;
        }
    }
</script>

<template>
    <form class="form" @submit="handleSubmit">
        <TitleInput/>
        <UploadCoverImage/>
        <ContentTextArea/>
        <Category :limit="3" v-model="error"/>
        <p class="error_message" v-if="error">
            {{error}}
        </p>
        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px"/>
            <span v-else>Create Article</span>
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        grid-column: 1/3;
        grid-row: 2/3;
    }

    .submit{
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-1);
        background-repeat: no-repeat;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .submit:hover{
       background-position: -100px 0px;
    }

    .submit:active{
        background-position: -150px 0px;
    }

    .error_message{
        color: var(--preset-color-red-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        margin: 0px;
    }
</style>