<script setup lang="ts">
    import SettingsBar from './SettingsBar';
    import MobileSettingsBar from './MobileSettingsBar';
    import {useMediaQuery} from '../../Common/Hooks';
    import { RouterView, useRouter } from 'vue-router';

    const mobile = useMediaQuery('(max-width: 770px)');

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