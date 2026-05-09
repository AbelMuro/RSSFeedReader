<script setup lang="ts">
    import {ref} from 'vue';
    import { VueSpinner } from 'vue3-spinners';
    import {useToastStore} from '../../../../../Store';
    import EnterPassword from '../../../../../Common/Components/EnterPassword';
    import ReEnterPassword from '../../../../../Common/Components/ReEnterPassword';

    const error = ref<string>('');
    const loading = ref<boolean>(false);
    const store = useToastStore();
    const {showToast} = store;
 
    const handleSubmit = async (e : SubmitEvent) => {
        try{
            e.preventDefault();
            loading.value = true;
            const form = e.target as HTMLFormElement;
            const oldPassword = form.elements.namedItem('old-password') as HTMLInputElement;
            const newPassword = form.elements.namedItem('new-password') as HTMLInputElement;
            const reEnterPassword = form.elements.namedItem('reEnterPassword') as HTMLInputElement;

            if(newPassword.value !== reEnterPassword.value){
                error.value = "Passwords don't match";
                return;
            }

            const response = await fetch('http://localhost:4000/update-password', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldPassword: oldPassword.value, newPassword: newPassword.value}),
                credentials: 'include'
            });

            const results = await response.text();
            console.log(results);
            showToast(results);

            if(response.status === 200){
                oldPassword.value = '';
                newPassword.value = '';
                reEnterPassword.value = '';
            }

        }
        catch(error : any){
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
        <legend class="form_title">
            Your new password must have at least one letter, one number, one symbol, and 8 characters
        </legend>
        <EnterPassword label="Enter Old Password:" name="old-password"/>
        <EnterPassword label="Enter New Password:" name="new-password"/>
        <ReEnterPassword label="Re-Enter New Password:"/>
        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px"/>
            <span v-else>Update Password</span>
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .form_title{
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        padding: 0px;
    }

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-3);        
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

    @media(max-width: 770px){
        .form{
            width: 300px;
        }

        .form_title{
            font-size: 1.2rem;
        }
    }
</style>