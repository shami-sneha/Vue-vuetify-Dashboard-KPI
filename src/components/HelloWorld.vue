<template>
    <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>
      
      <v-btn
        :prepend-icon="theme === 'light' ?  'mdi-weather-night' : 'mdi-weather-sunny'"
        @click="toggleTheme"
      >Toggle Theme</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
<!--         <PageContent/>
        <router-view/> -->
      </v-container>
    </v-main>
  </v-app>
  
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import PageContent from "./PageContent.vue"
  
export default {
  setup() {
    const store = useStore()
    const theme = computed(() => store.state.theme)
    
    const toggleTheme = () => {
      store.commit('toggleTheme')
      console.log(theme.value)
    }
    
    return{theme, toggleTheme}
  },

  components: {
    PageContent
  }
}

</script>



<style>

</style>