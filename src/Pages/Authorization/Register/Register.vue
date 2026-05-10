<script setup lang="ts">
    import Form from './Form';
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const handleRouter = () => {
        router.push('/');
    }
</script>

<template>
    <article class="register">
        <h1 class="register_title">Register</h1>
        <p class="register_desc">
            Password must have at least one letter, one number, one symbol and 8 characters.
        </p>
        <Form/>
        <p class="register_footer">
            Already have an account? <a @click="handleRouter">Login</a>
        </p>
    </article>
</template>

<style scoped>
    .register{
        width: 400px;
        height: fit-content;
        padding: 25px;
        border-radius: 10px;
        background-color: var(--preset-color-white-1);
        box-shadow: var(--preset-box-shadow-1);
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

    .register_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-1-font-family);
        font-size: var(--preset-text-1-font-size);
        font-weight: var(--preset-text-1-font-weight);
        line-height: var(--preset-text-1-line-height);
        letter-spacing: var(--preset-text-1-letter-spacing);
        text-align: center;
    }
    .register_desc{
        margin: 0px;
        color: var(--preset-color-transparent-black);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        text-align: center;
    }

    .register_footer{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .register_footer > a{
        cursor: pointer;
        color: transparent;
        background: var(--preset-linear-gradient-purple-black-1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .register_footer > a:hover{
        text-decoration: underline;
    }

    @media(max-width: 500px){
        .register{
            width: 300px;
            padding: 15px;
            gap: 13px;
        }

        .register_title{
            font-size: 2rem;
            line-height: 2.5rem;
        }

        .register_desc{
            font-size: 1.2rem;
            line-height: 1.4rem;
        }
    }
</style>