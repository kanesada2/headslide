<template>
<v-container>
    <v-form
      ref="form"
      v-model="info"
      :lazy-validation="lazy"
    >
      <v-text-field
        v-model="title"
        :counter="50"
        :rules="titleRules"
        label="Title"
        required
        dark
      ></v-text-field>
      <v-text-field
        v-model="category"
        :counter="20"
        :rules="categoryRules"
        label="Category"
        required
        dark
      ></v-text-field>
    <Slide v-for="slide in slides" :slide="slide" :key="slide.id"></Slide>
    <v-btn
      color="primary"
      class="mr-4"
      @click="newSlide"
    >
    Add Slide
    </v-btn>
    <v-btn
      color="success"
      class="mr-4"
      @click="post"
    >
    Save Post
    </v-btn>
    </v-form>
</v-container>
</template>

<script>
import Slide from '@/components/SlideEdit.vue'
export default {
  name: "AddArticle",
  components: {
      Slide
  },
  data() {
    return {
      info: {
        title: "",
        category: "",
      },
      slides: [
          {
            id: "0",
            url: "https://i.imgur.com/yqVLMQQ.jpg",
            heading: "スライドは編集画面でどう見えるか"
          }
      ]
    };
  }
};
</script>
<style>

</style>