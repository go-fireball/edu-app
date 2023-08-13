<template>
  <v-card>
    <v-tabs
      v-model="tab"
    >
      <v-tab value="one">1st</v-tab>
      <v-tab value="two">2nd</v-tab>
      <v-tab value="three">3rd</v-tab>
      <v-tab value="fourth">4th</v-tab>
      <v-tab value="fifth">5th</v-tab>
      <v-tab value="sixth">6th</v-tab>
      <v-tab value="seventh">7th</v-tab>
      <v-tab value="eighth">8th</v-tab>
      <v-tab value="ninth">9th</v-tab>
      <v-tab value="tenth">10th</v-tab>
      <v-tab value="eleventh">11th</v-tab>
      <v-tab value="twelfth">12th</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <!-- TODO: Fetch the Data from API and Populate the links -->
          <router-link to="/quiz/synonyms/1/1">Quiz 1</router-link>
          <br/>
          <router-link to="/quiz/synonyms/1/2">Quiz 2</router-link>
          <br/>
        </v-window-item>

        <v-window-item value="two">
          <!-- TODO: Fetch the Data from API and Populate the links -->
          <router-link to="/quiz/synonyms/2/1">Quiz 1</router-link>
          <br/>
          <router-link to="/quiz/synonyms/2/2">Quiz 2</router-link>
          <br/>
        </v-window-item>

        <v-window-item value="three">
          <!-- TODO: Fetch the Data from API and Populate the links -->
          <router-link to="/quiz/synonyms/3/1">Quiz 1</router-link>
          <br/>
          <router-link to="/quiz/synonyms/3/2">Quiz 2</router-link>
          <br/>
        </v-window-item>

        <v-window-item value="fourth">
          <!-- TODO: Fetch the Data from API and Populate the links -->
          <router-link to="/quiz/synonyms/4/1">Quiz 1</router-link>
          <br/>
          <router-link to="/quiz/synonyms/4/2">Quiz 2</router-link>
          <br/>
        </v-window-item>

        <v-window-item value="fifth">

          <br/><h1>Vocabulary Skills</h1>
          <br/><h2>Synonyms & Antonyms</h2>
          <br/><br/><router-link to="/quiz/synonyms/5/exploring-synonyms-antonyms">Exploring Synonyms & Antonyms</router-link>
          <br/><b>Antonyms Adventure</b>
          <br/><b>Synonyms and Antonyms in Context</b>
          <br/><b>Creative Synonym Pairing</b>
          <br/><b>Antonym Challenge</b>
          <br/>

          <br/><h2>Prefixes</h2>
          <br/><b>Understanding Common Prefixes prefixes such as "un-", "re-", "pre-", and "mis-".</b>
          <br/><b>Applying Prefixes to Create New Words</b>
          <br/><b>Prefix Pairing with Root Words</b>
          <br/><b>Analyzing Prefix Usage in Context:</b>
          <br/><b>Prefix Families: Sorting by Meaning</b>
          <br/>

          <br/><h2>Suffixes</h2>
          <br/><b>Understanding Common Suffixes such as "-ing," "-ed," "-ly," and "-ful."</b>
          <br/><b>Applying Suffixes to Root Words:</b>
          <br/><b>Identifying Parts of Speech Through Suffixes identifying "-ous" or "-ment."</b>
          <br/><b>Analyzing Suffix Usage in Context</b>
          <br/><b>Complex Suffix Challenges: Word Transformation</b>
          <br/>

          <br/><h2>Homophones</h2>
          <br/><b>Understanding Common Suffixes such as "-ing," "-ed," "-ly," and "-ful."</b>
          <br/><b>Applying Suffixes to Root Words:</b>
          <br/><b>Identifying Parts of Speech Through Suffixes "-ous" and "-ment." </b>
          <br/><b>Analyzing Suffix Usage in Context</b>
          <br/><b>Complex Suffix Challenges: Word Transformation:</b>
          <br/><b>Homophones in Context: Story Completion:</b>
          <br/>

          <br/><h2>Idioms</h2>
          <br/><b>Idiom Definition Match-Up</b>
          <br/><b>Complete the Idiom</b>
          <br/><b>Identify the Idiom from Context</b>
          <br/><b>Idioms in Action: Story Completion</b>
          <br/>

          <br/><h2>Latin and Greek Roots:</h2>
          <br/><b>Root Identification</b>
          <br/><b>Using Roots to Determine Meaning</b>
          <br/><b>Root-based Word Analysis</b>
          <br/><b>Interactive Story: Contextual Roots Application</b>
          <br/>
          <br/>

          <br/><h1>Comprehension: Literature</h1>

          <br/><h2>Making Inferences and Drawing Conclusions</h2>
          <br/><b>Inferencing Character Emotions</b>
          <br/><b>Understanding Implied Themes</b>
          <br/><b>Drawing Conclusions from Plot Elements</b>
          <br/><b>Inferences from Literary Devices</b>
          <br/><b>Concluding Author's Purpose</b>
          <br/>

          <br/><h2>Main Idea and Theme(Fictional)</h2>
          <br/><b>Identifying the Main Idea of a Passage</b>
          <br/><b>Recognizing Supporting Details Related to the Main Idea</b>
          <br/><b>Distinguishing between Main Idea and Theme</b>
          <br/><b>Exploring Themes across Different Genres</b>
          <br/><b>How Characters Contribute to Theme</b>
          <br/>

          <br/><h2>Main Idea and Theme(Nonfiction)</h2>
          <br/><b>Identifying the Main Idea of a Nonfiction Passage</b>
          <br/><b>Supporting Details in a Nonfiction Text</b>
          <br/><b>Main Ideas and Details </b>
          <br/><b> Structure of a Nonfiction Text and How It Conveys the Main Idea</b>
          <br/>

        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
