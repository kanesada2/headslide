<template>
<v-row fruid>
    <v-col cols="12" lg="6"><img class="img-responsive" :src="slide.url"></v-col>
    <v-col cols="12" lg="6">
        {{slide.heading}}
        <v-btn
        color="primary"
        class="mr-3"
        @click="Edit"
        >
        <v-icon>mdi-pencil</v-icon>
        </v-btn>
         <v-btn
        color="error"
        class="mr-3"
        @click="Edit"
        >
        <v-icon>mdi-delete</v-icon>
        </v-btn>
    </v-col>
</v-row>
</template>
<script>
export default {
    name: "Slide",
    props: ["slide"],
    data() {
        return {
        };
    },
}
</script>

<style>
.img-responsive {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
}
</style>