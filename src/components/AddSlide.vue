<template>
<v-container>
<v-form>
  <v-text-field
        v-model="heading"
        :counter="30"
        :rules="heading"
        label="スライドの見出し"
        required
  ></v-text-field>
  <v-file-input label="スライドを選択" prepend-icon="mdi-image-size-select-actual"
    @change="upload"
    accept="image/png, image/jpeg, image/gif">
  </v-file-input>
  <img v-if="slide.url" :src="slide.url">
  <v-textarea
      clearable
      clear-icon="mdi-delete"
      label="スライドの説明を入力(markdown)"
    ></v-textarea>
    <v-layout class="justify-end">
      <v-btn
        color="success"
        class="mr-4"
        @click="slide"
      >
      Save
      </v-btn>
      <v-btn
        color="error"
        class="mr-4"
        @click="del"
      >
      Delete
      </v-btn>
    </v-layout>
</v-form>
</v-container>
</template>

<script>
export default {
  name: "AddSlide",
  data() {
    return {
      slide: {
        id: '',
        heading: '',
        description: '',
        url: ''
      }
    };
  },
  methods: {
    upload (e){
      const storageRef = this.$firebase.storage().ref();
      const ref = storageRef.child('images/slides/' + Date.now() + e.name);
      ref.put(e).then(function(snap) {
        snap.ref.getDownloadURL().then(function(url) {
          this.slide.url = url;
        });
      });
    }
  }
};
</script>