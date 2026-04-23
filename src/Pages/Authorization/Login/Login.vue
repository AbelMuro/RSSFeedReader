<script setup lang="ts">
    import Form from './Form';
</script>

<template>
    <article class="login">
        <h1 class="login_title">Login</h1>
        <p class="login_desc">
            Enter your credentials to access your RSS feed reader account.
        </p>
        <Form/>
    </article>
</template>

<style scoped>
    .login{
        width: 400px;
        height: 600px;
        padding: 25px;
        border-radius: 10px;
        background-color: var(--preset-color-white-1);
        box-shadow: 0px 0px 10px var(--preset-color-black-2);
        border: 1px solid var(--preset-color-grey-1);
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: var(--third-layer);
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .login_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-1-font-family);
        font-size: var(--preset-text-1-font-size);
        font-weight: var(--preset-text-1-font-weight);
        line-height: var(--preset-text-1-line-height);
        letter-spacing: var(--preset-text-1-letter-spacing);
        text-align: center;
    }
    .login_desc{
        margin: 0px;
        color: var(--preset-color-black-2);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        text-align: center;
    }
</style>