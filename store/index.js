export const state = () => ({
    windowWidth: 0
})

export const getters = {
    getWindowWidth(state) {
        return state.windowWidth;
    }
}
  
export const mutations = {
    SET_WINDOW_SIZE_CHANGED (state, width) {
        state.windowWidth = width;
    }
}

export const actions = {
    WINDOW_SIZE_CHANGED({commit}, width) {
        commit('SET_WINDOW_SIZE_CHANGED',width);
    }
}
  