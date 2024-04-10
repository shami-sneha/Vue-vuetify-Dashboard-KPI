<template>
  <v-app>
    <v-navigation-drawer class="siderbarleft">
      <v-list>
        <v-list-item>
          <router-link to="/" class="iconstyl"
            ><v-icon>mdi-home</v-icon></router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="about" class="iconstyl"
            ><v-icon>mdi-calendar</v-icon></router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="page2" class="iconstyl"
            ><v-icon>mdi-signal</v-icon></router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="calender" class="iconstyl"
            ><v-icon>mdi-signal</v-icon></router-link
          >
          <!-- <router-link  to="Calender" class="iconstyl"><v-icon >mdi-calendar</v-icon></router-link> -->
        </v-list-item>
        <v-list-item>
          <v-icon>mdi-account</v-icon>
        </v-list-item>
      </v-list>

      <v-list class="iciontopstyl">
        <v-list-item>
          <v-icon
            :prepend-icon="
              theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'
            "
            @click="toggleTheme"
            >mdi-weather-night</v-icon
          >
        </v-list-item>
        <v-list-item>
          <router-link to="setting" class="iconstyl"
            ><v-icon>mdi-cog-outline</v-icon></router-link
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const userTheme = ref("light-theme");

const setTheme = (theme) => {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-theme");
  if (activeTheme === "light-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};
const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark-theme";
  } else {
    return "light-theme";
  }
};

onMounted(() => {
  const currentTheme = localStorage.getItem("user-theme");
  if (currentTheme !== null) {
    setTheme(currentTheme);
  } else {
    const initUserTheme = getMediaPreference();
    setTheme(initUserTheme);
  }
});
</script>

<style>
.siderbarleft {
  width: 88px !important;
  background-color: #00be83 !important;
  color: white;
  position: fixed !important;
  text-align: center;
  top: 70px !important;
}
.iconstyl {
  color: white;
  text-decoration: none !important;
}
.iconstyl:hover {
  color: white;
}
.v-application__wrap {
  min-height: 100% !important;
}
</style>
