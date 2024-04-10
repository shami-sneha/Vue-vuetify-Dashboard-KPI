<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link to="/setting" class="iconstyl"
          ><v-card class="pa-1" outlined tile>Benutzer </v-card></router-link
        >
      </v-col>

      <v-col>
        <router-link to="/deinstleister" class="iconstyl"
          ><v-card class="pa-1" outlined tile>
            Serv. provider</v-card
          ></router-link
        >
      </v-col>
      <v-col>
        <router-link to="/Abteilung" class="iconstyl"
          ><v-card class="pa-1" outlined tile> Abteilung </v-card></router-link
        >
      </v-col>

      <v-col>
        <router-link to="/feiertage" class="iconstyl"
          ><v-card class="pa-1" outlined tile> Feiertage</v-card></router-link
        >
      </v-col>
      <v-col
        ><router-link to="/Filters" class="iconstyl">
          <v-card class="pa-1" outlined tile> filters </v-card></router-link
        >
      </v-col>
      <v-col
        ><router-link to="/powerBI" class="iconstyl">
          <v-card class="pa-1" outlined tile> PowerBI </v-card></router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style scoped>
.iconstyl {
  text-align: center;
}

.active {
  color: green;
}
</style>
