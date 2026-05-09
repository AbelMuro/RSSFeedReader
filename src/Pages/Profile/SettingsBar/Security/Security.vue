<script setup lang="ts">
    import Form from './Form';

</script>

<template>
    <section class="security">
        <h1 class="security_title">
            Security
        </h1>
        <Form/>
    </section>
</template>

<style scoped>
    .security{
        width: 100%;
        height: calc(100vh - 60px);
        padding: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 25px;
    }

    .security_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
    }

    @media(max-width: 770px){
        .security{
            height: calc(100vh - 60px - 60px);
            gap: 15px;
        }

        .security_title{
            font-size: 1.8rem;
        }
    }
</style>