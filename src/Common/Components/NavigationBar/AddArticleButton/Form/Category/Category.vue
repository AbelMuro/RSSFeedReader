<script setup lang="ts">
    import {ref} from 'vue'; 
    import {motion} from 'motion-v';
    import icons from './icons';

    const category = ref<string>('Technology');
    const open = ref<boolean>(false);

    const handleOpen = () => {
        open.value = !open.value;
    }   
</script>

<template>
    <fieldset class="fieldset">
        <label for="category" class="label">
            Select Category
        </label>
         <motion.img 
            class="select_arrow" 
            :src="icons['arrow']" 
            :initial="false"
            :animate="open ? {rotate: '180deg'} : {rotate: '0deg'}"
            />
        <select class="select" id="category" name="category" v-model="category" @click="handleOpen" @blur="handleOpen">
            <option value="Technology">Technology</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Business">Business</option>
            <option value="Health">Health</option>
            <option value="Science">Science</option>
            <option value="World">World</option>
        </select>
    </fieldset>
</template>

<style scoped>
    .fieldset{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 0px;
        padding: 0px;
        border: none;
        position: relative;
    }

    .label{
        color: var(--preset-text-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .select{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid var(--preset-color-grey-1);
        padding: 0px 10px;
        cursor: pointer;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        appearance: none;
        -webkit-appearance: none; /* Safari */
        -moz-appearance: none;    /* Firefox */
        background-image: none;   /* Some browsers still show an arrow */
    }

    .select_arrow{
        width: 20px;
        object-fit: contain;
        position: absolute;
        top: 58%;
        right: 10px;
        pointer-events: none;
    }

    .select:focus{
        outline: none;
        border: 1px solid var(--preset-color-black-1);
    }

</style>

