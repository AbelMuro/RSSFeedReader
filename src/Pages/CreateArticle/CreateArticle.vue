<script setup lang="ts">
    import Form from './Form';

    
</script>

<template>
    <section class="container">
        <h1> 
            Create Post
        </h1>
        <Form/>
    </section>
</template>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
   
    .container > h1{
        margin: 0px;
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
        color: var(--preset-color-black-1);
    }
</style>