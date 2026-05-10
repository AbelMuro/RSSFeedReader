<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import EnterPassword from '../../../../Common/Components/EnterPassword';
    import ReEnterPassword from '../../../../Common/Components/ReEnterPassword';
    import {useToastStore} from '../../../../Store';
    import {VueSpinner} from 'vue3-spinners';

    const loading = ref<boolean>(false);
    const error = ref<string>('')
    const router = useRouter();
    const route = useRoute();
    const resetToken = route.params.resetToken;
    const toastStore = useToastStore();
    const {showToast} = toastStore;

    const handleSubmit = async (e : SubmitEvent) => {
        try{
            e.preventDefault();
            loading.value = true;
            const form = e.target as HTMLFormElement;
            const password = form.elements.namedItem('password') as HTMLInputElement;
            const reEnterPassword = form.elements.namedItem('reEnterPassword') as HTMLInputElement;

            if(password.value !== reEnterPassword.value){
                error.value = 'Passwords do not match';
                return;
            }
            else
                error.value = '';

            const response = await fetch('http://localhost:4000/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: password.value,
                    resetToken
                })
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                showToast(result);
                router.push('/')
            }
                    
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
            showToast(message);
        }
        finally{
            loading.value = false;
        }
    }
</script>

<template>
    <form class="form" @submit="handleSubmit">
        <EnterPassword label="Enter Password:" name="password"/>
        <ReEnterPassword label="Re-Enter Password:"/>
        <p v-if="error" class="error">{{error}}</p>
        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px" />
            <span v-else> Reset Password</span>
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