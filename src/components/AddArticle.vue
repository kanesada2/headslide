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
      <v-layout align-baseline>
        <v-col cols="12" sm="9">
          <v-text-field
            v-model="targetTag"
            :counter="20"
            label="Tag"
            required
            dark
          ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
          <v-btn 
          color="primary"
          class="mr-3"
          dark
          @click="appendTag"
          >追加</v-btn>
        </v-col>
      </v-layout>
      <v-chip
          v-for="tag in info.tags"
          :key="tag"
          class="ma-2"
          color="cyan darken-1"
          dark
          @click="editTag(tag)"
      >
        {{tag}}
      </v-chip>
      <v-layout class="button-ctrl justify-center">
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
    <draggable v-model="slides">
      <transition-group>
        <Slide v-for="slide in slides" :slide="slide" :key="slide.no" @delSlide="delSlide"></Slide>
      </transition-group>
    </draggable>
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
      tagCount: 0,
      slideCount : 0,
      info: {
        title: "",
        tags: [],
      },
      slides: [

      ],
      targetTag: ""    
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
      },
      delSlide(no){
        const targetIndex = this.slides.findIndex((slide) => slide.no == no)
        this.slides.splice(targetIndex, 1)
      },
      post() {

      },
      appendTag(){
        this.info.tags.push(this.targetTag)
        this.targetTag = ""
      },
      editTag(e){
        this.delTag(e)
        this.targetTag = e
      },
      delTag(e){
        this.info.tags.splice(this.info.tags.findIndex((tag) => tag == e), 1)
      }
    }
}
</script>
<style>
.button-ctrl {
  margin: 1em 0 !important;
}
</style>