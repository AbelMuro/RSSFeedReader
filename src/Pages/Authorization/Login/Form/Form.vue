<script setup lang="ts">
    import EnterEmail from '../../../../Common/Components/EnterEmail';
    import EnterPassword from '../../../../Common/Components/EnterPassword';
    import {useToastStore} from '../../../../Store';
    import {useRouter} from 'vue-router';

    const store = useToastStore();
    const {showToast} = store;
    const router = useRouter();

    const handleSubmit = async (e : SubmitEvent) => {
        try{
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = form.elements.namedItem('email') as HTMLInputElement;
            const password = form.elements.namedItem('password') as HTMLInputElement;

            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email : email.value, password: password.value})
            });
            const result = await response.text();
            showToast(result);

            if(response.status === 200){
                router.push('/');
            }
      
        }
        catch(error : any){
            const message = error.message;
        }
    }

</script>

<template>
    <form class="form" @submit="handleSubmit">
        <EnterEmail/>
        <EnterPassword/>
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
</style>