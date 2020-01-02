<template>
    <div>
        <h3>{{slide.heading}}</h3>
        <p v-html="slide.description"></p>
    </div>
</template>

<script>
export default {
  name: "SlideDescription",
  props: ["slide"],
  data() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(e) {
        console.log(e.target);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 10px;
  font-size: 130%;
  font-weight: bold;
}
</style>
