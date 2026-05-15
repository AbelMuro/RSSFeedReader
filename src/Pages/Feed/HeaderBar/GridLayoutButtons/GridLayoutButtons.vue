<script setup lang="ts">
    import icons from './icons';
</script>

<template>
    <section class="grid">
        <button>
            <img :src="icons['threeBars']"/>
        </button>
        <button>
            <img :src="icons['squares']"/>
        </button>
        <button>
            <img :src="icons['fourBars']"/>
        </button>
    </section>
</template>

<style scoped>
    .grid{
        display: flex;
    }

    .grid > button{
        width: 40px;
        height: 40px;
        border: 1px solid var(--preset-color-grey-1);
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .grid > button:hover{
        background-color: var(--preset-color-white-2);
    }

    .grid > button:active{
        background-color: var(--preset-color-grey-2);
    }

    .grid > button:nth-of-type(1){
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .grid > button:nth-of-type(3){
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .grid > button > img{
        width: 20px;
        object-fit: contain;
    }
</style>