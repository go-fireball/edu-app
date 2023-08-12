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
            <router-link to="/quiz/synonyms/1/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/synonyms/1/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="two">
            <!-- TODO: Fetch the Data from API and Populate the links -->
            <router-link to="/quiz/synonyms/2/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/synonyms/2/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="three">
            <!-- TODO: Fetch the Data from API and Populate the links -->
            <router-link to="/quiz/synonyms/3/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/synonyms/3/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="fourth">
            <!-- TODO: Fetch the Data from API and Populate the links -->
            <router-link to="/quiz/synonyms/4/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/synonyms/4/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="fifth">

            <h1>Vocabulary Skills</h1>
            <br/>
            <h2>Synonyms & Antonyms</h2>
            <br/>
            <b>Exploring Synonyms:</b> Participants identify words with the same meaning as given words. This can include matching exercises and multiple-choice questions.

            <br/><b>Antonyms Adventure:</b> A quiz focused on identifying words that mean the opposite of the given words. Engaging formats like word searches or fill-in-the-blanks could be used.

            <br/><b>Synonyms and Antonyms in Context:</b> Participants choose the correct synonym or antonym for a word within a sentence, helping to demonstrate understanding in a real-world context.

            <br/><b>Creative Synonym Pairing:</b> This quiz could involve matching pairs of synonyms using pictures and words or creating sentences using a given pair of synonyms.

            <br/><b>Antonym Challenge:</b> A quiz where participants are given a word and must identify or write as many antonyms as possible within a specific time frame.
            <br/>
            <br/><h2>Prefixes</h2>

            <br/><b>Understanding Common Prefixes:</b> A quiz that focuses on identifying the meanings of commonly used prefixes such as "un-", "re-", "pre-", and "mis-".

            <br/><b>Applying Prefixes to Create New Words:</b> This quiz could challenge students to use given prefixes to form new words, demonstrating their understanding of how prefixes change word meanings.

            <br/><b>Prefix Pairing with Root Words:</b> A quiz that requires students to match specific prefixes with appropriate root words to create meaningful terms.

            <br/><b>Analyzing Prefix Usage in Context:</b> Quizzing students on identifying and understanding the use of prefixes within given sentences or paragraphs to see how prefixes can change the context or tone of a statement.

            <br/><b>Prefix Families: Sorting by Meaning:</b> This quiz could involve grouping words based on shared prefixes, showcasing students' grasp of how a prefix can create a family of words with related meanings.
            <br/>
            <br/><h2>Suffixes</h2>
            <br/><b>Understanding Common Suffixes:</b> A quiz that focuses on recognizing and understanding the meanings of common suffixes such as "-ing," "-ed," "-ly," and "-ful."

            <br/><b>Applying Suffixes to Root Words:</b> Students are quizzed on their ability to attach the correct suffix to given root words, form new words, and demonstrate comprehension of how suffixes alter word meanings.

            <br/><b>Identifying Parts of Speech Through Suffixes:</b> This quiz could challenge students to categorize words based on their suffixes, such as identifying adjectives that end with "-ous" or nouns that end with "-ment."

            <br/><b>Analyzing Suffix Usage in Context:</b> A quiz that requires students to read sentences or paragraphs and identify or analyze the usage of words with specific suffixes, emphasizing how suffixes contribute to the meaning of a text.

            <br/><b>Complex Suffix Challenges: Word Transformation:</b> An advanced quiz that uses suffixes to transform words from one part of speech to another, such as changing a verb to a noun by adding the appropriate suffix.
            <br/>
            <br/><h2>Homophones</h2>
            <br/><b>Understanding Common Suffixes:</b> A quiz that focuses on recognizing and understanding the meanings of common suffixes such as "-ing," "-ed," "-ly," and "-ful."

            <br/><b>Applying Suffixes to Root Words:</b> Students are quizzed on their ability to attach the correct suffix to given root words, form new words, and demonstrate comprehension of how suffixes alter word meanings.

            <br/><b>Identifying Parts of Speech Through Suffixes:</b> This quiz could challenge students to categorize words based on their suffixes, such as identifying adjectives that end with "-ous" or nouns that end with "-ment."

            <br/><b>Analyzing Suffix Usage in Context:</b> A quiz that requires students to read sentences or paragraphs and identify or analyze the usage of words with specific suffixes, emphasizing how suffixes contribute to the meaning of a text.

            <br/><b>Complex Suffix Challenges: Word Transformation:</b> An advanced quiz that uses suffixes to transform words from one part of speech to another, such as changing a verb to a noun by adding the appropriate suffix.

            <br/><b>Homophones in Context: Story Completion:</b> A short story or paragraph with missing words, where students must fill in the blanks with the correct homophones. This can create a more engaging context to apply knowledge of homophones. For example: "The (deer/dear) was spotted near the (knight/night)'s castle."
            <br/>
            <br/><h2>Idioms</h2>
            <br/><b>Idiom Definition Match-Up:</b> A quiz that lists several idioms and their definitions, with students required to match them correctly. For example: Match the idiom "barking up the wrong tree" with its definition.

            <br/><b>Complete the Idiom Fill-in-the-Blank:</b> A fill-in-the-blank quiz where students are provided with a part of an idiom and must complete it. For example: "Don't cry over spilled _______." (Answer: milk)

            <br/><b>Identify the Idiom from Context:</b> A quiz providing short scenarios or sentences that describe an idiom's meaning, and students must identify the idiom being described. For example, What idiom describes making a big fuss over something trivial? (Answer: "Making a mountain out of a molehill")

            <br/><b>Idioms in Action: Story Completion:</b> A short story or paragraph filled with missing idioms, where students must fill in the blanks with the correct idiomatic expressions. This adds an engaging context for the application of idioms. For example: "He's been working hard all week, so he's going to (let his hair down) this weekend."
            <br/>
            <br/><h2>Latin and Greek Roots:</h2>
            <br/><b>Root Identification: Match the Meaning: </b>In this matching quiz, students are given a list of words and a separate list of Greek or Latin roots. They are required to match the word to its corresponding root. For example: Match the word "telepathy" with the root "tele-" meaning "distant."

            <br/><b>Fill-in-the-Blank: Using Roots to Determine Meaning:</b> Students are given sentences with blanks and a specified Greek or Latin root. They must fill in the blank with a word that contains the given root. For example: "The 'micro-' root means small; therefore, a 'micro_____' is something used to see tiny things." (Answer: microscope)

            <br/><b>Multiple Choice: Root-based Word Analysis:</b> A multiple-choice quiz where students are provided with a word containing a Greek or Latin root and must choose the correct meaning from several options. For example: What does the word "aquatic" mean, based on the Latin root "aqua" meaning water? a) Airy b) Water-related c) Mountainous (Answer: b)

            <br/><b>Interactive Story: Contextual Roots Application:</b> This can be a more interactive quiz where students read a short story filled with words that contain Greek and Latin roots. They must identify the roots and their meanings in the story's context. For example: "The 'astronaut' was fascinated by stars." Students identify "astro-" as the root related to stars.

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
