<script setup lang="ts">
    import {ref, onMounted} from 'vue';

    const userName = ref<string>('');
    const {accountId} = defineProps<{ accountId: string }>();

    const fetchUserName = async () => {
        try{
            const response = await fetch(`http://localhost:4000/get-account-name/${accountId}`, {
                method: 'GET'
            });
            const result = await response.text();
            console.log(result);

            if(response.status === 200)
                userName.value = result;
            
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
            return '';
        }
    };

    onMounted(() => {
        fetchUserName();
    })

</script>

<template>
    {{userName}}
</template>

<style scoped>

</style>