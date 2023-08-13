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
</template>

<script setup lang="ts">

import {Question} from "@/models/Question";
import {computed, ref} from "vue";

const props = defineProps<{
  question: Question;
  onNextQuestion: Function;
}>()

const selectedWord = ref(null);

const words = computed(() => {
  return props.question.t.replace(/[^a-zA-Z\s]/g, '')
    .split(' ')
    .filter((word) => word)
});

const selectWord = (word) => {
  console.log(word)
  selectedWord.value = word;
};

const submitAnswer = () => {
  console.log(selectedWord.value)
  console.log(props.question.a)
  if (selectedWord.value == props.question.a) {
    console.log('correct')
  } else {
    console.log('incorrect')
  }
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
