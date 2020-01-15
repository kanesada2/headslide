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
    <draggable v-model="slides">
      <transition-group>
        <Slide v-for="slide in slides" :slide="slide" :key="slide.no" @delSlide="delSlide"></Slide>
      </transition-group>
    </draggable>
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
import draggable from 'vuedraggable'
export default {
  name: "AddArticle",
  components: {
      Slide,
      draggable
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
  methods:{
      newSlide() {
        const newSlide = {
          no: this.slideCount,
          heading: '',
          description: '',
          url: ''
        }
        this.slides.push(newSlide)
        this.slideCount++
        this.$eventHub.$emit('SlideSelected', newSlide)
        console.log(this.slides);
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