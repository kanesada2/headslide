<template>
  <section class="post">
    <header class="post-header">
            <h2 class="post-title">{{article.title}}</h2>

                <p class="post-meta">
                    By <a class="post-author" href="#">{{article.author}}</a> under <a class="post-category post-category-js" href="#">{{article.category}}</a>
                </p>
    </header>
        <div class="post-description">
          <div v-for="slide in slides" :key=slide.id class="slide-description">
              <h3>{{slide.heading}}</h3>
               <p v-html="slide.description"></p>
          </div>
        </div>
  </section>
</template>

<script>
export default {
  name: "ArticleItem",
  props: [],
  data() {
    return {
      article:{
        id: "123123123",
        title: "ブログポストデータサンプル",
        author: "Nosada",
        category: "category",
      },
      slides:
        [
          {
            id:"0",
            url: "../../img/0.png",
            heading:"0枚目のスライドに対応する見出し",
            description:"0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test0枚目は自動生成するmediumみたいなあれでいいかもしれない、表紙スライドのやつ<br>test"
          },
          {
            id:"1",
            url: "../../img/1.png",
            heading:"1枚目のスライドに対応する見出し",
            description:"1枚目のスライドはこんな感じの内容ですねあああいいいうううえええ<br><br><br><br>テストテスト"
          },
          {
            id:"0",
            url: "../../img/2.png",
            heading:"2枚目のスライドに対応する見出し",
            description:"Lorem ipsum 2枚目の内容内容内容"
          }
        ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 10px;
  font-size: 130%;
  font-weight: bold;
}
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
