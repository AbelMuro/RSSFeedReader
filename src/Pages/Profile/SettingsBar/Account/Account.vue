<script setup lang="ts">
    import Form from './Form';
</script>

<template>
    <section class="account">
        <h1 class="account_title">
            Update account details
        </h1>
        <Form/>
    </section>
</template>

<style scoped>
    .account{
        width: 100%;
        height: calc(100vh - 70px);
        padding: 25px;
        display: flex;
        gap: 35px;
        flex-direction: column;
        align-items: center;
    }

    .account_title{
        margin: 0px;
        text-align: center;
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
        color: var(--preset-color-black-1);
    }

    @media(max-width: 770px){
        .account{
            height: calc(100vh - 60px - 60px);
            gap: 20px
        }

        .account_title{
            font-size: 1.8rem;
        }
    }
</style>