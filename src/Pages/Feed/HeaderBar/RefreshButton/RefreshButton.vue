<script setup lang="ts">
    import icons from './icons';
</script>

<template>
    <button class="refresh">
        <img :src="icons['refresh']"/>
        Refresh
    </button>
</template>

<style scoped>
    .refresh{
        height: 30px;
        padding: 7px 10px;
        display: flex;
        align-items: center;
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

    .refresh:hover{
        background-color: var(--preset-color-white-2);
    }

    .refresh:active{
        background-color: var(--preset-color-grey-2);
    }

    .refresh > img {
        width: 15px;
        object-fit: contain;
        align-self: start;
    }

    @media(max-width: 625px){
        .refresh{
            height: 40px;
            width: 300px;
            justify-content: center;
        }

        .refresh > img{
            align-self: center;
        }
    }

</style>