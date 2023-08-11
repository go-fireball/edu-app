<template>
  <v-container>
    <QuizComponent v-if="state.quiz" :quiz="state.quiz" />
  </v-container>
</template>


<script setup lang="ts">
import {onMounted, reactive} from 'vue';
import QuizComponent from '@/components/QuizComponent.vue';
import axios from "axios";
import {useRoute} from "vue-router";
import {Quiz} from "@/models/Quiz";
import { setMetaTags } from  '@/useMetaTags'

const state = reactive({ quiz :  null as Quiz | null})
const route = useRoute();

onMounted(async () => {
  const context = route.params.context;
  const grade = route.params.grade;
  const id = route.params.id;
  const response = await axios.get(`/data/quiz/${context}/${grade}/${id}.json`); //
  state.quiz = response.data;
  setMetaTags(`${context} quiz for grade ${grade}`, `${id}`, '')

})

</script>
