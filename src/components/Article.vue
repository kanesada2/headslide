<template>
  <section class="post">
    <header class="post-header">
            <h2 class="post-title">{{article.title}}</h2>

                <p class="post-meta">
                    By <a class="post-author" href="#">{{article.author}}</a> under <a class="post-category post-category-js" href="#">{{article.category}}</a>
                </p>
    </header>
        <div class="post-description">
          <SlideDescription v-for="slide in slides" :key=slide.id :slide=slide class="slide-description" ref="slideDetail">
          </SlideDescription>
        </div>
  </section>
</template>

<script>
import SlideDescription from '@/components/SlideDescription.vue'
export default {
  name: "ArticleItem",
  components:{SlideDescription},
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
            id:"2",
            url: "../../img/2.png",
            heading:"2枚目のスライドに対応する見出し",
            description:"Lorem ipsum 2枚目の内容内容内容"
          },
          {
            id:"3",
            url: "../../img/3.png",
            heading:"3枚目のスライドに対応する見出し",
            description:"Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>Lorem ipsum <br>"
          },
          {
            id:"4",
            url: "../../img/not-on-top.png",
            heading:"4枚目のスライドに対応する見出し",
            description:"入っているはずがないやつ"
          }
        ]
    };
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
