<template>
<v-container>
    <v-form
      ref="form"
    >
      <v-select
        dark
        v-model="selected_tags"
        :items="tags"
        item-text="name"
        item-value="id"
        label="タグ"
        multiple
        color="success"
      >
        <template v-slot:selection="{item}">
            <v-chip color="cyan darken-1">
                <span>{{item.name}}</span>
            </v-chip>
        </template>
      </v-select>
    <v-layout class="justify-right">
      <v-btn
        color="primary"
        class="mr-4"
        @click="search"
      >
      検索
      </v-btn>
    </v-layout>
    </v-form>
</v-container>
</template>

<script>
import gql from 'graphql-tag'
const GET_TAGS = gql`
    query get_tags {
        tags {
            id
            name
        }
    }
`
export default {
  name: "Search",
  components: {
  },
  data() {
    return {
        keyword: '',
        tags: [
        ],
        selected_tags: []
    };
  },
  apollo: {
      tags : {
          query: GET_TAGS
      }
  },
  methods:{
      search(){
          this.$router.push({path:'search', query:{tags:this.selected_tags}});
      }
    }
}
</script>
<style>

</style>