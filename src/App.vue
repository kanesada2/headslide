<template>
 <v-app>
     <div>
        <v-app-bar color="#e84118" dark flat fixed>    
               <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title><a href="/" class="custom-brand">HeadSlide</a></v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-menu
                    left
                    bottom
                >
                    <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                    </template>

                    <v-list>
                    <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>
        </div>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="3" class="sidebar">
                <router-view name="sidebar"></router-view>
            </v-col>
            <v-col cols="12" md="9" class="content">
                <router-view name="content"></router-view>
            </v-col>
        </v-row>
    </v-container>
 </v-app>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: rgb(61, 146, 201);
}
a:hover,
a:focus {
    text-decoration: underline;
}

h3 {
    font-weight: 100;
}

.custom-brand{
    color: #f5f6fa !important;
}

.custom-brand:hover,
.custom-brand:focus,
.menu-link:hover,
.menu-link:focus {
    text-decoration: none;;
    background: transparent;
}

.sidebar {
    position: fixed;
    height: 30%;
    top: 56px;
    left: 0;
    margin: 0;
    background: #353b48;
    color: #f5f6fa;
}

.content {
    padding: 2em 2em 0;
    margin-top: 280px;
}

@media (min-width: 960px) {
    .content {
        padding: 2em 2em 0;
        margin-left: 26%;
        margin-top: 64px;
    }

    .sidebar {
        height: 100%;
        position: fixed;
        top: 64px;
        bottom: 0;
    }
}
</style>
