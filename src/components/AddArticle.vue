<template>
<v-container @delSlide="delSlide">
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="info.title"
        :counter="50"
        label="Title"
        required
        dark
      ></v-text-field>
      <v-text-field
        v-model="info.category"
        :counter="20"
        label="Category"
        required
        dark
      ></v-text-field>
    <Slide v-for="slide in slides" :slide="slide" :key="slide.no"></Slide>
    <v-layout class="justify-center">
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
    </v-layout>
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
      slideCount : 0,
      info: {
        title: "",
        category: "",
      },
      slides: [

      ]
    };
  },
  mounted: function () {
    this.$eventHub.$on('SlideAdded', this.appendSlide)
    this.$eventHub.$on('delSlide', this.delSlide)
  },
  methods:{
      appendSlide(e) {
          this.slides.push(e.slide)
          this.slideCount++
      },
      newSlide() {
        this.$eventHub.$emit('SlideCreated', {
          no: this.slideCount,
          heading: '',
          description: '',
          url: ''
        })
      },
      delSlide(no){
        const deleted = this.slides.filter(slide => slide.no != no)
        this.slides = deleted;
      },
      post() {

      }
    }
}
</script>
<style>

</style>