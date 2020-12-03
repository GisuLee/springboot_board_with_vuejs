import { updatePostsList, readPostByPostId } from "../api/post_api";
// state
const state = {
  post: {
    title: "제목",
    content: "빈 내용",
    author: "작성자",
    modifiedDate: "일자",
  },

  postList: [],
};

// getters
const getters = {
  getPost(state) {
    return state.post;
  },

  GET_POST_LIST(state) {
    return state.postList;
  },
};

// mutations
const mutations = {
  setPost(state, post) {
    state.post = post;
  },

  SET_POST_LIST(state, postList) {
    state.postList = postList;
  },
};

// actions
const actions = {
  QUERY_READ_POST({ state, commit }, { post }) {
    commit("setPost", post);
  },
  QUERY_READ_POST2({ state, commit }, postId) {
    post = readPostByPostId(postId);
    commit("setPost", post);
  },

  async QUERY_POST_LIST(context) {
    try {
      const response = await updatePostsList();
      context.commit("SET_POST_LIST", response.data);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      console.log('End');
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
