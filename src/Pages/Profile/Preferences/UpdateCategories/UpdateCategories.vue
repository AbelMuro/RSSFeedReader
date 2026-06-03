<script setup lang="ts">
    import {ref, onBeforeMount} from 'vue';
    import {useToastStore} from '../../../../Store';
    import {VueSpinner} from 'vue3-spinners';
    import Category from '../../../../Common/Components/AddArticleDialog/Form/Category';

    const loading = ref<boolean>(false);
    const prevCategories = ref<Array<string>>();
    const store = useToastStore();
    const {showToast} = store;

    const handleSubmit = async (e : SubmitEvent) => {
        try{
            e.preventDefault();

            const form = e.target as HTMLFormElement;

            const categoryElement = form.elements.namedItem('categories') as HTMLInputElement;
            const categories = categoryElement.value;

            const response = await fetch('http://localhost:4000/update-categories',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({categories}),
                    credentials: 'include'
                }
            );

            const results = await response.text();
            showToast(results);

        }   
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }

    onBeforeMount(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-categories', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const results = await response.json();
                prevCategories.value = results;
            }
            else{
                const results = await response.text();
                showToast(results);
            }
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    })

</script>

<template>
    <form class="form" @submit="handleSubmit">
        <legend>
            Update Categories
        </legend>
        <Category :prevCategories="prevCategories"/>
        <button class="submit">
            <VueSpinner v-if="loading" color="white" size="30px"/>
            <span v-else>Submit</span>
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .form > legend{
        margin: 0px;
        text-align: center;
        color: var(--preset-color-);
        font-family: var(--preset-text-3-font-family);
        font-size: var(--preset-text-3-font-size);
        font-weight: var(--preset-text-3-font-weight);
        line-height: var(--preset-text-3-line-height);
        letter-spacing: var(--preset-text-3-letter-spacing);
    }

    .submit{
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-1);
        background-repeat: no-repeat;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
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