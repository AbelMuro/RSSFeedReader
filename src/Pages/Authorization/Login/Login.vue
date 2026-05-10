<script setup lang="ts">
    import Form from './Form';
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const handleRouter = (route : string) => {
        router.push(route);
    }

</script>

<template>
    <article class="login">
        <h1 class="login_title">Login</h1>
        <p class="login_desc">
            Enter your credentials to access your RSS feed reader account.
        </p>
        <Form/>
        <p class="login_footer">
            Don't have an account? <a @click="handleRouter('/register')">Sign up</a>
        </p>
        <p class="login_footer">
            Forgot your password? <a @click="handleRouter('/forgot-password')">Reset it</a>
        </p>
    </article>
</template>

<style scoped>
    .login{
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
        color: var(--preset-color-transparent-black);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        text-align: center;
    }

    .login_footer{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .login_footer > a{
        cursor: pointer;
        color: transparent;
        background: var(--preset-linear-gradient-purple-black-1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .login_footer > a:hover{
        text-decoration: underline;
    }

    @media(max-width: 500px){
        .login{
            width: 300px;
            padding: 15px;
            gap: 13px;
        }

        .login_title{
            font-size: 2rem;
            line-height: 2.5rem;
        }

        .login_desc{
            font-size: 1.2rem;
            line-height: 1.4rem;
        }
    }
</style>