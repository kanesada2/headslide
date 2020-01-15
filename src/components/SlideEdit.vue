<template>
<v-row fruid :class="{selected: isSelected}">
        <v-col cols="12" sm="6"><img class="img-responsive" :src="slide.url"></v-col>
        <v-col cols="12" sm="6">
            {{slide.heading}}
            <v-layout align-end justify-center>
                <v-btn
                color="primary"
                class="mr-4"
                @click="edit"
                >
                <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                color="error"
                class="mr-4"
                @click="del"
                >
                <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-layout>
        </v-col>
</v-row>
</template>
<script>
export default {
    name: "Slide",
    props: ["slide"],
    data() {
        return {
            isSelected: true
        };
    },
    mounted: function () {
        this.$eventHub.$on('SlideSelected', this.handleSelect)
  },
    methods:{
        edit() {
            this.$eventHub.$emit('SlideSelected', this.slide)
        },
        handleSelect(e) {
            this.isSelected = (e.no == this.slide.no);
        },
        del(){
            this.$emit('delSlide', this.slide.no)
        }
    }
}
</script>

<style>
.img-responsive {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
}
.selected {
    background: #494f5a;
}

</style>