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
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
    window.addEventListener('load', ()=> {
      this.onScroll()
      this.onResize()
    })
  },
  computed:{
    isInScreen(){
        return true;
    }
  },
  methods: {
    onScroll () {this.scrollY = window.pageYOffset},
    onResize () {this.height = document.documentElement.clientHeight} ,
    getPosition () {
      if(this.$el){
        return this.$el.getBoundingClientRect().top +
            this.scrollY - this.height
        }else{
            return 0
        }
    },
    log($v){
        /**
          * on and once argument only
            ~ el → dom element
        **/
        $v.enter = (el) => {
         console.log(this.slide.url)
         this.scrollY = el
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
