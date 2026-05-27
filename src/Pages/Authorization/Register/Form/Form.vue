<script setup lang="ts">
    import {ref} from 'vue';
    import EnterEmail from '../../../../Common/Components/EnterEmail';
    import EnterPassword from '../../../../Common/Components/EnterPassword';
    import ReEnterPassword from '../../../../Common/Components/ReEnterPassword';
    import UploadImage from '../../../../Common/Components/UploadImage';    
    import EnterCompany from '../../../../Common/Components/EnterCompany';
    import {useToastStore} from '../../../../Store';
    import {useRouter} from 'vue-router';
    import {VueSpinner} from 'vue3-spinners';

    const error = ref<string>('');
    const loading = ref<boolean>(false);
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e : SubmitEvent) => {
        try{
            e.preventDefault();
            loading.value = true;
            const form = e.target as HTMLFormElement;        
            const password = form.elements.namedItem('password') as HTMLInputElement;
            const reEnterPassword = form.elements.namedItem('reEnterPassword') as HTMLInputElement;
            const company = form.elements.namedItem('company') as HTMLInputElement;

            if(password.value !== reEnterPassword.value){
                error.value = "Passwords don't match.";
                return; 
            }
            else
                error.value = "";

            const email = form.elements.namedItem('email') as HTMLInputElement;
            const image = form.elements.namedItem('file') as HTMLInputElement;
            const imageFile = image.files?.[0] || '';
            const formData = new FormData();
            formData.append('email', email.value);
            formData.append('password', password.value);
            formData.append('image', imageFile);
            formData.append('company', company.value);
            
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: formData
            });

            const result = await response.text();
            console.log(result);      
            showToast(result);      

            if(response.status === 200)             
                router.push('/select-category');        
        }
        catch(error: any){
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
        <EnterCompany/>
        <EnterPassword label="Enter Password:" name="password"/>
        <ReEnterPassword label="Re-Enter Password:"/>
        <p class="error" v-if="error">
            {{error}}
        </p>        
        <UploadImage/>

        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px"/>
            <span v-else> Sign Up</span>
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