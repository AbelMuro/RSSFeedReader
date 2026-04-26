<script setup lang="ts">
    import {motion} from 'motion-v';
    import Links from './Links';
    import SearchBar from '../SearchBar';
    import AddArticleButton from './AddArticleButton';
    import ProfileButton from './ProfileButton';
    import MobileNavigationBar from './MobileNavigationBar';
    import {useMediaQuery} from '../../../Common/Hooks';

    const mobile = useMediaQuery('(max-width: 770px)');
</script>

<template>
    <motion.nav 
        v-if="!mobile" 
        class="nav"
        :initial="{y: '-70px'}"
        :animate="{y: '0px'}"
        :exit="{y: '-70px'}">
        <Links/>
        <section class="nav_account">
            <SearchBar/>
            <AddArticleButton/>
            <ProfileButton/>
        </section>
    </motion.nav>
    <MobileNavigationBar v-else/>
</template>

<style scoped>
    .nav{
        width: 100%;
        height: 70px;
        padding: 0px 15px;
        border-bottom: 1px solid var(--preset-color-grey-1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav_account{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
</style>