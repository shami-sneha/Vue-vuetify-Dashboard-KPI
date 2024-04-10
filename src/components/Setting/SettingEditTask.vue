<template>
  <v-card class="mx-auto" width="450">
    <v-card width="500" height="50" color="#00be83">
      <h5>Add Information</h5>
    </v-card>

    <v-list>
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
        title="John Leider"
      >
        <template>
          <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-col>
      <v-row>
        <v-col cols="4">
          <v-list-subheader>Name</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field label="Amount"></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <v-col cols="4">
          <v-list-subheader>capacity</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field label="Weight"></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <v-col cols="4">
          <v-list-subheader>Role</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field label="Role"></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <v-col cols="4">
          <v-list-subheader>Abteilung</v-list-subheader>
        </v-col>

        <v-col cols="8">
          <v-text-field label=""></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-row> </v-row>
    <v-col>
      <v-row>
        <v-col cols="4">
          <v-btn rounded="pill" color="#00be83"> Add </v-btn>
        </v-col>

        <v-col cols="4">
          <v-btn rounded="pill" color="red"> delete </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-main style="height: 80px"></v-main>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.cancelstyl {
  color: #00be83;
}
</style>
