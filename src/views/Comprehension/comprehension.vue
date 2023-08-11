<template>
  <v-container>
    <ComprehensionComponent v-if="state.comprehension" :comprehension="state.comprehension"/>
  </v-container>
</template>


<script setup lang="ts">
import {onMounted, reactive} from 'vue';
import ComprehensionComponent from '@/components/ComprehensionComponent.vue';
import axios from "axios";
import {useRoute} from "vue-router";
import {Comprehension} from "@/models/Comprehension";
import {setMetaTags} from "@/useMetaTags";

const state = reactive({comprehension: null as Comprehension | null})
const route = useRoute();

onMounted(async () => {
  const context = route.params.context;
  const grade = route.params.grade;
  const id = route.params.id;
  const response = await axios.get(`/data/comprehension/${grade}/${id}.json`); //
  state.comprehension = response.data;
  setMetaTags(`${context} quiz for grade ${grade}`, `${id}`, '')
})

</script>
