<script setup lang="ts">
    import {ref, watchEffect, watch} from 'vue';
    import icons from './icons';

    type Format = Array<string | HTMLSpanElement | HTMLLIElement | HTMLAnchorElement | HTMLImageElement | HTMLVideoElement>

    const text = defineModel<string>();
    const formattedText = ref<string>('');
    const formatOption = ref<string>('');

        

    const handleFormat = (option : string) => {
        formatOption.value = option;
    }

    watch(text, (text) => {
        const newCharacter = text?.slice(text.length - 1);
        const temp = formattedText.value.replaceAll('§b', '');
        const backspace = temp.length > text.length;

        if(formatOption.value === 'bold' && !backspace)
            formattedText.value += `§b${newCharacter}§b`;
        else if(!backspace)
            formattedText.value += newCharacter;
        else 
            formattedText.value = formattedText.value.slice(0, formattedText.value.length - 1);
    })

</script>

<template>
    <div class="formatting">
        <button type="button" @click="handleFormat('bold')">
            <img :src="icons['bold']">
        </button>
        <button type="button" @click="handleFormat('italic')">
            <img :src="icons['italic']"/>
        </button>
        <button type="button" @click="handleFormat('underline')">
            <img :src="icons['underline']">
        </button>
        <div class="divider"/>
        <button type="button" @click="handleFormat('link')">
            <img :src="icons['link']">
        </button>
        <button type="button" @click="handleFormat('image')">
            <img :src="icons['image']">
        </button>
        <button type="button" @click="handleFormat('video')">
            <img :src="icons['video']">
        </button>
    </div>  
    <section class="overlay">
        {{text}}
    </section>
</template>

<style scoped>
    .formatting{
        width: 100%;
        height: 35px;
        padding: 0px 15px 0px 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: var(--preset-color-white-1);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: 1px solid var(--preset-color-grey-1);
    }

    .formatting > button {
        background-color: transparent;
        border: none;
        padding: 5px;
        cursor: pointer;
        border-radius: 10px;
    }

    .formatting > button:hover{
        background-color: var(--preset-color-white-2);
    }

    .formatting > button:active{
        background-color: var(--preset-color-white-3);
    }

    .formatting > button > img{
        height: 20px;
        object-fit: contain;
    }

    .divider{
        width: 3px;
        height: 80%;
        border-radius: 5px;
        background-color: var(--preset-color-grey-1);
    }
    .overlay{
        width: 100%;
        height: 315px;
        position: absolute;
        top: 35px;
        left: 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        pointer-events: none;
    }
</style>