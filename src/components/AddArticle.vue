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
    <Slide v-for="slide in slides" :slide="slide" :key="slide.no" @delSlide="delSlide"></Slide>
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
  },
  methods:{
      appendSlide(e) {
        const targetIndex = this.slides.findIndex((slide) => slide.no == e.slide.no)

        if(targetIndex === -1){
          this.slides.push(e.slide)
          this.slideCount++
        }else{
          this.slides.splice(targetIndex, 1, e.slide);
        }
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
        const targetIndex = this.slides.findIndex((slide) => slide.no == no)
        this.slides.splice(targetIndex, 1)
      },
      post() {

      }
    }
}
</script>
<style>

</style>