import Vue from 'vue'
import Vuex from 'vuex'
import articles from '@/assets/articles.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles
    },
    getters: {
        articles: state => state.articles,
        articleLookup: (state) => (key) => state.articles.find(article => article.name === key)
    },
    mutations: {
        
    },
    actions: {

    }
})