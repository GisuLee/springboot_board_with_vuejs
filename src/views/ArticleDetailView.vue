<template>
  <div>
    <h1 class="d-flex justify-center mt-3">{{ getPost.title }}</h1>
    <p class="d-flex justify-center grey--text text--lighten-1">
      {{ getPost.author }} / {{ getPost.modifiedDate }}
    </p>
    <v-divider />
    <div class="my-5">{{ getPost.content }}</div>
    <v-divider />

    <div class="d-flex mt-6">
      <v-spacer></v-spacer>
      <v-btn class="d-flex justify-end " @click="onChangedMsg">
        <v-icon left>
          mdi-pencil
        </v-icon>
        글 수정
      </v-btn>

      <v-btn class="d-flex justify-end">
        <v-icon left>
          mdi-delete
        </v-icon>
        삭제
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    getPost() {
      console.log(this.$store.getters.getPost);
      return this.$store.getters.getPost;
    },
  },
  methods: {
    onChangedMsg() {
		console.log('dd');
	  this.$store.dispatch("QUERY_READ_POST2",1);
	  this.$store.di
    },
  },
};
</script>
