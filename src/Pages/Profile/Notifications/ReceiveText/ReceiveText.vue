<script setup lang="ts">
    import Switch from '../../../../Common/Components/Switch';

    const itemName = 'text-updates';

    const watcher = async (on : boolean) => {
        try{
            const response = await fetch('http://localhost:4000/receive-texts', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({receiveTexts: on}),
                credentials: 'include'
            });

            const results = await response.text();
            console.log(results);
        }
        catch(error : any){
            const message = error.message;
            console.log(message);
        }
    }
</script>

<template>
    <section class="email">
        <Switch :item="itemName" :watcher="watcher"/>
        Receive Text Updates
    </section>
</template>

<style scoped>
    .email{
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--preset-color-black-1);
        font-family: var(--preset-text-5-font-family);
        font-size: var(--preset-text-5-font-size);
        font-weight: var(--preset-text-5-font-weight);
        line-height: var(--preset-text-5-line-height);
        letter-spacing: var(--preset-text-5-letter-spacing);
    }
</style>