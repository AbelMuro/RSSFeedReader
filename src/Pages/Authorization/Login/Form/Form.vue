<script setup lang="ts">
    import EnterEmail from './EnterEmail';
    import EnterPassword from './EnterPassword';

</script>

<template>
    <form class="form">
        <EnterEmail/>
        <EnterPassword/>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>