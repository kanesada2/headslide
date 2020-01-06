<template>
    <div>
        <h3>{{slide.heading}}</h3>
        <p v-html="slide.description" v-inview:on="log"></p>
    </div>
</template>

<script>
export default {
  name: "SlideDescription",
  props: ["slide"],
  data() {
    return {
      scrollY: 0,
      height: 0,
      position: 0,
    }
  },
  methods: {
    log($v){
        /**
          * on and once argument only
            ~ el → dom element
        **/
        $v.enter = (el) => {
         this.scrollY = el
         this.$eventHub.$emit('SlideScrolled', {url: this.slide.url});
         return true;
        }
        $v.exit = (el) => {
          /* logic code */
          this.scrollY = el
        }
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
