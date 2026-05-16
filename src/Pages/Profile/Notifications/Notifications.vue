<script setup lang="ts">
    import ReceiveEmail from './ReceiveEmail';
    import ReceiveText from './ReceiveText';
</script>

<template>
    <section class="notifications">
        <h1 class="notifications_title">
            Notifications
        </h1>
        <div class="notifications_switches">
            <ReceiveEmail/>
            <ReceiveText/>
        </div>
    </section>
</template>

<style scoped>
    .notifications{
        width: 100%;
        height: calc(100vh - 60px);
        padding: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 25px;
    }

    .notifications_title{
        margin: 0px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-2-font-family);
        font-size: var(--preset-text-2-font-size);
        font-weight: var(--preset-text-2-font-weight);
        line-height: var(--preset-text-2-line-height);
        letter-spacing: var(--preset-text-2-letter-spacing);
    }

    .notifications_switches{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media(max-width: 770px){
        .notifications{
            height: calc(100vh - 60px - 60px);
        }

        .notifications_title{
            font-size: 1.8rem;
        }

        .notifications_switches{
            width: 300px;
        }
    }
</style>