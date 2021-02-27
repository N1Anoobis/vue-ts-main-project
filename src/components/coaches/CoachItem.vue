<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <BaseBadge
        v-for="area in areas"
        :key="area.id"
        :type="area"
        :title="area"
        >{{ area }}</BaseBadge
      >
    </div>
    <div class="actions">
      <BaseButton link mode="outline" :to="coachContactLink"
        >Contact</BaseButton
      >
      <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CoachItem extends Vue {
  @Prop() id?: string;
  @Prop() firstName?: string;
  @Prop() lastName?: string;
  @Prop() rate?: number;
  @Prop() areas?: string;

  get fullName() {
    return this.firstName + "" + this.lastName;
  }

  get coachContactLink() {
    return this.$route.path + "/" + this.id + "/contact";
  }

  get coachDetailsLink() {
    return this.$route.path + "/" + this.id;
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
