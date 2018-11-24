import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './types.js'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    // state,
    // mutations,
    // actions,
    modules: {
        common,
        user
    }
})
