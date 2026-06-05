<script setup lang="ts">
    import {ref, watch} from 'vue';
    import { storeToRefs } from 'pinia';
    import {useArticlesStore} from '../../../../Store';
    import {useRouter, useRoute} from 'vue-router';

    const option = ref<string>('/feed/all');
    const router = useRouter();
    const route = useRoute();
    const store = useArticlesStore();
    const {unreadArticles} = storeToRefs(store);

    const handleRoute = (route: string) => {
        router.push(route);
    }

    const handleStyle = (currentOption: string) => {
        if(currentOption === option.value)
            return {backgroundColor: '#d8eafd80', color: '#001dc4'}
        else
            return {};
    }

    watch(() => route.path, (newPath) => {
        option.value = newPath;
    })

</script>

<template>
    <div class="navigation">
        <button class="option" @click="handleRoute('/feed/all')" :style="handleStyle('/feed/all')">
            <div>
                <img class="newspaper_icon" :style="option === '/feed/all' ? {backgroundColor: '#001dc4'} : {}"/>
                All Items
            </div>
            <div>
                {{unreadArticles}}
            </div>
        </button>
        <button class="option" @click="handleRoute('/feed/saved-articles')" :style="handleStyle('/feed/saved-articles')">
            <div>
                <img class="bookmark_icon" :style="option === '/feed/saved-articles' ? {backgroundColor: '#001dc4'} : {}"/>
                Saved
            </div>
            <div>
                21
            </div>
        </button>
    </div>
</template>

<style scoped>
    .navigation{
        display: flex;
        flex-direction: column;
        gap: 5px
    }

    .option{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        padding: 0px 15px;
        background-color: transparent;
        border: none;
        color: #b6b6b6;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .option > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px
    }

    .option > div:nth-of-type(2){
        font-family: var(--preset-text-6-font-family);
        font-size: var(--preset-text-6-font-size);
        font-weight: var(--preset-text-6-font-weight);
        line-height: var(--preset-text-6-line-height);
        letter-spacing: var(--preset-text-6-letter-spacing);
    }

    .newspaper_icon, .bookmark_icon{
        width: 20px;
        height: 20px;
        mask-position: center;
        mask-size: 20px 20px;
        mask-repeat: no-repeat;
        background-color: #b6b6b6;
    }

    .newspaper_icon{
        mask-image: url('./icons/selected-newspaper.svg');
    }

    .bookmark_icon{
        mask-image: url('./icons/selected-bookmark.svg');
    }

</style>