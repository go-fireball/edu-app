<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3>{{ question.q }}</h3>
        <br/>
        <div>

          <span
            v-for="(word, index) in words"
            :key="index"
            class="word"
            @click="selectWord(word)"
            :class="{ selected: word === selectedWord }"
          >{{ word }}&nbsp; </span>
        </div>
        <br/>
        <v-btn color="primary" @click="submitAnswer">Submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="showDialog" max-width="300px">
    <v-card>
      <v-card-text> {{ message }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">

import {Question} from "@/models/Question";
import {computed, ref} from "vue";
import {getRandomAppreciation} from "@/correctAnswerMessage";

const props = defineProps<{
  question: Question;
  onNextQuestion: Function;
}>()

const selectedWord = ref<string>('');
const showDialog = ref(false);
const message = ref<string>('');

const words = computed(() => {
  return props.question.t.replace(/[^a-zA-Z\s]/g, '')
    .split(' ')
    .filter((word) => word)
});

const selectWord = (word: string) => {
  console.log(word)
  selectedWord.value = word;
};

const submitAnswer = () => {
  if (selectedWord.value == props.question.a) {
    showDialog.value = true;
    message.value = getRandomAppreciation();
  } else {
    showDialog.value = true;
    message.value = `Correct answer is ${props.question.a}`
  }
  setTimeout(() => {
    selectedWord.value = '';
    showDialog.value = false;
    props.onNextQuestion();
  }, 2000); // Delay before moving to next question
};

</script>

<style scoped>
.word {
  cursor: pointer;
  border-bottom: 1px dashed;
}

.selected {
  background-color: yellow;
}
</style>
