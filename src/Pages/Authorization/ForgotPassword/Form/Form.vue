<script setup lang="ts">
    import EnterEmail from '../../../../Common/Components/EnterEmail';
    import {useToastStore} from '../../../../Store';

    const toastStore = useToastStore();
    const {showToast} = toastStore;

    const handleSubmit = (e : SubmitEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.elements.namedItem('email') as HTMLInputElement;
        showToast('Reset link sent to your email address');
    }
</script>

<template>
    <form class="form" @submit="handleSubmit">
        <EnterEmail/>
        <button class="submit">
            Send Reset Link
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black);
        border: none;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        cursor: pointer;
    }
</style>