import {ref, onMounted, onBeforeUnmount} from 'vue';

function useMediaQuery(initialQuery){
    const matches = ref(false);
    let media;

    const handleMediaChange = (e) => {
        matches.value = e.matches;
    }

    onMounted(() => {
        media = window.matchMedia(initialQuery);
        matches.value = media.matches;
        media.addEventListener('change', handleMediaChange);
    });

    onBeforeUnmount(() => {
        if(!media) return;

        media.removeEventListener('change', handleMediaChange)
    })

    return matches;
}

export default useMediaQuery;