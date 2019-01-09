import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
  /**
   * @desc 导入需要的store
   * @author wtniu
   */
import menuStore from './menu_store'
import companyName from './company_name'
import Work from './modules/work'
import Economy from './modules/economy'
import Company from './modules/company'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    historyLength: 0
  },
  getters: {
    dataSplit: state => {
      return state.todos.filter(todo => todo.done)
    },
    dformat: function(num) { //数字分组
      var num = (num || 0).toString(),
        result = '';
      while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
      }
      if (num) {
        result = num + result;
      }
      return result;
    },
  },
  mutations: { //变异
    // updateHistoryLength(state) {
    //   state.historyLength++
    // }
  },
  actions: {
    updateHistoryLength({
      commit
    }) {
      commit('updateHistoryLength')
    },
  },
  modules: {
    menuStore,
    companyName,
    Work,
    Economy,
    Company, //企业
    // API
  }
})
