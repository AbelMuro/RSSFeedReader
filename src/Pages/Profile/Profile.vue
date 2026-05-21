<script setup lang="ts">
    import {onBeforeMount} from 'vue'; 
    import SettingsBar from './SettingsBar';
    import MobileSettingsBar from './MobileSettingsBar';
    import {useMediaQuery} from '../../Common/Hooks';
    import { RouterView, useRouter } from 'vue-router';

    const router = useRouter();
    const mobile = useMediaQuery('(max-width: 770px)');

    onBeforeMount(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-login-status', {
                method: 'GET',
                credentials: 'include'
            });

            const results = await response.text();
            console.log(results);

            if(response.status !== 200)
                router.push('/');
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    })

</script>

<template>
    <section class="container">
        <SettingsBar v-if="!mobile"/>
        <MobileSettingsBar v-else/>
        <RouterView/>
    </section>
</template>

<style scoped>
    .container{
        display: flex
    }

    @media(max-width: 770px){
        .container{
            flex-direction: column-reverse;
        }
    }
</style>