<template>
 <v-app>
    <v-app-bar app color="blue darken-2" dark>
      <div class="d-flex align-center">
        <v-list-item> springboot </v-list-item>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <a href="/oauth2/authorization/google" class="mr-4">Google로 로그인</a>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
		
       <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home.vue";


export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  }),
};
</script>
