<template>
  <v-card>
    <v-card-subtitle>Answered</v-card-subtitle>
    <v-card-text>{{ questionsAnswered }} out of {{totalNumberOfQuestions}}</v-card-text>
  </v-card>

</template>

<script setup lang="ts">
const props = defineProps<{
  questionsAnswered: number;
  totalNumberOfQuestions: number;
}>()
</script>
