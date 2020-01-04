<template>
<div class="slide-area" id="slide-area">
                    <img class="img-responsive" :src="url">
</div>
</template>
<script>
export default {
    name: "Slide",
    src: '',
    props: [],
    data() {
        return {
            url:'/img/0.png',
            src: require('/img/0.png')
        };
    },
    mounted: function () {
    this.$eventHub.$on('SlideScrolled', this.changeSlide)
    },
    methods:{
     changeSlide(e) {
         if(this.url == e.url) return;
         this.url = e.url;
         //this.src = require(e.url);
         console.log(e.src);
     }
 }
}
</script>

<style>
.slide-area {
    width: 95%;
    height: 95%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    position: absolute;
    margin: auto;
    }
.img-responsive {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
}
@media (min-width: 960px){
    .slide-area{
        height: 50%;
    }
}
</style>