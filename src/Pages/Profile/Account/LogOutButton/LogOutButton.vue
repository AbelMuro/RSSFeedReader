<script setup lang="ts">
    import {ref} from 'vue';
    import { VueSpinner } from 'vue3-spinners';
    import {useToastStore} from '../../../../Store';
    import {useRouter} from 'vue-router';

    const loading = ref<boolean>(false);
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleLogOut = async () => {
        try{
            loading.value = true;
            const response = await fetch('http://localhost:4000/logout', {
                method: 'POST',
                credentials: 'include'
            });

            const result = await response.text();
            console.log(result);
            showToast(result);

            if(response.status === 200)
                router.push('/');
            
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
    <button class="logout" @click="handleLogOut">
        <VueSpinner color="white" size="30px" v-if="loading"/>
        <span v-else>Log Out</span>
    </button>
</template>

<style scoped>
    .logout{
        width: 400px;
        height: 60px;
        border-radius: 10px;
        border: none;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-1);
        background-position: 0px 0px;
        background-repeat: no-repeat;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        cursor: pointer;
    }

    .logout:hover{
       background-position: -100px 0px;
    }

    .logout:active{
        background-position: -150px 0px;
    }
</style>