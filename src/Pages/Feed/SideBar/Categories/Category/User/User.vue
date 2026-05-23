<script setup lang="ts">
    import {motion} from 'motion-v';

    type CategoryAccount = {
        accountId: string,
        quantity: number
    }    

    const {account} = defineProps<{account: CategoryAccount}>();
    console.log(account);


    type custom = {show : number, exit: number}; 
    const LIvariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        show: (index : custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: index.show * 0.15,
            },
        }),
    }
</script>

<template>
    <motion.li 
        :variants="LIvariant"
        layout
        :custom="{show: 1}"
        class="category_content">
            <div class="category_image">
                C
            </div>
            CSS-Tricks
            <p class="category_quantity">
                14
            </p>
    </motion.li>  
</template>

<style scoped>
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