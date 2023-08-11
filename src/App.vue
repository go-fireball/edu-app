<template>

  <v-card>

    <v-layout>
      <v-app-bar scroll-behavior="hide" color="primary">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn title="Theme" @click="toggleTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
        rail
        expand-on-hover
      >

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" :to="'/'" title="Home" value="Home"></v-list-item>
          <v-list-item prepend-icon="mdi-library" :to="'/reading'" title="Reading"
                       value="Reading"></v-list-item>
          <v-list-item prepend-icon="mdi-atom" :to="'/science'" title="Science" value="Science"></v-list-item>
          <v-list-item prepend-icon="mdi-calculator-variant-outline" :to="'/math'" title="Math"
                       value="Math"></v-list-item>

        </v-list>
      </v-navigation-drawer>
      <v-container fluid>
        <v-main>
          <router-view></router-view>
        </v-main>
        <v-footer
          class="text-center d-flex flex-column"
          color="primary" app
        >
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="text"
            ></v-btn>
          </div>



        </v-footer>
      </v-container>



    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ];

const drawer = ref<boolean>(false);
const theme = useTheme()
const route = useRoute()

watch(() => route.params, () => {
  window.scrollTo(0, 0)
})

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>
