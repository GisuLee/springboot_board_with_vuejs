import { updatePostsList, readPostByPostId, writePost } from "../api/post_api";
import router from "../router";

// state
const state = {
  post: {
    title: "제목",
    content: "빈 내용",
    author: "작성자",
    modifiedDate: "일자",
    writer: {
      id: "1",
      name: "이기수",
      picture: "picture",
      role: "USER",
    },
  },

  postList: [],
};

// getters
const getters = {
  GET_POST_DETAIL(state) {
    return state.post;
  },

  GET_POST_LIST(state) {
    return state.postList;
  },
};

// mutations
const mutations = {
  SET_POST_LIST(state, postList) {
    state.postList = postList;
  },

  SET_POST_DETAIL(state, post) {
    state.post = post;
  },
};

// actions
const actions = {
  async QUERY_POST_DETAIL(context, id) {
    try {
      const response = await readPostByPostId(id);
      context.commit("SET_POST_DETAIL", response.data);
      console.log(response.data);

      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  },

  async QUERY_POST_LIST(context) {
    try {
      const response = await updatePostsList();
      context.commit("SET_POST_LIST", response.data);
      console.log(response.data);

      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  },

  async QUERY_WRITE_POST(context, requestPostSaveDto) {
    try {
      const response = await writePost(requestPostSaveDto);
      context.commit("SET_POST", response.data);
      console.log(response);
      if (requestPostSaveDto.onSuccessed != null) {
        requestPostSaveDto.onSuccessed();
      }

      if (
        requestPostSaveDto.redirectUrl != null &&
        requestPostSaveDto.redirectUrl != ""
      ) {
        router.push(requestPostSaveDto.redirectUrl);
      }

      return response.data;
    } catch (e) {
      return Promise.reject(e);
    } finally {
    }
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
