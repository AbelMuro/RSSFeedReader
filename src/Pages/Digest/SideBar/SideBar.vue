<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {useRouter, useRoute} from 'vue-router';
    import icons from './icons';

    const currentRoute = ref<string>('popular');
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
    <section class="sidebar">
        <ul class="links">
            <li>
                <button class="link" @click="handleLink('popular')" :style="handleStyles('popular')">
                    <img v-if="currentRoute.includes('popular')" :src="icons['selectedFlame']"/>
                    <img v-else :src="icons['unselectedFlame']"/>
                    Most Popular
                </button>
                <button class="link" @click="handleLink('relevant')" :style="handleStyles('relevant')">
                    <img v-if="currentRoute.includes('relevant')" :src="icons['selectedUser']" @click="handleLink('relevant')" :style="handleStyles('relevant')"/>
                    <img v-else :src="icons['unselectedUser']"/>
                    Most Relevant To You
                </button>
            </li>
        </ul>
    </section>
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