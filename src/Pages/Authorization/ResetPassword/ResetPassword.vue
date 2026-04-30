<script setup lang="ts">
    import {useRouter} from 'vue-router';
    import Form from './Form';

    const router = useRouter();

    const handleRouter = () => {
        router.push('/');
    }
</script>

<template>
    <article class="reset">
        <h1 class="reset_title">Reset Password</h1>
        <p class="reset_desc">
            Enter your new password to reset your account password.
        </p>
        <Form/>
        <p class="reset_footer">
            Remember your password? <a @click="handleRouter()">Sign in</a>
        </p>
    </article>
</template>

<style scoped>
    .reset{
        width: 410px;
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

    .reset_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-1-font-family);
        font-size: var(--preset-text-1-font-size);
        font-weight: var(--preset-text-1-font-weight);
        line-height: var(--preset-text-1-line-height);
        letter-spacing: var(--preset-text-1-letter-spacing);
        text-align: center;
        white-space: nowrap;
    }
    .reset_desc{
        margin: 0px;
        color: var(--preset-color-black-2);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        text-align: center;
    }

    .reset_footer{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .reset_footer > a{
        cursor: pointer;
        color: transparent;
        background: var(--preset-linear-gradient-purple-black-1);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .reset_footer > a:hover{
        text-decoration: underline;
    }

    @media(max-width: 500px){
        .reset{
            width: 300px;
            padding: 15px;
            gap: 13px;
        }

        .reset_title{
            font-size: 2rem;
            line-height: 2.5rem;
        }

        .reset_desc{
            font-size: 1.2rem;
            line-height: 1.4rem;
        }
    }
</style>