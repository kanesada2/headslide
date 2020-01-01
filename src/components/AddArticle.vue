<template>
  <form @submit="submit">
    <fieldset>
      <input type="text" placeholder="タイトル" v-model="title">
      <input type="text" placeholder="カテゴリー" v-model="category">
      <textarea placeholder="内容" v-model="body"></textarea>
    </fieldset>
    <input class="button-primary" type="submit" value="Send">
  </form>
</template>

<script>
export default {
  name: "AddArticle",
  data() {
    return {
        id: "",
        title: "",
        category: "",
        body: ""
    };
  }
};
</script>