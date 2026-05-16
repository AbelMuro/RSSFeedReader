import {defineStore} from 'pinia';

const useLayoutStore = defineStore('layout', {
    state: () => ({
        layout: 'align-justify'
    }),
    actions: {
        changeLayout(layout) {
            this.layout = layout;
        }
    }
});

export default useLayoutStore;