<template>
	<v-card class=" bordered blockcolrstyl " outlined   >
		<v-card-title class="bottom-bordered taskbtnstyl ">
			{{ title }} 
			<span><i class="fas fa-ellipsis-h taskbtnstyl" style="float: right;"></i></span>
		</v-card-title>
		<v-container  class="scroll">

			
			<div class="card-body mt-2 cardbodystyl "  @click="showDetails">

				<h6 class="text-center textstylcard">123456789</h6>
				<h6 class="text-center textstylcard">text and varifaction</h6>
				<h6 class="text-center textstylcard datestyl">LT:06.05.24</h6>
				<div class="dateshowstyl">
					<h6 class="textstylcard ">Start: 22.01.2022</h6>
					<h6 class="textstylcard"> End: 22.01.2022</h6>
				</div>
				<div>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>

					<img :src="image" class="imagestyl">
				</div>
			</div>
			<div class="card-body mt-2 cardbodystyl" @click="showDetails">

				<h6 class="text-center textstylcard">123456789</h6>
				<h6 class="text-center textstylcard">text and varifaction</h6>
				<h6 class="text-center textstylcard datestyl">LT:06.05.24</h6>

				<div class="dateshowstyl">
					<h6 class="textstylcard ">Start: 22.01.2022</h6>
					<h6 class="textstylcard">  End: 22.01.2022</h6>
				</div>
				<div>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>

					<img :src="image" class="imagestyl">
				</div>
			</div>
			<div class="card-body mt-2 cardbodystyl" @click="showDetails">

				<h6 class="text-center textstylcard">123456789</h6>
				<h6 class="text-center textstylcard">text and varifaction</h6>
				<h6 class="text-center textstylcard datestyl">LT:06.05.24</h6>

				<div class="dateshowstyl">
					<h6 class="textstylcard ">Start: 22.01.2022</h6>
					<h6 class="textstylcard"> End: 22.01.2022</h6>
				</div>
				<div>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>

					<img :src="image" class="imagestyl">
				</div>
			</div>
			<div class="card-body mt-2 mb-3 cardbodystyl" @click="showDetails">

				<h6 class="text-center textstylcard">123456789</h6>
				<h6 class="text-center textstylcard">text and varifaction</h6>
				<h6 class="text-center textstylcard datestyl">LT:06.05.24</h6>

				<div class="dateshowstyl">
					<h6 class="textstylcard ">Start: 22.01.2022</h6>
					<h6 class="textstylcard"> End: 22.01.2022</h6>
				</div>
				<div>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>
					<button class=" btnstyl mt-5">RRU</button>

					<img :src="image" class="imagestyl">
				</div>
			</div>


		</v-container>
		<v-card-actions class="top-bordered justify-center">
			<v-btn @click="AddDetails" >
				<i class="fas fa-plus taskbtnstyl"></i>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import image from "@/assets/userimg.png"

export default {
	props: {
		title: {
			type: String,
			required: true,
		}
	},

	data: function () {
		return {
			showTaskDetails: true,
			AddTaskDetails: true,
			image: image
		}
	},

	methods : {
		showDetails() {
			// console.log('haloo',this.showTaskDetails)
			this.showTaskDetails = !this.showTaskDetails;
			this.$emit("showDetailsdata",this.showTaskDetails);

		},
		AddDetails() {
			// console.log('haloo add task')
			this.AddTaskDetails = !this.AddTaskDetails;
			this.$emit("AddshowDetails",this.AddTaskDetails);

		}
	}

}
</script>

<style scoped>
.bordered {
	border: 1px solid rgba(0,0,0,.125);
}
.bottom-bordered {
	border-bottom: 1px solid rgba(0,0,0,.125);
}
.top-bordered {
	border-top: 1px solid rgba(0,0,0,.125);
}
.scroll{
	height:350px !important;
	overflow-y: scroll;
}
</style>

<style>

.dateshowstyl{
	display: none;
}

.datestyl:hover + div {
	display: block;
	color: green;

}

@import "../../assets/style.css";


</style>