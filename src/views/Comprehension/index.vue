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
            <router-link to="/quiz/1/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/1/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="two">
            <!-- TODO: Fetch the Data from API and Populate the links -->
            <router-link to="/quiz/2/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/2/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="three">
            <!-- TODO: Fetch the Data from API and Populate the links -->
            <router-link to="/quiz/3/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/3/2">Quiz 2</router-link> <br/>
          </v-window-item>

          <v-window-item value="fourth">
            <!-- TODO: Fetch the Data from API and Populate the links -->
            <router-link to="/quiz/4/1">Quiz 1</router-link> <br/>
            <router-link to="/quiz/4/2">Quiz 2</router-link> <br/>
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
