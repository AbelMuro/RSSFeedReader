<script setup lang="ts">
    import {useArticlesStore} from '../../../../Store';
    import icons from './icons';

    const store = useArticlesStore();
    const {setNewestFirst, sortArticlesBasedOnDate} = store;

    const handleClick = () => {
        setNewestFirst();
    }
</script>

<template>
    <button class="newest" @click="handleClick">
        <img :src="icons['signal']"/>
        <span>Newest</span>
    </button>
</template>

<style scoped>
    .newest{
        height: 30px;
        padding: 7px 10px;
        display: flex;
        gap: 10px;
        border: 1px solid var(--preset-color-grey-1);
        border-radius: 10px;
        color: var(--preset-color-black-4);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
    }

    .newest:hover{
        background-color: var(--preset-color-white-2);
    }

    .newest:active{
        background-color: var(--preset-color-grey-2);
    }

    .newest > img {
        width: 10px;
        object-fit: contain;
        align-self: start;
    }

    .newest > span{
        align-self: center;
    }

    @media(max-width: 625px){
        .newest{
            font-size: 1rem;
            height: 40px;
            width: 300px;
            justify-content: center;
        }

        .newest > img{
            width: 15px;
        }
    }
</style>