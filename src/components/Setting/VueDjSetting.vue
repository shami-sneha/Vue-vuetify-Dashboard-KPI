<template>
  <v-table class="dateborderstyl">
    <thead>
      <tr>
        <th class="text-left">
          <h5>Name</h5>
        </th>
        <th class="text-left">
          <h5>Capacity</h5>
        </th>
        <th class="text-left">
          <h5>Leader</h5>
        </th>
        <th class="text-left">
          <h5>Roles</h5>
        </th>
        <th class="text-left">
          <h5>Edit</h5>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>
          <v-avatar color="red">
            <span class="text-h8">CJ</span> </v-avatar
          >{{ item.name }}
        </td>

        <td>{{ item.calories }}</td>
        <td>{{ item.leader }}</td>
        <td>{{ item.roles }}</td>

        <v-btn size="small" icon color="#00be83"  @click="useraddtask">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn size="small" icon color="grey">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
       showusertask:false,

      desserts: [
        {
          name: "deena",
          calories: 159,
          leader: "jezreel",
          roles: "project",
        },
        {
          name: "Iceedve",
          calories: 237,
          leader: "sumam",
          roles: "project lead",
        },
        {
          name: "Ecdfeaac",
          calories: 262,
          leader: "machet in",
          roles: "project3443",
        },
        {
          name: "Cseena",
          calories: 305,
          leader: "faasde",
          roles: "programmer",
        },
        {
          name: "Gidesss",
          calories: 356,
          leader: "jezreel",
          roles: "Design",
        },
        {
          name: "Jellsde",
          calories: 375,
          leader: "leenas",
          roles: "Arch",
        },
        {
          name: "ribbenh",
          calories: 392,
          leader: "dooltis",
          roles: "humanR",
        },
        {
          name: "Honeysde",
          calories: 408,
          leader: "deeeras",
          roles: "designing",
        },
        {
          name: "weedsa",
          calories: 452,
          leader: "geedat",
          roles: "freela",
        },
        {
          name: "kiitx cvfs",
          calories: 518,
          leader: "shami",
          roles: "Coder1",
        },
        {
          name: "deena",
          calories: 159,
          leader: "jezreel",
          roles: "project",
        },
        {
          name: "Iceedve",
          calories: 237,
          leader: "sumam",
          roles: "project lead",
        },
        {
          name: "Ecdfeaac",
          calories: 262,
          leader: "machet in",
          roles: "project3443",
        },
        {
          name: "Cseena",
          calories: 305,
          leader: "faasde",
          roles: "programmer",
        },
        {
          name: "Gidesss",
          calories: 356,
          leader: "jezreel",
          roles: "Design",
        },
        {
          name: "Jellsde",
          calories: 375,
          leader: "leenas",
          roles: "Arch",
        },
        {
          name: "ribbenh",
          calories: 392,
          leader: "dooltis",
          roles: "humanR",
        },
        {
          name: "Honeysde",
          calories: 408,
          leader: "deeeras",
          roles: "designing",
        },
        {
          name: "weedsa",
          calories: 452,
          leader: "geedat",
          roles: "freela",
        },
        {
          name: "kiitx cvfs",
          calories: 518,
          leader: "shami",
          roles: "Coder1",
        },
      ],
    };
  },
  methods:{
useraddtask(){
  this.showusertask = !this.showusertask

  this.$emit("ViewuserProfile",this.showusertask);
  }
}
};
</script>
