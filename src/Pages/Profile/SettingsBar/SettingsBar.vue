<script setup lang="ts">
    import {ref, watch} from 'vue';
    import {motion} from 'motion-v';
    import { useRouter, useRoute } from 'vue-router';

    const link = ref<string | undefined>('/profile');
    const router = useRouter();
    const route = useRoute();

    const handleLink = (newLink : string) => {
        router.push(newLink);
    }

    const handleSelectedLink = (currentLink : string) => {
        if(link.value === currentLink)
            return {color: '#eeeeee'};
        else
            return {};
    }

    watch(() => route.path, (newPath) => {
        link.value = newPath;
    }, {flush: 'post', immediate: true});

</script>

<template>
        <aside class="menu">
            <ul class="menu_links">
                <li>
                    <motion.button 
                        class="menu_link" 
                        @click="handleLink('/profile')" 
                        :style="handleSelectedLink('/profile')"
                        :initial="false"
                        :animate="link === '/profile' ? {backgroundPosition: '0px 0px'} : {backgroundPosition: '-250px 0px'}"
                        >
                        Account & Identity
                    </motion.button>
                </li>
                <li>
                   <motion.button 
                        class="menu_link" 
                        @click="handleLink('/profile/articles')" 
                        :style="handleSelectedLink('/profile/articles')"
                        :initial="false"
                        :animate="link === '/profile/articles' ? {backgroundPosition: '0px 0px'} : {backgroundPosition: '-250px 0px'}"
                        >
                        Articles
                    </motion.button>
                </li>   
                <li>
                    <motion.button 
                        class="menu_link" 
                        @click="handleLink('/profile/preferences')" 
                        :style="handleSelectedLink('/profile/preferences')"
                        :initial="false"
                        :animate="link === '/profile/preferences' ? {backgroundPosition: '0px 0px'} : {backgroundPosition: '-250px 0px'}"
                        >
                        Preferences
                    </motion.button>
                </li>
                <li>
                    <motion.button 
                        class="menu_link" 
                        @click="handleLink('/profile/notifications')" 
                        :style="handleSelectedLink('/profile/notifications')"
                        :initial="false"
                        :animate="link === '/profile/notifications' ? {backgroundPosition: '0px 0px'} : {backgroundPosition: '-250px 0px'}"
                        >
                        Notifications
                    </motion.button>
                </li>
                <li>
                    <motion.button 
                        class="menu_link" 
                        @click="handleLink('/profile/security')" 
                        :style="handleSelectedLink('/profile/security')"
                        :initial="false"
                        :animate="link === '/profile/security' ? {backgroundPosition: '0px 0px'} : {backgroundPosition: '-250px 0px'}"
                        >
                        Security & Privacy
                    </motion.button>
                </li>
            </ul>
        </aside>
</template>

<style scoped>
    .menu{
        width: 300px;
        height: calc(100vh - 70px);
        box-shadow: var(--preset-box-shadow-2);
        padding: 25px;
        flex-shrink: 0;
    }

    .menu_links{
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .menu_link{
        width: 100%;
        height: 60px;
        padding: 15px;
        border-radius: 15px;
        border: none;
        text-align: left;
        background: var(--preset-linear-gradient-purple-black-1);
        background-repeat: no-repeat;
        color: var(--preset-color-black-1);
        font-size: var(--preset-text-4-font-size);
        font-family: var(--preset-text-4-font-family);
        font-weight: var(--preset-text-4-font-weight);
        line-height: var(--preset-text-4-line-height);
        letter-spacing: var(--preset-text-4-letter-spacing);
        cursor: pointer;
    }

</style>