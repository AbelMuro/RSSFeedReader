<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import Modal from '../../../../Common/Prompts/Modal';
    import {VueSpinner} from 'vue3-spinners';
    import {useToastStore} from '../../../../Store';

    const open = ref<boolean>(false);
    const loading = ref<boolean>(false);
    const router = useRouter();
    const store = useToastStore();
    const {showToast} = store;

    const handleOpen = () => {
        open.value = !open.value;
    }

    const handleDelete = async () => {
        try{
            loading.value = true;
            const response = await fetch('http://localhost:4000/delete-account', {
                method: 'DELETE',
                credentials: 'include'
            });

            const results = await response.text();
            console.log(results);
            showToast(results);

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
    <button class="delete" @click="handleOpen">
        Delete Account
    </button>
    <Modal v-model="open">
        <h1 class="title">
            Delete Account
        </h1>
        <p class="desc">
            Are you sure you want to delete your account?
            This action is irreversable.
        </p>
        <div class="buttons">
            <button @click="handleOpen">
                Cancel
            </button>
            <button @click="handleDelete"> 
                <VueSpinner v-if="loading" color="white" size="30px"/>
                <span v-else>Delete</span>
            </button>
        </div>
    </Modal>
</template>

<style scoped>
    .delete{
        width: 400px;
        height: 60px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-red-black-1);
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


    .delete:hover{
       background-position: -100px 0px;
    }

    .delete:active{
        background-position: -150px 0px;
    }

    .title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
    }

    .desc{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
    }

    .buttons{
        display: flex;
        gap: 15px;
        align-items: center;
    } 

    .buttons > button{
        padding: 15px;
        border: none;
        border-radius: 15px;
        color: var(--preset-color-white-1);
        font-size: var(--preset-text-4-font-size);
        font-family: var(--preset-text-4-font-family);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttons > button:nth-of-type(1){
        background-color: var(--preset-color-blue-1);
    }

    .buttons > button:nth-of-type(1):hover{
        background-color: var(--preset-color-blue-2);
    }

    .buttons > button:nth-of-type(1):active{
        background-color: var(--preset-color-blue-3);
    }

    .buttons > button:nth-of-type(2){
        background-color: var(--preset-color-red-1);
    }

    .buttons > button:nth-of-type(2):hover{
        background-color: var(--preset-color-red-2);
    };

    .buttons > button:nth-of-type(2):active{
        background-color: var(--preset-color-red-3);
    }
</style>