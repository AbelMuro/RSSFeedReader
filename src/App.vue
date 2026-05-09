<script setup>
    import {RouterView} from 'vue-router';
    import NavigationBar from './Common/Components/NavigationBar';
    import Toast from './Common/Prompts/Toast';

    /*
        this is where i left off, i am working on the AddArticleDialog form component, i need to define the route on the backend
        so that it stores an article on the database
    */
</script>

<template>
    <NavigationBar/>
    <RouterView/>
    <Toast/>
</template>

<style>
    body{
        margin: 0px;
        background-color: var(--preset-color-white-1);
    }

    * {
        box-sizing: border-box;
        transition: all 0.2s linear, opacity 0s, transform 0s;
    }

    @font-face {
        color: #d0d0d0;
        font-family: 'roboto';
        src: url('../public/Roboto.ttf') format('truetype');
    }

    :root{
        --preset-color-pink-1: #ffabb9;
        --preset-color-pink-2: #ff1c42;

        --preset-color-blue-1: #001dc4;
        --preset-color-black-0: #545454;;
        --preset-color-black-1: #383838;
        --preset-color-black-2: #00000080;
        --preset-color-black-3: #000835;

        --preset-color-grey-1: #b6b6b6;
        --preset-color-grey-2: #dfdfdf;
        --preset-color-grey-3: #d7d7d7;
        --preset-color-white-1: #eeeeee;
        --preset-color-white-2: #e6e6e6;
        --preset-color-white-3: #d6d6d6;
        --preset-color-red-1: rgb(183, 0, 0);
        --preset-linear-gradient-purple-black-1: linear-gradient(265deg,rgba(0, 29, 196, 1) 0%, rgba(0, 8, 53, 1) 96%);        
        --preset-linear-gradient-purple-black-2: linear-gradient(265deg,rgba(0, 8, 53, 1) 0%, rgba(0, 29, 196, 1) 36%, rgba(0, 29, 196, 1) 62%, rgba(0, 8, 53, 1) 100%);

        --preset-box-shadow-1: 0px 0px 10px #00000080;
        --preset-box-shadow-2: 0px 5px 10px #00000080;

        --fifth-layer: 100;
        --fourth-layer: 75;
        --third-layer: 50;
        --second-layer: 25;
        --first-layer: 1;
        --under-layer: 0;


        --preset-text-1-font-family: 'roboto';
        --preset-text-1-font-size: 3rem;
        --preset-text-1-font-weight: 800;
        --preset-text-1-line-height: 3.8rem;
        --preset-text-1-letter-spacing: 0px;

        --preset-text-2-font-family: 'roboto';
        --preset-text-2-font-size: 2.5rem;
        --preset-text-2-font-weight: 600;
        --preset-text-2-line-height: 2.7rem;
        --preset-text-2-letter-spacing: 0px;

        --preset-text-3-font-family: 'roboto';
        --preset-text-3-font-size: 2rem;
        --preset-text-3-font-weight: 400;
        --preset-text-3-line-height: 2.5rem;
        --preset-text-3-letter-spacing: 0px;

        --preset-text-4-font-family: 'roboto';
        --preset-text-4-font-size: 1.3rem;
        --preset-text-4-font-weight: 300;
        --preset-text-4-line-height: 1.8rem;
        --preset-text-4-letter-spacing: 0px;

        --preset-text-5-font-family: 'roboto';
        --preset-text-5-font-size: 1rem;
        --preset-text-5-font-weight: 400;
        --preset-text-5-line-height: 1.3rem;
        --preset-text-5-letter-spacing: 0px;
        
    }
</style>