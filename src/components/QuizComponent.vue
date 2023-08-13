<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="10">
        <div v-if="props.quiz.type === 'word-select-quiz'">
          <word-select-question-component
            :question="props.quiz.questions[currentQuestionIndex]"
            :on-next-question="nextQuestion"
          ></word-select-question-component>
        </div>
        <div v-else>
          <question-component
            :question="props.quiz.questions[currentQuestionIndex]"
            :on-next-question="nextQuestion"
          ></question-component>
        </div>
      </v-col>
      <v-col cols="12" sm="2">
        <questions-answered :questions-answered="currentQuestionIndex" :totalNumberOfQuestions="props.quiz.questions.length"></questions-answered>
        <br/>
        <TimeTracker></TimeTracker>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {ref, watchEffect} from "vue";
import QuestionComponent from "@/components/QuestionComponent.vue";
import WordSelectQuestionComponent from "@/components/WordSelectQuestionComponent.vue";
import QuestionsAnswered from "@/components/QuestionsAnswered.vue";
import TimeTracker from "@/components/TimeTrackerComponent.vue";
import {useRouter} from "vue-router";
import {Quiz} from "@/models/Quiz";
import {Question} from "@/models/Question";

const props = defineProps<{
  quiz: Quiz;
}>();

const currentQuestionIndex = ref<number>(0);
const router = useRouter();

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

watchEffect(() => {
  props.quiz.questions.forEach((question: Question) => {
    if(props.quiz.type != null && props.quiz.type === 'regular-quiz'){
      question.choices = shuffleArray(question.choices);
    }

  });
});

const nextQuestion = () => {
  if (currentQuestionIndex.value < props.quiz.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    router.back();
  }
};

</script>
