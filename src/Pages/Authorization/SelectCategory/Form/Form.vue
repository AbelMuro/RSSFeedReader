<script setup lang="ts">
    import Category from '../../../../Pages/CreateArticle/Form/Category';
    import { VueSpinner } from 'vue3-spinners';
    import { useRouter } from 'vue-router';
    import {useToastStore} from '../../../../Store';
    import {ref} from 'vue';

    const loading = ref<boolean>(false);
    const error = ref<string>('')
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e: SubmitEvent) => {
        try{
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const categoriesElement = form.elements.namedItem('categories') as HTMLInputElement;
            const categories = categoriesElement.value;

            if(!categories.length)
                error.value = "Can't be empty."

            const response = await fetch('http://localhost:4000/update-categories', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({categories})
            });

            const results = await response.text();
            console.log(results);
            showToast(results);

            if(response.status === 200)
                router.push('/profile');
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }
</script>

<template>
    <form class="form" @submit="handleSubmit">
        <Category v-model="error"/>
        <p v-if="error" class="error_message">
            {{error}}
        </p>
        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px"/>
            <span v-else>Submit Category</span>
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px
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

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-1);        
        background-position: 0px 0px;
        background-repeat: no-repeat;
        border: none;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
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
</style>