<script setup lang="ts">
    import {useRouter} from 'vue-router';
    import icons from '../icons';

    const router = useRouter();

    const handleRouter = (link : string) => {
        router.push(link);
    }
</script>

<template>
    <footer class="footer">
        <ul class="footer_links">
            <li>
                <button class="footer_link" @click="handleRouter('/profile')">
                    <img :src="icons['account']"/>
                </button>
            </li>
            <li>
                <button class="footer_link" @click="handleRouter('/profile/articles')">
                    <img :src="icons['article']"/>
                </button>
            </li>
            <li>
                <button class="footer_link" @click="handleRouter('/profile/preferences')">
                    <img :src="icons['preferences']"/>
                </button>
            </li>
            <li>
                <button class="footer_link" @click="handleRouter('/profile/notifications')">
                    <img :src="icons['notification']"/>
                </button>
            </li>
            <li>
                <button class="footer_link" @click="handleRouter('/profile/security')">
                    <img :src="icons['security']"/>
                </button>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
    .footer{
        width: 100%;
        height: 60px;
        border-top: 1px solid var(--preset-color-grey-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer_links{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .footer_link{
        width: 55px;
        height: 45px;
        border: none;
        border-radius: 10px;
        background: var(--preset-linear-gradient-purple-black-1);
        padding: 0px;
        cursor: pointer;
    }

    .footer_link:hover{
        background-color: var(--preset-color-grey-3);
    }

    .footer_link:active{
        background-color: var(--preset-color-grey-2);
    }

    .footer_link > img{
        width: 30px;
        object-fit: contain;
    }

    .footer_links > li:nth-of-type(3) img{
        width: 40px;
    }
</style>