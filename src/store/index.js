import Vue from 'vue'
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import example from './modules/example/index'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:state,
    getters:getters,
    actions:actions,
    mutations:mutations,
    modules:{
        example
    }
})