import Vue from 'vue'
import Vuex from 'vuex'
import drinkVendingMachine from "./drinkVendingMachine";

Vue.use(Vuex);

export default new Vuex.Store({
  ...drinkVendingMachine
})
