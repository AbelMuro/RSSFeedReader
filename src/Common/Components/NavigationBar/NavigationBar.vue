<script setup lang="ts">
    import Links from './Links';
    import SearchBar from './SearchBar';
    import AddArticleButton from './AddArticleButton';
    import ProfileButton from './ProfileButton';

</script>

<template>
    <nav class="nav">
        <Links/>
        <section class="nav_account">
            <SearchBar/>
            <AddArticleButton/>
            <ProfileButton/>
        </section>
    </nav>
</template>

<style scoped>
    .nav{
        width: 100%;
        height: 70px;
        padding: 0px 15px;
        border-bottom: 1px solid gray;
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