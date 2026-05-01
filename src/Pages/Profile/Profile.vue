<script setup lang="ts">
    import Settings from './Settings';
    import { RouterView, useRouter } from 'vue-router';

</script>

<template>
    <section class="container">
        <Settings/>
        <RouterView/>
    </section>
</template>

<style scoped>
    .container{
        display: flex
    }
</style>