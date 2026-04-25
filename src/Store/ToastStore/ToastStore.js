import {defineStore} from 'pinia';

const useToastStore = defineStore('toast', {
    state: () => ({
        show: false,
        message: ''
    }),
    actions: {
        showToast(message){
            this.message = message;
            this.show = true;
            setTimeout(() => {
                this.show = false;
                this.message = '';
            }, 3000);
        }
    }
});

export default useToastStore;