<script setup lang="ts">
    import {ref, onMounted, useTemplateRef, watch} from 'vue'; 
    import {motion} from 'motion-v';
    import icons from './icons';

    const inputRef = useTemplateRef('category-input');
    const category = ref<string>('');
    const allCategories = ref<Array<string>>([]);

    const handleClick = (e : MouseEvent) => {
        inputRef.value?.focus();
    }
    
    const handleKeyboard = (e : KeyboardEvent) => {
        const key = e.key;

        if(key !== ' ') return;

        requestAnimationFrame(() => {
            if(category.value === ' '){
                category.value = '';
                return;
            }
            const noDuplicateCategories = [...new Set([...allCategories.value])];
            allCategories.value = [...noDuplicateCategories, category.value];
            category.value = '';            
        })
    }

    onMounted(() => {
        inputRef.value?.addEventListener('keydown', handleKeyboard);
    });


</script>

<template>
    <fieldset class="fieldset">
        <label for="category" class="label">
            Select Category
        </label>
        <fieldset class="input_container" @click="handleClick">
            <span class="input_category" v-for="(category) in allCategories">
                {{category}}
            </span>
            <input 
                type="text"
                class="input"
                ref="category-input"
                maxLength="10"
                v-model="category"
                >
        </fieldset>
        <input type="hidden" :value="allCategories" name="category"/>
    </fieldset>
</template>

<style scoped>
    .fieldset{
        width: 350px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 0px;
        padding: 0px;
        border: none;
    }

    .label{
        color: var(--preset-text-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .input_container{
        width: 350px;
        height: 40px;   
        border-radius: 5px;     
        border: none;
        padding: 0px 10px;
        margin: 0px;
        border: 1px solid var(--preset-color-grey-1);
        background-color: white;
        display: flex;
        align-items: center;
        gap: 5px;
        overflow: hidden;
    }

    .input{
        width: 100%;
        height: 40px;
        padding: 0px 10px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
    
    .input:focus{
        outline: none;
    }

    .input_category{
        padding: 5px;
        background-color: green;
        border-radius: 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

</style>

