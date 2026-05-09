<script setup lang="ts">
    import EnterPassword from '../../../../../Common/Components/EnterPassword';
    import ReEnterPassword from '../../../../../Common/Components/ReEnterPassword';
</script>

<template>
    <form class="form">
        <legend class="form_title">
            Password must have at least one number, one symbol, one letter and 8 characters long.
        </legend>
        <EnterPassword/>
        <ReEnterPassword/>
        <button class="submit">
            Update Password
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .form_title{
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        padding: 0px;
    }

    .submit{
        width: 100%;
        height: 60px;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black-2);
        background-color: var(--preset-color-black-3);        
        background-position: 0px 0px;
        background-repeat: no-repeat;
        border: none;
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .submit:hover{
       background-position: -100px 0px;
    }

    .submit:active{
        background-position: -150px 0px;
    }
</style>