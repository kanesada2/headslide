<template>
<div class="tags">
    <a href="tags/SnowballGame" class="button-nav">SnowballGame</a>
    <a href="tags/ExicitingHR" class="button-nav">ExcitingHR</a>
    <a href="tags/Kusayakify" class="button-nav">Kusayakify</a>
    <a href="tags/OutofBounds" class="button-nav">OutOfBounds</a>
    <a href="tags/DerbyJockey" class="button-nav">DerbyJockey</a>
    <a href="tags/MCRailways" class="button-nav">MCRailways</a>
    <a href="tags/Timer" class="button-nav">Timer</a>
    <a href="tags/NameAwesomeEasily" class="button-nav">NameAwesomeEasily</a>
    <a href="tags/worthless" class="button-nav">その他</a>
</div> 
</template>>
<script>
export default {
  name: "Tags",
  props: [],
  data() {
    return {
    };
  }
};
</script>

<style>
.tags {
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: relative;
    margin: auto;
    text-align: center;
    overflow-y: scroll;
}

.tags::-webkit-scrollbar {
    display: none;
}

.button-nav {
    display: inline-block;
    color: #eee !important;
    background: #00a8ff;
    width: 12em;
    margin: 1em;
    padding: .5em;
    border-radius: 5px;
    transition: all .5s ease-in;
}

.button-nav:hover,
.button-nav:focus {
    text-decoration: none;
    border-radius: 30px;
    box-shadow: inset 0px 0px 0px 3px #f5f6fa;
}
@media (min-width: 960px) {
    .tags {
        width: 15em;
        height: 100%;
    }

    .button-nav {
        display: block;
        margin: 1.5em;
    }
}
</style>