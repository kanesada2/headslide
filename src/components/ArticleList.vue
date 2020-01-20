<template>
<div class="posts">
    <h1 class="content-subhead">Posts</h1>
  <section class="post" v-for="article in articles" :key="article.id">
    <header class="post-header">
      <router-link :to="{ name : 'post', params : { id: article.id }}" class="post-title">{{article.title}}</router-link>
      <div class="post-meta">
        By <a class="post-author" :href="'user/' + article.author.id">{{article.author.name}}</a>

        <v-chip v-for="tag_relation in article.tag_relations" :key="tag_relation.tag.id" 
        :to="'tag/' + tag_relation.tag.id" color="cyan darken-1" dark>
          {{tag_relation.tag.name}}
        </v-chip>
      </div>
    </header>
  </section>
</div>
</template>

<script>
import gql from "graphql-tag";
const LIST_ARTICLES = gql`
  query listArticles ($tags: [Int!]){
     articles(where: {tag_relations: {tag_id: {_in: $tags}}}, limit: 20){
      id
      title
      created_at
      updated_at
      author {
        id
        name
      }
      tag_relations {
        tag {
          id
          name
        }
      }
    }
  }
`
export default {
  name: 'ArticleList',
  components: {
  },
  data() {
    return {
      articles: [
      ]
    };
  },
  apollo: {
    articles: {
      query:LIST_ARTICLES,
      variables(){
        return {
          tags: this.$route.query.tags,
          keyword: this.$route.query.keyword
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.content-subhead {
    color: #999;
    border-bottom: 1px solid #eee;
    padding: 0.4em 0;
    font-size: 80%;
    font-weight: 500;
    letter-spacing: 0.1em;
}

.post {
    padding-bottom: 1.5em;
    border-bottom: 1px solid #eee;
}

.post-title {
    font-size: 2em;
    color: #222 !important;
    margin-bottom: 0.2em;
}
.post-avatar {
    border-radius: 50px;
    float: right;
    margin-top: -3em;
    margin-left: 1em;
}
.post-description {
    color: #444;
    line-height: 1.8em;
}
.post-meta {
    color: #999;
    font-size: 90%;
    margin: 0;
}
.post-author {
  color: #42b983 !important;
  font-size : 110%;
  margin: 0 .5em 0 0;
}
</style>
