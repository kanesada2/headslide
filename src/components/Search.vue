<template>
<v-container>
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="keyword"
        label="キーワード"
        dark
      ></v-text-field>
      <v-select
        dark
        chips
        label="タグ"
        multiple
      >
      <option v-for="tag in tags" :value="tag.id" :key="tag.id">
          {{tag.name}}
      </option>
      </v-select>
    <v-layout class="justify-right">
      <v-btn
        color="primary"
        class="mr-4"
        @click="search"
      >
      検索
      </v-btn>
    </v-layout>
    </v-form>
</v-container>
</template>

<script>
export default {
  name: "Search",
  components: {
  },
  data() {
    return {
        keyword: '',
        tags: [],
    };
  },
  methods:{
      search(){

      }
    }
}
</script>
<style>

</style>