<!-- TimeTracker.vue -->
<template>
  <v-card> <!-- Fixed typo v-vard to v-card -->
    <v-card-subtitle>Time Elapsed</v-card-subtitle>
    <v-card-text>{{ formattedTime }}</v-card-text>
  </v-card>

</template>

<script lang="ts">
import { ref, computed } from "vue";

export default {
  setup() {
    const seconds = ref(0);
    const minutes = ref(0);

    setInterval(() => {
      seconds.value++;
      if (seconds.value >= 60) {
        minutes.value++;
        seconds.value = 0;
      }
    }, 1000);

    const formattedTime = computed(() => {
      const paddedMinutes = String(minutes.value).padStart(2, '0');
      const paddedSeconds = String(seconds.value).padStart(2, '0');
      return `${paddedMinutes}:${paddedSeconds}`;
    });

    return { formattedTime };
  },
};
</script>

<style scoped>
/* You can add any specific styling for the time tracker here */
</style>
