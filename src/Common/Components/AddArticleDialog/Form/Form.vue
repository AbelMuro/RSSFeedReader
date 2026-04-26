<script setup lang="ts">
    import TitleInput from './TitleInput';
    import ContentTextArea from './ContentTextArea';
    import Category from './Category';

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const titleElement = form.elements.namedItem('title') as HTMLInputElement;
        const contentElement = form.elements.namedItem('content') as HTMLTextAreaElement;
        const categoryElement = form.elements.namedItem('category') as HTMLSelectElement;
        const title = titleElement.value;
        const content = contentElement.value;
        const category = categoryElement.value;
        console.log(title, content, category);
    }
</script>

<template>
    <form class="form" @submit="handleSubmit">
        <TitleInput/>
        <ContentTextArea/>
        <Category/>
        <button class="submit">
            Create Article
        </button>
    </form>
</template>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        grid-column: 1/3;
        grid-row: 2/3;
    }

    .submit{
        width: 100%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background: var(--preset-linear-gradient-purple-black);
        color: var(--preset-color-white-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
        cursor: pointer;
    }
</style>