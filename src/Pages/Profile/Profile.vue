<script setup lang="ts">
    import {onMounted} from 'vue'; 
    import SettingsBar from './SettingsBar';
    import MobileSettingsBar from './MobileSettingsBar';
    import {useMediaQuery} from '../../Common/Hooks';
    import { RouterView } from 'vue-router';

    const mobile = useMediaQuery('(max-width: 770px)');

    onMounted(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-login-status', {
                method: 'GET',
                credentials: 'include'
            });
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