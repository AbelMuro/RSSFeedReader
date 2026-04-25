<script setup lang="ts">
    import {ref} from 'vue';
    import {motion, AnimatePresence} from 'motion-v';
    import icons from './icons';

    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }
</script>

<template>
    <AnimatePresence>
        <motion.nav 
            :initial="{y: '-60px'}"
            :animate="{y: '0px'}"
            :exit="{y: '-60px'}"
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
            class="overlay">
                <motion.ul 
                :initial="{clipPath: 'circle(0% at 30px 30px)'}"   
                :animate="{clipPath: 'circle(100%)'}" 
                :exit="{clipPath: 'circle(0% at 30px 30px)'}"
                class="links">
                    <li>
                        <button class="link">
                            Feed
                        </button>
                    </li>
                    <li>
                        <button class="link">
                            Digest
                        </button>
                    </li>
                    <li>
                        <button class="link">
                            Discover
                        </button>
                    </li>
                    <li>
                        <button class="link">
                            Add Article
                        </button>
                    </li>

                    <li>
                        <button class="link">
                            Search
                        </button>
                    </li>
                    <li>
                        <button class="link">
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
        background-color: var(--preset-color-black-2);
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

    .link{
        cursor: pointer;
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        border: none;
        text-align: left;
        background-color: transparent;
        cursor: pointer;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        border-radius: 5px;
    }
</style>