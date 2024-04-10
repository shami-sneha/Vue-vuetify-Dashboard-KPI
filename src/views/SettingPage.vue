<template>
  <v-app>
    <v-container fluid class="blockcolrstyl">
      <v-col cols="12" sm="8">
        <Menusetting />
      </v-col>

      <br />
      <br />

      <div class="row">
        <div :class="ViewuserDetails || AdduserDetails ? 'col-8' : 'col-12'">
          <Setting
            @ViewUserprofiledata="ViewuserProfiledetail"
            @AddtoTask="AdduserTask"
          />
        </div>
        <!-- <v-col cols="12" sm="8" >
			
			</v-col> -->
        <v-col cols="4" sm="4" class="pt-0" v-if="AdduserDetails">
          <h3>Add to Task</h3>
          <!-- <AddSettingusers /> -->
        </v-col>
        <v-col cols="4" sm="4" class="pt-0" v-if="ViewuserDetails">
          <SettingEditTask />
        </v-col>
      </div>

      <!-- </v-row> -->
    </v-container>
  </v-app>
</template>

<script type="text/javascript">
import { ref } from "vue";
// import {  DatePicker } from 'v-calendar';
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Setting from "../components/Setting/SettingChart.vue";
// import Userfile from '../components/Setting/Settinguserleftsidebar.vue';
import SettingEditTask from "../components/Setting/SettingEditTask.vue";
import Menusetting from "../components/Setting/MenuSetting.vue";

// import AddSettingusers from "../components/Setting/AddSettingusers.vue";
export default {
  name: "SettingPage",

  components: {
    Setting,
    SettingEditTask,
    Menusetting,
    // AddSettingusers
    // Datepicker,
    // EditTask,
  },
  data() {
    return {
      Userprofile: false,
      doublearrow: true,
      ViewuserDetails: "",
      AdduserDetails: "",
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      date: new Date(),
    };
  },

  methods: {
    userProflieCall(value) {
      console.log("HAloo call this view user 11111", value);
      if (value == 1) {
        this.ViewuserDetails = false;
        this.Userprofile = !this.Userprofile;
        this.doublearrow = false;
      }
      if (value == 2) {
        this.doublearrow = true;
        this.ViewuserDetails = false;
        this.Userprofile = !this.Userprofile;
      }
    },
    ViewuserProfiledetail(value) {
      this.ViewuserDetails = value;
    },
    AdduserTask(value) {
      console.log("Halo call this funct 222", value);
      this.AdduserDetails = value;
    },
  },
};
</script>

<style>
input[name="drone1"]:checked:after {
  width: 30px;
  height: 15px;
  border-block: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #ffa500;
  content: "";
  display: inline-block;
  visibility: visible;
  margin-block: 25%;
}

input[name="drone2"]:checked:after {
  width: 15px;
  height: 15px;
  border-block: 15px;
  top: -4px;
  left: -1px;
  position: relative;
  background-color: pink;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[name="drone3"]:checked:after {
  width: 15px;
  height: 15px;

  top: -4px;
  left: -1px;
  position: relative;
  background-color: green;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[name="drone4"]:checked:after {
  width: 15px;
  height: 15px;
  border-block: 15px;
  top: -4px;
  left: -1px;
  position: relative;
  background-color: red;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[name="drone5"]:checked:after {
  width: 15px;
  height: 15px;
  border-block: 15px;
  top: -4px;
  left: -1px;
  position: relative;
  background-color: red;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[name="drone6"]:checked:after {
  width: 15px;
  height: 15px;
  border-block: 15px;
  top: -4px;
  left: -1px;
  position: relative;
  background-color: red;
  content: "";
  display: inline-block;
  visibility: visible;
}

input[name="drone7"]:checked:after {
  width: 15px;
  height: 15px;
  border-block: 15px;
  top: -4px;
  left: -1px;
  position: relative;
  background-color: red;
  content: "";
  display: inline-block;
  visibility: visible;
}

.settingchart {
  width: 200px;
}
</style>
