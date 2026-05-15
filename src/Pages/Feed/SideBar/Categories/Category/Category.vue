<script setup lang="ts">
    import {ref} from 'vue';
    import {motion} from 'motion-v';

    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }

</script>

<template>
    <motion.div 
        layout
        class="category">
        <div class="category_header" @click="handleOpen">
            <div/>
            Frontend
            <p class="category_total">
                26
            </p>
        </div>
        <motion.ul
            v-if="open"
            class="category_dropdown">
            <li class="category_content">
                <div class="category_image">
                    C
                </div>
                CSS-Tricks
                <p class="category_quantity">
                    14
                </p>
            </li>
        </motion.ul>
    </motion.div>
</template>

<style scoped>
    .category{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .category_header{
        color: var(--preset-color-black-4);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text--font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 10px;
    }

    .category_header > div{
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: var(--preset-color-blue-1);
    }

    .category_total{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-6-font-family);
        font-size: var(--preset-text-6-font-size);
        font-weight: var(--preset-text-6-font-weight);
        line-height: var(--preset-text-6-line-height);
        letter-spacing: var(--preset-text-6-letter-spacing);
    }

    .category_dropdown{
        list-style-type: none;
        margin: 0px;
        padding: 0px 0px 0px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .category_content{
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        column-gap: 10px;
        color: var(--preset-color-black-3);
        font-family: var(--preset-text-6-font-family);
        font-size: var(--preset-text-6-font-size);
        font-weight: var(--preset-text-6-font-weight);
        line-height: var(--preset-text-6-line-height);
        letter-spacing: var(--preset-text-6-letter-spacing);
    }

    .category_image{
        width: 15px;
        height: 15px;
        border-radius: 5px;
        background-color: var(--preset-color-blue-1);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .category_quantity{
        margin: 0px;
        color: var(--preset-color-grey-1);
        font-family: var(--preset-text-6-font-family);
        font-size: var(--preset-text-6-font-size);
        font-weight: var(--preset-text-6-font-weight);
        line-height: var(--preset-text-6-line-height);
        letter-spacing: var(--preset-text-6-letter-spacing);
    }

</style>