import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import WorkDay from './models/WorkDay';

Vue.use(Vuex);

// Create new instance of Database.
const database = new VuexORM.Database();

// Register Model and Module. The First argument is the Model, and
// second is the Module.
// database.register(User, users);
database.register(WorkDay);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  /* state: {

  },
  mutations: {

  },
  actions: {

  }, */
});
