<template>
  <div>
    <section>
      <BaseCard>
        <h2>Register as a coach now</h2>
        <CoachForm></CoachForm>
      </BaseCard>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoachForm from "../../components/coaches/CoachForm.vue";

@Component({
  components: {
    CoachForm,
  },
})
export default class CoachesRegestration extends Vue {}
</script>

<style scoped></style>
