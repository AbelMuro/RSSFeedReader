<script setup lang="ts">
    import {onBeforeMount} from 'vue';
    import {RouterView, useRouter} from 'vue-router';

    const router = useRouter();

    const checkOnlineStatus = async () => {
        try{
            const response = await fetch('http://localhost:4000/get-login-status',{
                    method: 'GET',
                    credentials: 'include'        
                }
            );

            if(response.status !== 200)
                router.push('/');
        }
        catch(error: any){
            const message = error.message;
            console.log(message);
        }
    }


    onBeforeMount(async() => {
        checkOnlineStatus();        
    })


</script>

<template>
    <section class="all_articles_container">
        <RouterView/>
    </section>
</template>

<style scoped>
    .all_articles_container{
        width: 100%;
        height: calc(100vh - 70px - 80px);
        grid-column: 2/3;
        grid-row: 2/3;
        overflow: auto;
    }

    @media(max-width: 915px){
        .all_articles_container{
            grid-row: 1/2;
        }
    }

    @media(max-width: 625px){
        .all_articles_container{
            height: initial;
            max-height: calc(100vh - 60px - 40px);
            min-height: calc(100vh - 60px - 420px);
        }
    }
</style>