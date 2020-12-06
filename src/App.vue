<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";
import AppBar from "./views/AppBar.vue";
import About from "./views/About.vue";

export default {
  name: "App",

  components: {
    Home,
    AppBar,
    About,
  },

  data() {
    return {};
  },
};
</script>
