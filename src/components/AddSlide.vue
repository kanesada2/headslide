<template>
<v-container>
<v-form>
  <v-text-field
        v-model="slide.heading"
        :counter="30"
        label="スライドの見出し"
        required
  ></v-text-field>
  <v-file-input label="スライドを選択" prepend-icon="mdi-image-size-select-actual"
    @change="upload"
    v-model="file"
    accept="image/png, image/jpeg, image/gif">
  </v-file-input>
  <img v-if="slide.url" :src="slide.url">
  <v-textarea
      clearable
      v-model="slide.description"
      clear-icon="mdi-delete"
      label="スライドの説明を入力(markdown)"
    ></v-textarea>
</v-form>
</v-container>
</template>

<script>
import { uuid } from 'uuidv4'
import { isNull } from 'util';
export default {
  name: "AddSlide",
  data() {
    return {
      file: null,
      slide: {
        no: 0,
        heading: '',
        description: '',
        url: ''
      }
    };
  },
  mounted: function () {
    this.$eventHub.$on('SlideSelected', this.edit)
  },
  methods: {
    upload (e){
      if(isNull(e)) return;
      const storageRef = this.$firebase.storage().ref()
      const ext = e.name.split('.').pop()
      const name = uuid() + '.' +  ext
      const ref = storageRef.child('images/slides/' + name)
      const instance = this
      ref.put(e).then(function(snap) {
        snap.ref.getDownloadURL().then(function(url) {
          instance.slide.url = url
          instance.file = null;
        });
      });
    },
    add(){
      this.$eventHub.$emit('SlideAdded', {slide:this.slide})
    },
    edit(e){
      this.slide = e;
    }
  }
};
</script>