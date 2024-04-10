<template>
  <v-app>
    <v-container fluid>
      <v-col cols="12" sm="8" class="pagecontent">
        <Menusetting />
      </v-col>
      <spacer></spacer>

      <br />
      <br />

      <div class="row">
        <div :class="ViewuserDetails || SettingEditTask ? 'col-8' : 'col-12'">
          <Setting @ViewDetailsdata="Viewuserdetail" />
        </div>

        <v-col cols="4" sm="4" class="pt-0" v-if="ViewuserDetails">
          <SettingEditTask />
        </v-col>
      </div>

      <!-- </v-row> -->
    </v-container>
    <v-col>
      <v-card width=" 150" class="pa-1" outlined tile color="#00be83">
        + Add Abteilung
      </v-card>
    </v-col>
    <v-container>
      <v-card width="500" height="40" color="#00be83">
        <div>
          <div>
            <h4>Abteilung</h4>
          </div>
          <v-spacer></v-spacer>
        </div>
      </v-card>
      <v-card width="500px">
        <v-table width="200px">
          <thead>
            <tr>
              <th class="text-left">
                <h5>Name</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>

              <v-btn size="small">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn size="small">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
    <v-container>
      <!-- <v-card width="500">
                <v-text-field label="Label"></v-text-field>
            </v-card> -->
      <v-card max-width="500">
        <v-responsive class="mx-auto">
          <v-text-field label="" hide-details="auto"></v-text-field>
        </v-responsive>
      </v-card>
    </v-container>
    <v-container></v-container>

    <v-container>
      <v-card max-width="200">
        <v-select
          label="Satandard Abteilung"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
        ></v-select>
      </v-card>
      <v-card max-width="200">
        <v-text-field
          v-model="lastName"
          label="Endlog"
          :rules="lastNameRules"
        ></v-text-field>
      </v-card>
      <v-container>
        <v-col>
          <v-card width=" 100" class="pa-1" outlined tile color="#00be83">
            Speichern
          </v-card>
        </v-col>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Menusetting from "../Setting/MenuSetting.vue";

export default {
  name: "Abteilung",
  components: {
    Menusetting,
  },
  data() {
    return {
      desserts: [
        {
          name: "deena",
          date: "12.03.2023",
        },
        {
          name: "Iceedve",
          date: "12.03.2023",
        },
        {
          name: "Ecdfeaac",
          date: "12.03.2023",
        },
        {
          name: "Cseena",
          date: "12.03.2023",
        },
        {
          name: "Gidesss",
          date: "12.03.2023",
        },
        {
          name: "Jellsde",
          date: "12.03.2023",
        },
        {
          name: "ribbenh",
          date: "12.03.2023",
        },
      ],
    };
  },
};
</script>
