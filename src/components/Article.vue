<template>
  <section class="post">
    <header class="post-header">
      <h2 class="post-title">{{article.title}}</h2>

      <div class="post-meta">
        By <a class="post-author" :href="'user/' + article.author.id">{{article.author.name}}</a>
        <v-chip v-for="tag_relation in article.tag_relations" :key="tag_relation.tag.id" 
        :to="'tag/' + tag_relation.tag.id" color="cyan darken-1" dark small>
          {{tag_relation.tag.name}}
        </v-chip>
      </div>
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
query getArticle($id: Int!) {
  articles_by_pk(id: $id) {
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
      variables() {
        return {
          id: this.$route.params.id
        }
      },
      update (data) {
          return data.articles_by_pk
        }
    }
  },
  updated: function(){
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