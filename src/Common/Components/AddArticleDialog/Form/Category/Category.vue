<script setup lang="ts">
    import {ref, onMounted, useTemplateRef} from 'vue'; 
    import {motion} from 'motion-v';
    import icons from './icons';

    const open = ref<boolean>(false);
    const selectedCategories = ref<Array<string>>([]);
    const articleCategories : Array<string> = [
        "Technology",
        "Science",
        "Health & Wellness",
        "Fitness",
        "Nutrition",
        "Mental Health",
        "Personal Finance",
        "Investing",
        "Entrepreneurship",
        "Business Strategy",
        "Marketing",
        "Productivity",
        "Self‑Improvement",
        "Education",
        "Career Development",
        "Remote Work",
        "Artificial Intelligence",
        "Cybersecurity",
        "Software Development",
        "Web Development",
        "Design & UX",
        "Art & Creativity",
        "Music",
        "Film & TV",
        "Gaming",
        "Travel",
        "Food & Cooking",
        "Lifestyle",
        "Parenting",
        "Relationships",
        "History",
        "Politics",
        "Environment",
        "Sustainability",
        "Space Exploration",
        "Automotive",
        "Real Estate",
        "Home Improvement",
        "Gardening",
        "Sports",
        "Fashion",
        "Beauty",
        "Philosophy",
        "Psychology"
    ]

    const handleOpen = () => {
        open.value = !open.value;
    }

    const handleDropdown = (e: MouseEvent) => {
        const element = e.target as HTMLDivElement;
        const category = element.dataset.category;

        if(!category) return;

        selectedCategories.value = [...new Set([...selectedCategories.value, category])];
    }

    const handleRemove = (e: MouseEvent) => {
        e.preventDefault();
      console.log('remove');
    }

</script>

<template>
    <fieldset class="fieldset">
        <label class="label">
            Enter Category
        </label>
        <label class="select" @click="handleOpen">
            <div class="select_categories">
                <div class="select_category" v-for="(category) in selectedCategories">
                    {{category}}
                    <div class="remove_button" @click="handleRemove">
                        <img :src="icons['close']">
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
                    <div class="dropdown_option" v-for="(category) in articleCategories" :data-category="category">
                        {{category}}
                    </div>
            </motion.div>
        </label>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--preset-color-grey-1);
        padding: 0px 10px;
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
        position: relative;
    }

    .arrow{
        width: 20px;
        object-fit: contain;
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
        width: 400px;
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
    }

    .remove_button{
        width: 10px;
        height: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    .remove_button > img{
        width: 10px;
        object-fit: contain;
    }

</style>

