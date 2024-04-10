<template>
  <div id="">
    <v-col>
      <v-btn rounded color="grey" dark @click="addtotask">Add To Task</v-btn>
    </v-col>
    <v-container></v-container>
    <v-card></v-card>
    <v-container>
      <div class="scrolldata">
        <VueDjSetting @ViewuserProfile="userprofiletask" />
      </div>
    </v-container>
  </div>
</template>

<script>
import VueDjSetting from "./VueDjSetting.vue";

import moment from "moment";

export default {
  components: {
    VueDjSetting,
  },

  data() {
    return {
      addtaskshow: false,

      rows: [
        {
          id: 1,
          internalId: "#1",
          name: "First",
        },
        {
          id: 2,
          internalId: "#2",
          name: "Second",
        },
        {
          id: 3,
          internalId: "#3",
          name: "Third",
        },
        {
          id: 4,
          internalId: "#4",
          name: "Four",
        },
        {
          id: 5,
          internalId: "#5",
          name: "Five",
        },

        {
          id: 6,
          internalId: "#6",
          name: "six",
        },
        {
          id: 7,
          internalId: "#6",
          name: "seven",
        },
        {
          id: 8,
          internalId: "#6",
          name: "eight",
        },
        {
          id: 9,
          internalId: "#6",
          name: "nine",
        },
        {
          id: 10,
          internalId: "#6",
          name: "ten",
        },
        {
          id: 11,
          internalId: "#6",
          name: "eleven",
        },
        {
          id: 12,
          internalId: "#6",
          name: "twele",
        },
      ],
    };
  },
  methods: {
    userprofiletask(value) {
      // this.showTaskDetails = !this.showTaskDetails
      this.$emit("ViewUserprofiledata", value);
    },
    addtotask() {
      this.addtaskshow = !this.addtaskshow;
      console.log("Halo call this funct");
      this.$emit("AddtoTask", this.addtaskshow);
    },
  },
};
</script>
<style type="text/css">
.gantchartstyle {
  width: 100%;
}
</style>
