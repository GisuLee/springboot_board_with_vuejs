<template>
  <v-app-bar app color="blue darken-2" dark>
    <div class="d-flex align-center">
      <v-list-item> springboot </v-list-item>
    </div>

    <v-spacer></v-spacer>
    <div align="center" justify="center" v-if="isLogin">
      {{ getUserName }}님
      <v-btn target="_blank" text @click="logout">로그아웃</v-btn>
    </div>
    <div v-if="!isLogin">
      <v-btn target="_blank" text>
        <a href="/oauth2/authorization/google" class="mr-4">Google로 로그인</a>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <!-- <v-btn @click="login"> 테스트 </v-btn> -->
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  components: {},

  created() {
    this.$store.dispatch("QUERY_GET_USER");
  },
  computed: {
    getUser() {
      return this.$store.getters.GET_USER;
    },
    getUserName() {
      return this.$store.getters.GET_USER_NAME;
    },
    isLogin() {
      return this.$store.getters.GET_IS_LOGIN;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("QUERY_TEST_USER");
    },
    logout() {
      this.$store.dispatch("QUERY_LOGOUT");
    },
  },
};
</script>
