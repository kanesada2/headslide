<template>
    <div class="slide-description">
        <h3 class="slide-heading">{{slide.heading}}</h3>
        <p v-html="slide.description" v-scroll="onScroll"></p>
    </div>
</template>

<script>
export default {
  name: "SlideDescription",
  props: ["slide"],
  data() {
    return {
     prevTop: 0 
    }
  },
  methods: {
    onScroll(){
      console.log(this.prevTop)
      const nowTop = this.$el.getBoundingClientRect().top
      console.log(nowTop);
      console.log("---");
      if(nowTop == this.prevTop){
        this.$eventHub.$emit('SlideScrolled', {url: this.slide.url})
      }
      this.prevTop = this.$el.getBoundingClientRect().top
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
p {
  z-index: 0;
}
.slide-description{
  z-index: 1;
  background: #FAFAFA;
  margin-top: 3em;
  position: sticky;
  top: 290px;
  min-height: 60vh;
}

@media (min-width: 960px) {
  .slide-description{
    top: 64px;
    min-height: 85vh;
  }
}
</style>
