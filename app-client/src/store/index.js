import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      identity: ''
    };
  },
  getters: {
    identity(state) {
      return state.identity;
    }
  },
  mutations: {
    setIdentity(state, token) {
      state.identity = token
    }
  }
});

export default store;
