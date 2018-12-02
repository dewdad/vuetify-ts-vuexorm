<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>-->
  <v-container>
    <v-toolbar app>
      <v-layout align-center justify-center row fill-height>
        <img justify-center alt="Vue logo" src="../assets/vue_logo.png" style="height:3rem"/>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-layout align-center justify-center column fill-height>
        <h3 class="headline mb-4">Please select days.</h3>
        <v-flex sm5 mb-3>
          <v-date-picker v-model="dates" multiple></v-date-picker>
        </v-flex>
        <v-btn style="width: 12rem" round color="primary" dark>next</v-btn>
      </v-layout>
    </v-content>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component
export default class Home extends Vue {
  // = this.$store.state['entities/worklog/query'](); // ['2018-09-15', '2018-09-20', '2018-09-21'];

  public get dates() {
    return this.$store.getters['entities/worklog/query']().map((i: any) => i.date);
  }

  public set dates(dates) {
    this.$store.dispatch('entities/worklog/create', {data: dates});
  }
}
</script>
