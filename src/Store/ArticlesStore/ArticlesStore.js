import {defineStore} from 'pinia';

const useArticlesStore = defineStore('articles', {
    state: () => ({
        categories: [],
        unreadArticles: 0
    }),
    actions: {
        setTotalArticles(count){
            this.unreadArticles = count;
        },
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
        removeCategory(categoryToDelete){
            this.categories = this.categories.filter((category) => category.category !== categoryToDelete.category);
        }
    }
});

export default useArticlesStore;
