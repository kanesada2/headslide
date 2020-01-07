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
  <v-file-input label="スライドを選択" prepend-icon="mdi-image-size-select-actual"></v-file-input>
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
      info: {
        title: "",
        category: "",
      }
    };
  }
};
</script>