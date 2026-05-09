<script setup lang="ts">
    import {ref} from 'vue';
    import {VueSpinner} from 'vue3-spinners';
    import EnterEmail from '../../../../Common/Components/EnterEmail';
    import EnterPassword from '../../../../Common/Components/EnterPassword';
    import {useToastStore} from '../../../../Store';
    import {useRouter} from 'vue-router';

    const store = useToastStore();
    const {showToast} = store;
    const router = useRouter();
    const loading = ref<boolean>(false);

    const handleSubmit = async (e : SubmitEvent) => {
        try{
            e.preventDefault();
            loading.value = true;
            const form = e.target as HTMLFormElement;
            const email = form.elements.namedItem('email') as HTMLInputElement;
            const password = form.elements.namedItem('password') as HTMLInputElement;

            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email : email.value, password: password.value}),
                credentials: 'include'
            });
            const result = await response.text();
            showToast(result);

            if(response.status === 200){
                router.push('/profile');
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
        <EnterEmail/>
        <EnterPassword label="Enter Password:" name="password"/>
        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px"/>
            <span v-else> Sign In</span>
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
</style>