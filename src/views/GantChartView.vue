<template>

	<v-app>
		<v-container fluid class="pagecontent">
			<v-row>
				<v-col cols="12" sm="2" class="datebackgroundstyl">
					<Datepicker v-model="date" :enable-time-picker="false" class="datapickedstyl"></Datepicker>
				</v-col>
				<v-col cols="12" sm="8">
				</v-col>
				<v-col cols="12" sm="2">
					<v-select
					:items="items"
					class="cardbodystyl"
					label="Filled style"
					></v-select>
				</v-col>	
			</v-row>
		<br>
		<br>

		<v-row>
			<v-col cols="12" sm="2"  >

				<div>
					<Userfile />
				
			</div>

		</v-col>
		<div :class=" ViewuserDetails ? 'col-6' : 'col-10' ">


			<Calender @ViewDetailsdata="Viewuserdetail"/>
		</div>

			<!-- <v-col cols="12" sm="8" >
			
			</v-col> -->
			<v-col cols="12" sm="4" class="pt-0" v-if="ViewuserDetails">
				<Edittask/>
			</v-col>


		</v-row>
	</v-container>
</v-app>
</template>

<script type="text/javascript">
import { ref } from 'vue';
// import {  DatePicker } from 'v-calendar';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Calender from '../components/Calender/GantChart.vue';
import Userfile from '../components/Calender/Calenderuserleftsidebar.vue';
import Edittask from '../components/Home/Edittask.vue';

export default {
	components:{
		Calender,
		Userfile,
		Datepicker,
		Edittask,
	},
	data(){
		return{
			Userprofile:false,
			doublearrow:true,
			ViewuserDetails:'',
			items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
			date: new Date(),
			
		}
	},
	
	methods:{
		userProflieCall(value){
		
			
			

			if(value == 1){
				this.ViewuserDetails= false;
				this.Userprofile = !this.Userprofile;
				this.doublearrow = false
			}
			if(value == 2){
				this.doublearrow = true
				this.ViewuserDetails= false;
				this.Userprofile = !this.Userprofile;
			}
		},
		Viewuserdetail(value){
			// console.log("HAloo call this view user",value)
			this.ViewuserDetails= value;


		}

		
	}
}

</script>


<style>
.celenderchart{
	width:200px;
}


</style>