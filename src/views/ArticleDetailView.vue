<template>
  <div>
    <h1 class="d-flex justify-center mt-3">{{ getPostDetail.title }}</h1>
    <p class="d-flex justify-center grey--text text--lighten-1">
      {{ getPostDetail.author }} / {{ getPostDetail.modifiedDate }}
    </p>
    <v-divider />
    <div class="my-5">{{ getPostDetail.content }}</div>
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
  created(){
		this.$store.dispatch("QUERY_POST_DETAIL",this.id);
  },

  computed: {
    getPostDetail() {
      console.log(this.$store.getters.GET_POST_DETAIL);
      return this.$store.getters.GET_POST_DETAIL;
    },
  },
  methods: {
    onChangedMsg() {
		console.log('dd');
	  
    },
  },
};
</script>
