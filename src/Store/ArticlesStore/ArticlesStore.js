import {defineStore} from 'pinia';

const useArticlesStore = defineStore('articles', {
    state: () => ({
        categories: [],
        unreadArticles: 0,
        sortNewestFirst: false,
        articles: [],
        savedArticles: [],
        displayArticles: [],
        searchedArticles: [],
    }),
    actions: {
        setArticles(articles){
            this.articles = articles;
        },
        setSavedArticles(articles){
            this.savedArticles = articles;
        },
        setSearchedArticles(articles){
            this.searchedArticles = articles;
        },
        setDisplayArticles(articles){
            this.displayArticles = articles;
        },
        setUnreadArticles(count){
            this.unreadArticles = count;
        },
        setNewestFirst(){
            this.sortNewestFirst = !this.sortNewestFirst;
        },
        setAllCategories(){
            this.categories = [];
            this.articles.forEach((article) => {
                article.category.forEach((articleCategory) => {
                    for(let savedCategory of this.categories){
                        if(savedCategory.category === articleCategory){
                            for(let accountId of savedCategory.accountIds){
                                if(accountId.accountId === article.account_id){
                                    accountId.quantity += 1;
                                    return;
                                }
                            }
                            savedCategory.accountIds.push({accountId: article.account_id, quantity: 1});
                            return;
                        }
                    }
                    this.categories.push({
                        category: articleCategory,
                        accountIds: [{accountId: article.account_id, quantity: 1}]
                    });
                })
            })
        },
        setSavedCategories(){
            this.categories = [];
            this.savedArticles.forEach((article) => {
                article.category.forEach((articleCategory) => {
                    for(let savedCategory of this.categories){
                        if(savedCategory.category === articleCategory){
                            for(let accountId of savedCategory.accountIds){
                                if(accountId.accountId === article.account_id){
                                    accountId.quantity += 1;
                                    return;
                                }
                            }
                            savedCategory.accountIds.push({accountId: article.account_id, quantity: 1});
                            return;
                        }
                    }
                    this.categories.push({
                        category: articleCategory,
                        accountIds: [{accountId: article.account_id, quantity: 1}]
                    });
                })
            })
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
        removeAllCategories(){
            this.categories = [];
        },
        sortArticlesBasedOnDate(){
            const sort = (articleA, articleB) => {
                const dateA = Number(articleA.date_created);
                const dateB = Number(articleB.date_created);
                if(dateA > dateB)
                    return -1;
                else if(dateA < dateB)
                    return 1;
                else
                    return 0;
            }

            this.articles.sort(sort);
            this.savedArticles.sort(sort);
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
