<template>
  <v-row>
    <v-col cols="12"><b>{{props.comprehension.title}}</b></v-col></v-row>
  <v-row>
    <v-col cols="6">
      <passage-component :passage-text=props.comprehension.passage></passage-component>
    </v-col>
    <v-col cols="6">
      <question-component
        :question="props.comprehension.questions[currentQuestionIndex]"
        :on-next-question="nextQuestion"
      ></question-component>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import PassageComponent from '@/components/PassageComponent.vue';
import QuestionComponent from "@/components/QuestionComponent.vue";
import {Comprehension} from "@/models/Comprehension";
import {ref} from "vue";

import {useRouter} from "vue-router";
const currentQuestionIndex = ref<number>(0);

const props = defineProps<{
  comprehension: Comprehension;
}>();
const router = useRouter();

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.comprehension.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    router.back();
  }
};

</script>
