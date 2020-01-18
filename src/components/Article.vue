<template>
  <section class="post">
    <header class="post-header">
      <h2 class="post-title">{{article.title}}</h2>

      <p class="post-meta">
        By <a class="post-author" :href="'user/' + article.author.id">{{article.author.name}}</a>
        <a v-for="tag_relation in article.tag_relations" :key="tag_relation.tag.id" :href="'tag/' + tag_relation.tag.id" class="post-tag">{{tag_relation.tag.name}}
        </a>
      </p>
    </header>
        <div class="post-description">
          <SlideDescription v-for="slide in article.slides" :key=slide.id :slide=slide class="slide-description" ref="slideDetail">
          </SlideDescription>
        </div>
  </section>
</template>

<script>
import gql from "graphql-tag";
import SlideDescription from '@/components/SlideDescription.vue'
const GET_ARTICLE = gql`
query getArticle {
  articles_by_pk(id: 1) {
    title
    tag_relations {
      tag {
        id
        name
      }
    }
    slides {
      order_no
      description
      title
      url
    }
    author {
      id
      name
    }
  }
}
`

export default {
  name: "ArticleItem",
  components:{SlideDescription},
  props: [],
  data() {
    return {
      topPos: 0,
      article:{
      },
    };
  },
  apollo: {
    article: {
      query: GET_ARTICLE,
      update (data) {
          return data.articles_by_pk
        }
    }
  },
  updated: function(){
      console.log(this.$el)
      this.topPos = this.$el.getBoundingClientRect().top
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>