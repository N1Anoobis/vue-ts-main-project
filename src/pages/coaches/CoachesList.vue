<template>
  <div>
    <section><CoachFilter @change-filter="setFilters"></CoachFilter></section>
    <section>
      <BaseCard>
        <div class="controls">
          <BaseButton mode="outline">Refresh</BaseButton>
          <BaseButton v-if="!isCoach" link to="/register">Register</BaseButton>
        </div>
        <ul v-if="hasCoaches">
          <CoachItem
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></CoachItem>
        </ul>
        <h3 v-else>No coaches found.</h3>
      </BaseCard>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

@Component({
  components: {
    CoachItem,
    CoachFilter,
  },
})
export default class CoachesList extends Vue {
  activeFilters = {
    frontend: true,
    backend: true,
    career: true,
  };

  get isCoach() {
    return this.$store.getters["coaches/isCoach"];
  }

  get filteredCoaches() {
    const coaches = this.$store.getters["coaches/coaches"];
    return coaches.filter((coach: any) => {
      if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
        return true;
      }
      if (this.activeFilters.backend && coach.areas.includes("backend")) {
        return true;
      }
      if (this.activeFilters.career && coach.areas.includes("career")) {
        return true;
      }
      return false;
    });
  }

  get hasCoaches() {
    return this.$store.getters["coaches/hasCoaches"];
  }

  setFilters(updatedFilters: any) {
    this.activeFilters = updatedFilters;
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
