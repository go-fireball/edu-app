<template>
  <v-card>
    <v-card-title class="wrap-text">{{ question.q }}</v-card-title>
    <v-card-text>

      <v-item-group mandatory v-model="selectedAnswer">
        <v-container>
          <v-row>
            <v-col
              v-for="(choice, cIndex) in question.choices"
              :key="cIndex"
              cols="12"
              md="4"
            >
              <v-item v-slot="{ isSelected, toggle }" :value="cIndex">
                <v-card
                  :color="isSelected ? 'primary' : ''"
                  class="d-flex align-center"
                  dark
                  height="50"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      class="flex-grow-1 text-left"
                    >
                      &nbsp;&nbsp;&nbsp;{{ choice.t }}
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

      <v-btn color="primary" @click="submitAnswer">Submit</v-btn>
    </v-card-text>
  </v-card>

  <v-dialog v-model="showDialog" max-width="300px">
    <v-card>
      <v-card-text> {{ message }}</v-card-text>
    </v-card>
  </v-dialog>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Question} from "@/models/Question";
import {correctAnswerMessage, getRandomAppreciation} from "@/correctAnswerMessage";

const props = defineProps<{
  question: Question;
  onNextQuestion: Function;
}>();

const selectedAnswer = ref<number>(-1);
const showDialog = ref(false);

const message = ref<string>('');


const getCorrectAnswer = (): { t: string, correct: boolean } | undefined => {
  return props.question.choices.find(answer => answer.correct);
};


const submitAnswer = () => {
  const cIndex = selectedAnswer.value;
  const choice = props.question.choices[cIndex];
  const correctAnswerObj = getCorrectAnswer();
  const correctAnswer = correctAnswerObj ? correctAnswerObj.t : 'Not found'; // Handle the possibility of correctAnswerObj being undefined

  if (choice && choice.correct) {
    showDialog.value = true;
    message.value = getRandomAppreciation();
  } else if (choice && !choice.correct) {
    showDialog.value = true;
    message.value = `Correct answer is ${correctAnswer}`
  }
  setTimeout(() => {
    selectedAnswer.value = -1;
    showDialog.value = false;
    props.onNextQuestion();
  }, 2000); // Delay before moving to next question
};
</script>


<style scoped>

.wrap-text {
  word-wrap: break-word;
  white-space: normal; /* To override any predefined white-space property */
}

</style>
