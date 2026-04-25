<script setup lang="ts">
    import {ref} from 'vue';
    import EnterEmail from '../../../../Common/Components/EnterEmail';
    import EnterPassword from '../../../../Common/Components/EnterPassword';
    import ReEnterPassword from '../../../../Common/Components/ReEnterPassword';

    const error = ref<string>('');

    const handleSubmit = (e : SubmitEvent) => {
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
    }


</script>

<template>  
    <form class="form" @submit="handleSubmit">
        <EnterEmail/>
        <EnterPassword/>
        <ReEnterPassword />
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