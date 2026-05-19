<script setup lang="ts">
    import {onMounted, ref} from 'vue';
    import AlignJustify from './AlignJustify';
    import Grid from './Grid';
    import AlignJustifyLessContent from './AlignJustifyLessContent';
    import {Article} from '../../../Common/Types';

    const articles = ref<Array<Article>>([]);

    onMounted(async () => {
        try{
            const response = await fetch('http://localhost:4000/get-all-articles', {
                method: 'GET',
            });

            if(response.status === 200){
                const results = await response.json();
                console.log(results);
                articles.value = results;
            }
            else{
                const results = await response.text();
                console.log(results);
            } 
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    })

</script>

<template>
    <section class="all_articles_container">
        <AlignJustify v-model="articles"/>
        <Grid v-model="articles"/>
        <AlignJustifyLessContent v-model="articles"/>
    </section>
</template>

<style scoped>
    .all_articles_container{
        width: 100%;
        height: calc(100vh - 70px - 80px);
        grid-column: 2/3;
        grid-row: 2/3;
        overflow: auto;
    }

    @media(max-width: 915px){
        .all_articles_container{
            grid-row: 1/2;
        }
    }

    @media(max-width: 625px){
        .all_articles_container{
            height: initial;
            max-height: calc(100vh - 60px - 40px);
            min-height: calc(100vh - 60px - 420px);
        }
    }
</style>