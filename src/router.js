import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList.vue'
import AddArticle from '@/components/AddArticle.vue'
import Article from '@/components/Article.vue'
import Tags from '@/components/Tags.vue'
import Slide from '@/components/Slide.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      { 
        path: '/',
        components: {
            sidebar: Tags,
            content: ArticleList
        }
      },
      {
        path: '/add',
        component: AddArticle
      },
      {
        path: '/post/:id',
        name: 'post',
        components: 
        {
            sidebar: Slide,
            content: Article
        }
      }
    ]
  })