<script setup lang="ts">
    import {ref, watch, onMounted, onBeforeUnmount} from 'vue'; 
    import Categories from '../../../../Common/Categories';
    import {motion} from 'motion-v';
    import icons from './icons';

    const error = defineModel<string>()
    const {limit, prevCategories} = defineProps<{limit?: number | undefined, prevCategories?: Array<string> | undefined}>();
    const open = ref<boolean>(false);
    const selectedCategories = ref<Array<string>>(prevCategories || []);

    const handleOpen = (e : MouseEvent) => {
        const target = e.target as HTMLLabelElement; 
        const classes = target.classList;

        if(classes.contains('select_category') || classes.contains('remove_button') || classes.contains('remove_icon')) return;

        open.value = !open.value;
    }

    const handleDropdown = (e: MouseEvent) => {
        const element = e.target as HTMLDivElement;
        const category = element.dataset.category;

        if(!category) return;

        if(limit && selectedCategories.value.length + 1 > limit){
            error.value = "Articles can only have at most 3 categories";
            return;
        }
        selectedCategories.value = [...new Set([...selectedCategories.value, category])];
    }

    const handleRemove = (categoryToRemove : string) => {
      selectedCategories.value = selectedCategories.value.filter((selectedCategory) => selectedCategory !== categoryToRemove);
    }

    const handleClick = (e : MouseEvent) => {
        const target = e.target as HTMLLabelElement;

        if(!target.closest('.select'))
            open.value = false;
    }

    watch(selectedCategories, (newCategories) => {
        if(newCategories.length)
            error.value = '';
    });

    watch(() => prevCategories, (prevCategories) => {
        if(prevCategories)
            selectedCategories.value = prevCategories;
    })
    

    onMounted(() => {
        document.addEventListener('click', handleClick);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClick);
    });

</script>

<template>
    <fieldset class="fieldset-category">
        <label class="label">
            Enter Category
        </label>
        <label class="select" @click="handleOpen">
            <div class="select_categories">
                <div 
                    class="select_category" 
                    v-for="(category) in selectedCategories"
                    :style="{
                        backgroundColor: Categories[category].backgroundColor,
                        color: Categories[category].color
                    }"
                    >
                    {{category}}
                    <div class="remove_button" @click="handleRemove(category)">
                        <img class="remove_icon" :src="icons['close']">
                    </div>
                </div>
            </div>
            <motion.img 
                class="arrow" :src="icons['arrow']"
                :initial="false"
                :animate="open ? {rotate: '180deg'} : {rotate: '0deg'}"
                />
            <motion.div 
                v-if="open"
                :initial="{scale: 0}"
                :animate="{scale: 1}"
                class="dropdown" 
                @click="handleDropdown">
                    <div 
                        class="dropdown_option" 
                        v-for="(category) in Object.keys(Categories)" 
                        :data-category="category"
                        >
                            {{category}}
                    </div>
            </motion.div>
        </label>
        <input type="hidden" name="categories" :value="selectedCategories.join(',')"/>
    </fieldset>
</template>

<style scoped>
    .fieldset-category{
        width: 100%;
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

    .select{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 1fr auto;
        border: 1px solid var(--preset-color-grey-1);
        padding: 0px 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
        position: relative;
        background-color: white;
    }

    .arrow{
        width: 20px;
        object-fit: contain;
        align-self: center;
    }

    .select:focus{
        outline: none;
        border: 1px solid var(--preset-color-black-1);
    }

    .dropdown{
        width: 100%;
        height: 300px;
        padding: 10px 10px 15px 10px;
        border-radius: 5px;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: var(--preset-box-shadow-1);
        background-color: var(--preset-color-white-1);
        position: absolute;
        top: 50px;
        left: 0px;
    }


    .dropdown_option{
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }

    .select_categories{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        overflow: auto;
    }

    .select_category{
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 5px;
        flex-shrink: 0;
        padding: 5px;
        border-radius: 5px;
        background-color: var(--preset-color-pink-1);
        color: var(--preset-color-pink-2);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        cursor: default;
    }

    .remove_button{
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        cursor: pointer;
    }

    .remove_icon{
        width: 15px;
        object-fit: contain;
    }

</style>

