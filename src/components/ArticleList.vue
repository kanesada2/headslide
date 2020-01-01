<template>
<div class="posts">
    <h1 class="content-subhead">Posts</h1>
  <section class="post" v-for="article in articles" :key="article.id">
    <header class="post-header">
      <router-link :to="{ name : 'post', params : { id: article.id }}" class="post-title">{{article.title}}</router-link>
      <p class="post-meta">
        By <a class="post-author" href="#">{{article.author}}</a> under <a class="post-category post-category-js" href="#">{{article.category}}</a>
      </p>
    </header>
  </section>
</div>
</template>

<script>
export default {
  name: 'ArticleList',
  components: {
  },
  data() {
    return {
      articles: [
        {
          id: "123123123",
          title: "ブログポストデータサンプル",
          author: "Nosada",
          category: "category",
          body: "Lorem ipsum"
        }
      ]
    };
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

.post-category {
    margin: 0 0.1em;
    padding: 0.3em 1em;
    color: #fff !important;
    background: #00a8ff;;
    font-size: 80%;
    border-radius: 16px;
}

.post-category:hover,
.post-category:focus {
    text-decoration: none;
}
.post-author {
  color: #42b983 !important;
}
</style>
