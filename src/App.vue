<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "./components/layout/TheHeader.vue";

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
