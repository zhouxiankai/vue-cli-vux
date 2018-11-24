
const state = {
    userInfo: null || JSON.parse(window.localStorage.getItem('userInfo')),
}

const mutations = {
    setUserInfo (state, n) {
        state.userInfo = n
        window.localStorage.setItem('userInfo', JSON.stringify(n))
    },
}

export default {
    state,
    mutations
}
