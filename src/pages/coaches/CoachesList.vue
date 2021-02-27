<template>
  <div>
    <section>filter</section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register</router-link>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          {{ coach.firstName }}
        </li>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CoachesList extends Vue {
  get filteredCoaches() {
    return this.$store.getters["coaches/coaches"];
  }

  get hasCoaches() {
    return this.$store.getters["coaches/hasCoaches"];
  }
}
</script>
