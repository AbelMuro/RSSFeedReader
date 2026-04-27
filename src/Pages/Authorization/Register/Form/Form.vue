<script setup lang="ts">
    import {ref} from 'vue';
    import EnterEmail from '../../../../Common/Components/EnterEmail';
    import EnterPassword from '../../../../Common/Components/EnterPassword';
    import ReEnterPassword from '../../../../Common/Components/ReEnterPassword';
    import {useToastStore} from '../../../../Store';
    import {useRouter} from 'vue-router';
    import UploadImage from './UploadImage'

    const error = ref<string>('');
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e : SubmitEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;        
        const password = form.elements.namedItem('password') as HTMLInputElement;
        const reEnterPassword = form.elements.namedItem('reEnterPassword') as HTMLInputElement;

        if(password.value !== reEnterPassword.value){
            error.value = "Passwords don't match.";
            return; 
        }
        else
            error.value = "";

        const email = form.elements.namedItem('email') as HTMLInputElement;
        const image = form.elements.namedItem('file') as HTMLInputElement;
        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('image', image.value);
        
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: formData
        });

        if(response.status === 200){
            showToast('Account has been created');
            router.push('/');
        }
        else{
            const result = await response.text();
            console.log(result);
            showToast(result);
        }

    }


</script>

<template>  
    <form class="form" @submit="handleSubmit">
        <EnterEmail/>
        <EnterPassword/>
        <ReEnterPassword />
        <UploadImage/>
        <p class="error" v-if="error">
            {{error}}
        </p>
        <button class="submit">
            Sign in
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black);
        border: none;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        cursor: pointer;
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