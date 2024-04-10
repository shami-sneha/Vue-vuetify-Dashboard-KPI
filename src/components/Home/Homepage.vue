<template>

	<div class="">
		
		<div class="row">
			<div   :class="
			(showTaskDetails || AddTaskV || ShowEdittaskD)  ? 'col-8' : 'col-12'">

			<div class="row homegridstyl">
				<div class="col-sm-3 col-md-3 col-lg-3">
					<TaskLane title="Backlog"
					@showDetailsdata="showDetails"
					@AddshowDetails="AddTaskDetails"

					/>
				</div>
				<div class="col-sm-3 col-md-3 col-lg-3">
					<TaskLane title="To-Do" />
				</div>
				<div class="col-sm-3 col-md-3 col-lg-3">
					<TaskLane title="Doing" />
				</div>
				<div class="col-sm-3 col-md-3 col-lg-3">
					<TaskLane title="Done" />
				</div>
			</div>
		</div>
		<div v-if="showTaskDetails"  class="col-4">
			<Task @showDetailsdata="showDetails"  @ShowEditTaskDetails="ShowEditDetails"/>

		</div>
		<div v-if="AddTaskV"  class="col-4">
			<AddTask @AddshowDetails="AddTaskDetails" />

		</div>
		<div  v-if="ShowEdittaskD"  class="col-4 showeidttaskstyle">
			<ShowEdittask @ShowEditTaskDetails="ShowEditDetails"/>

		</div>
	</div>

	
</div>


</template>

<script>

import image from "@/assets/userimg.png";
import TaskLane from "./Taskblock.vue";
import Task from "./Usertask.vue";
import AddTask from './AddTask.vue'
import ShowEdittask from './Edittask.vue'
export default {
	components: {
		TaskLane,
		Task,
		AddTask,
		ShowEdittask
	},
	data: function () {
		return {
			showTaskDetails: '',
			ShowEdittaskD:'',
			AddTaskV: '',
			image: image
		}
	},
	methods : {
		showDetails(value) {
			this.AddTaskV = false
			this.showTaskDetails = value;
			this.ShowEdittaskD = false;
			
			this.showTaskDetails = !this.showTaskDetails;
		},
		AddTaskDetails(values){
			this.showTaskDetails = false;
			this.ShowEdittaskD = false;
			// console.log("Halo this Add",values)
			this.AddTaskV = values
			this.AddTaskV = !this.AddTaskV;
			
		},
		ShowEditDetails(valuess){
			console.log("Halo this Add",valuess)

			// for(let i=0; i<valuess.length; i++){
			// 	console.log('haloo eidt after',valuess[i])
			// }
			

			this.showTaskDetails = false;

			this.ShowEdittaskD = valuess
			this.ShowEdittaskD = !this.ShowEdittaskD;
		}

	}
}
</script>


<style>

.homegridstyl{
	margin: 0px !important; 
}
.showeidttaskstyle{
	    padding-left: 0px;
}
@import "../../assets/style.css";


</style>