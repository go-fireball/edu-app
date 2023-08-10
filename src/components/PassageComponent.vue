<template>
  <div class="passage">
    <p v-for="(line, index) in props.passageText" :key="index">{{ line }}</p>
    <br/>
    <br/>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  passageText: string[];
}>();
</script>

<style scoped>
.passage p {
  line-height: 2; /* Adjust the value according to your preference */
}
</style>
