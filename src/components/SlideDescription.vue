<template>
    <div class="slide-description">
      <div class="slide-heading" id="slide-heading">
        <h3>{{slide.heading}}</h3>
      </div>
        <p v-html="slide.description" v-scroll="onScroll"></p>
    </div>
</template>

<script>
export default {
  name: "SlideDescription",
  props: ["slide"],
  data() {
    return {
     prevTop: 0,
    }
  },
  methods: {
    onScroll(){
      const topPos = this.$el.getBoundingClientRect().top;
      const parentTop = this.$parent.topPos
      if(this.prevTop <= parentTop && parentTop <= this.$parent.topPos){
        this.$eventHub.$emit('SlideScrolled', {url: this.slide.url})
      }
      this.prevTop = topPos;
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
