import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList.vue'
import AddSlide from '@/components/AddSlide.vue'
import AddArticle from '@/components/AddArticle.vue'
import Article from '@/components/Article.vue'
import Tags from '@/components/Tags.vue'
import Slide from '@/components/Slide.vue'
import Login from '@/components/Login.vue'

Vue.use(Router)
let router = new Router({
    mode:'history',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'active-link',
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
        components: {
          sidebar: AddArticle,
          content: AddSlide
        },
        meta: { requiresAuth: true }
      },
      {
        path: '/post/:id',
        name: 'post',
        components: 
        {
            sidebar: Slide,
            content: Article
        }
      },
      {
        path: '/login',
        components: {
          sidebar: Tags,
          content: Login
        }
      }
    ]
  })
  export default router;
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next({ path: '/login', query: { redirect: to.fullPath }});
      next();
    } else {
      next();
    }
  });