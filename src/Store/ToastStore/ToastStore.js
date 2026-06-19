import {defineStore} from 'pinia';

const useToastStore = defineStore('toast', {
    state: () => ({
        show: false,
        message: '',
        timeout: null
    }),
    actions: {
        showToast(message){
            if(this.timeout)
                clearTimeout(this.timeout);

            this.message = message;
            this.show = true;
            this.timeout = setTimeout(() => {
                this.show = false;
                this.message = '';
            }, 3000);
        }
    }
});

export default useToastStore;