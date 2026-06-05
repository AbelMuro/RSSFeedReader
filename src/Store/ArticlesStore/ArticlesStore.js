import {defineStore} from 'pinia';

const useArticlesStore = defineStore('articles', {
    state: () => ({
        categories: [],
        unreadArticles: 0,
        sortNewestFirst: false,
        articles: []
    }),
    actions: {
        setArticles(articles){
            this.articles = articles;
        },
        setUnreadArticles(count){
            this.unreadArticles = count;
        },
        setNewestFirst(){
            this.sortNewestFirst = !this.sortNewestFirst;
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
        },
        sortArticlesBasedOnDate(){
            this.articles.sort((articleA, articleB) => {
                const dateA = Number(articleA.date_created);
                const dateB = Number(articleB.date_created);
                if(dateA > dateB)
                    return -1;
                else if(dateA < dateB)
                    return 1;
                else
                    return 0;
            })
        },
        sortArticlesAlphabetically(){
            this.articles.sort((articleA, ArticleB) => {
                const titleA = articleA.title.toLowerCase();
                const titleB = ArticleB.title.toLowerCase();

                if(titleA < titleB)
                    return -1;
                else if(titleA > titleB)
                    return 1;
                else
                    return 0;
            })
        },
    }
});

export default useArticlesStore;
