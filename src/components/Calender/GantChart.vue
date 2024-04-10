<template>
  <div id="">
    <div class="scrolldatachart ">

      <VueDjGantt

      :rows="rows"
      :user="user"


      />

    <!--    <VueDjGantt

      :rows="rows"
      :user="user"
      :items="items"   
      @click="userprofiletask"

      /> -->
    </div>
  </div>
</template>


<script>

import VueDjGantt from './VueDjGantt.vue';
import moment from "moment";

export default {
  components: {
    VueDjGantt
  },

  data() {
    return {

      Viewuserprofiletask:true,

      rows: [
      {
        id: 1,
        internalId: '#1',
        name: 'First',
      },
      {
        id: 2,
        internalId: '#2',
        name: 'Second',
      },
      {
        id: 3,
        internalId: '#3',
        name: 'Third',
      },
      {
        id: 4,
        internalId: '#4',
        name: 'Four',
      },
      {
        id: 5,
        internalId: '#5',
        name: 'Five',
      },
      {
        id: 6,
        internalId: '#5',
        name: 'Five',
      },
      {
        id: 7,
        internalId: '#5',
        name: 'Five',
      },
      {
        id: 8,
        internalId: '#5',
        name: 'Five',
      },
      {
        id: 9,
        internalId: '#5',
        name: 'Five',
      },
      {
        id: 10,
        internalId: '#5',
        name: 'Five',
      },,
      {
        id: 11,
        internalId: '#5',
        name: 'Five',
      },
      ],

      items: [
      {
        rowId: 1,
        label: `Some task`,
        style: {background: '#24abf2'},

        time: {
          // start:'2023-03-01 00:00',
          // end: '2023-03-03 00:00',
          // start: moment([2023, 2, 6]).add(6, 'days'),
          // end: moment([2023, 3, 10]).add(18, 'days'),
              start: (+ +new Date()) - (5 * 24 * 60 * 60 * 1000),
            end: (+ +new Date()) + (10 * 24 * 60 * 60 * 1000),
        },
      },
      {
        rowId: 2,
        label: `Other task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(13, 'hours'),
          end: moment().add(28, 'days'),
          //    start:'2023-02-01 00:00',
          // end: '2023-04-03 00:00',
        },
      },
      {
        rowId: 3,
        label: `Some Other task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(20, 'days'),
          end: moment().add(26, 'days'),
          //    start:'2023-04-01 00:00',
          // end: '2023-06-03 00:00',
        },
      },
      {
        rowId: 4,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(8, 'hours'),
          end: moment().add(20, 'days'),
          //    start:'2023-05-01 00:00',
          // end: '2023-07-03 00:00',
        },
      },
      {
        rowId: 5,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },
      {
        rowId: 6,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },
      {
        rowId: 7,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },
      {
        rowId: 8,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },
      {
        rowId: 9,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },
      {
        rowId: 10,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },
      {
        rowId: 11,
        label: `Other Some task`,
        style: {background: '#abf224'},
        time: {
          start: moment().add(12, 'hours'),
          end: moment().add(22, 'days') ,
        },
      },

      ],
      timelineSettings: {
        timelineViewMode:'Month',
        timelineUnitSize:150,

      },

    }

  },
  methods:{
    userprofiletask(){
      // console.log("HAlooo call this")
      this.showTaskDetails = !this.showTaskDetails;
      this.$emit("ViewDetailsdata",this.showTaskDetails);

    }
  }
};
</script>

<style type="text/css">
.gantchartstyl{
  width: 100%;
}
</style>