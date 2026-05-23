import {defineStore} from 'pinia';

/*
    type Category = {
        category: string,
        accountIds: Array<{accountId: string, quantity: number}>
    }
*/


const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: []
    }),
    actions: {
        addCategory(newCategory){
            for(let category in this.categories){
                if(category.category === newCategory.category){
                    for(let accountId in category.accountIds){
                        if(accountId.accountId === newCategory.accountId){
                            accountId.quantity += 1;
                            return;
                        }
                    }
                    category.accountIds.push({accountId: newCategory.accountId, quantity: 1});
                    return;
                }
            }
            this.categories.push({
                category: newCategory.category,
                accountIds: [{accountId: newCategory.accountId, quantity: 1}]
            });
        },
        deleteCategory(categoryToDelete){
            this.categories = this.categories.filter((category) => {
                return category !== categoryToDelete;
            })
        }
    }
});

export default useCategoriesStore;