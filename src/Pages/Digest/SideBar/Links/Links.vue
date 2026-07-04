<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import icons from '../icons';

    const currentRoute = ref<string>('most-viewed');
    const router = useRouter();
    const route = useRoute();

    const handleLink = (route : string) => {  
        router.push({
            path: `/digest/${route}`,
        })
    };

    const handleStyles = (route : string) => {
        if(currentRoute.value?.includes(route))
            return {backgroundColor: '#d8eafd80', color: '#001dc4'};
        else
            return {}
    }

    watch(() => route.path, (newRoute) => {
        currentRoute.value = newRoute;
    }, {immediate: true})
</script>

<template>
    <ul class="links">
        <li>
            <button class="link" @click="handleLink('latest')" :style="handleStyles('latest')">
                <img v-if="currentRoute.includes('latest')" :src="icons['selectedClock']"/>
                <img v-else :src="icons['unselectedClock']"/>
                Latest
            </button>
            <button class="link" @click="handleLink('most-viewed')" :style="handleStyles('most-viewed')">
                <img v-if="currentRoute.includes('most-viewed')" :src="icons['selectedEye']"/>
                <img v-else :src="icons['unselectedEye']"/>
                Most Viewed
            </button>
            <button class="link" @click="handleLink('most-saved')" :style="handleStyles('most-saved')">
                <img v-if="currentRoute.includes('most-saved')" :src="icons['selectedBookmark']" @click="handleLink('relevant')" :style="handleStyles('relevant')"/>
                <img v-else :src="icons['unselectedBookmark']"/>
                Most Saved
            </button>
        </li>
    </ul>
</template>

<style scoped>
    .sidebar{
        width: 300px;
        height: calc(100vh - 70px);
        border-right: 1px solid var(--preset-color-grey-1);
        background-color: var(--preset-color-white-2);
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .links{
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    .link{
        width: 100%;
        height: 40px;
        text-align: left;
        border-radius: 5px;
        padding: 0px 15px;
        background-color: transparent;
        border: none;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .link > img{
        width: 25px;
        object-fit: contain;
    }
</style>