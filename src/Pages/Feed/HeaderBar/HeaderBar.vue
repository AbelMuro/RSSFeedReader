<script setup lang="ts">
    import GridLayoutButtons from './GridLayoutButtons';
    import NewestButton from './NewestButton';
    import RefreshButton from './RefreshButton';
    import MarkAllReadButton from './MarkAllReadButton';
    import MobileHeaderBar from './MobileHeaderBar';
    import {useMediaQuery} from '../../../Common/Hooks';

    const mobile = useMediaQuery('(max-width: 625px)');
</script>   

<template>
    <header class="header" v-if="!mobile">
        <section>
            <h1 class="header_title">
                All Items
            </h1>
            <p class="header_unread">
                47 unread
            </p>
        </section>
        <section>
            <GridLayoutButtons/>
            <NewestButton/>
            <RefreshButton/>
            <MarkAllReadButton/>
        </section>
    </header>
    <MobileHeaderBar v-else/>
</template>

<style scoped>
    .header{
        width: 100%;
        height: 80px;
        padding: 15px 25px;
        grid-row: 1/2;
        grid-column: 2/3;
        border-bottom: 1px solid var(--preset-color-grey-1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }

    .header > section{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }    

    .header_title{
        margin: 0px;
        color: var(--preset-color-black-2);
        font-family: var(--preset-text-4-font-family);
        font-size: var(--preset-text-4-font-size);
        font-weight: 600;
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        white-space: nowrap;
    }

    .header_unread{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    @media(max-width: 1000px){
        .header > section:nth-of-type(1){
            flex-direction: column;
            align-items: start;
        }
    }

    @media(max-width: 915px){
        .header{
            grid-column: 1/3;
            grid-row: 2/3;
            border-top: 1px solid var(--preset-color-grey-1);
            border-bottom: none;
        }
    }
</style>