import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingLists: []
  },
  mutations: {
    addShoppingList(state, shoppingList){
      state.shoppingLists.push(shoppingList)
    },
    removeShoppingList(state, shoppingList){
      const index = state.shoppingLists.indexOf(shoppingList)
      if(index > -1){
        state.shoppingLists.splice(index, 1)
      }
    }
  },
  actions: {
    addShoppingList(context, shoppingList){
      context.commit('addShoppingList', shoppingList)
    },
    removeShoppingList(context, shoppingList){
      context.commit('removeShoppingList', shoppingList)
    }
  },
  modules: {}
});
