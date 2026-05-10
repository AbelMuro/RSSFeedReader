<script setup lang="ts">
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import AddArticleButton from './AddArticleButton';
    import SearchButton from './SearchButton';
    import {motion, AnimatePresence} from 'motion-v';
    import icons from './icons';

    const open = ref<boolean>(false);
    const router = useRouter();

    const handleOpen = () => {
        open.value = !open.value;
    }

    const handleRouter = (route: string) => {
        router.push(route);
        handleOpen();
    }
</script>

<template>
    <AnimatePresence>
        <motion.nav 
            :initial="{y: '-60px'}"
            :animate="{y: '0px'}"
            :exit="{y: '-60px'}"
            :transition="{duration: 0.5}"
            class="mobile-nav">
            <button class="mobile-nav_button" @click="handleOpen">
                <img :src="icons['bars']"/>
            </button>
        </motion.nav>
        <motion.div 
            v-if="open"
            :initial="{opacity: 0}"
            :animate="{opacity: 1}"
            :exit="{opacity: 0}"
            :transition="{duration: 0.5}"
            class="overlay">
                <motion.ul 
                :initial="{clipPath: 'circle(0% at 30px 30px)'}"   
                :animate="{clipPath: 'circle(100%)'}" 
                :exit="{clipPath: 'circle(0% at 30px 30px)'}"
                :transition="{duration: 0.5}"
                class="links">
                    <li>
                        <button class="close" @click="handleOpen">
                            <img :src="icons['close']">
                        </button>
                    </li>
                    <li>
                        <button class="link" @click="handleRouter('/feed')">
                            Feed
                        </button>
                    </li>
                    <li>
                        <button class="link" @click="handleRouter('/digest')">
                            Digest
                        </button>
                    </li>
                    <li>
                        <button class="link" @click="handleRouter('/discover')">
                            Discover
                        </button>
                    </li>
                    <li>
                        <AddArticleButton/>
                    </li>
                    <li>
                        <SearchButton/>
                    </li>
                    <li>
                        <button class="link" @click="handleRouter('/profile')">
                            Account
                        </button>
                    </li>

                </motion.ul>
        </motion.div>
    </AnimatePresence>
</template>

<style scoped>
    .mobile-nav{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid var(--preset-color-grey-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mobile-nav_button{
        width: 50px;
        height: 50px;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .mobile-nav_button > img{
        width: 30px;
        object-fit: contain;
    }

    .overlay{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: var(--preset-color-transparent-black);
        z-index: var(--fifth-layer);
    }

    .links{
        margin: 0px;
        list-style-type: none;
        width: 300px;
        height: 100vh;
        background-color: var(--preset-color-white-1);
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .links > li:nth-of-type(1){
        align-self: end;
    }

    .close{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid var(--preset-color-blue-1);
        cursor: pointer;
    }

    .link{
        cursor: pointer;
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        text-align: left;
        background-color: transparent;
        border-radius: 10px;
        border: 1px solid var(--preset-color-blue-1);
        cursor: pointer;
        color: var(--preset-color-blue-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>