<template>
	<div >
		<v-card class="scrolldata blockcolrstyl userprofilestyl" >
			<v-row >
				<v-col cols="12" sm="4">
					<img :src="image" class="avtrimagestyl">
				</v-col>

				<v-col cols="12" sm="8">
					<p class="usertextstylcard">Person 1</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="4">
					<img :src="image" class="avtrimagestyl">
				</v-col>

				<v-col cols="12" sm="8">
					<p class="usertextstylcard">Person 1</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="4">
					<img :src="image" class="avtrimagestyl">
				</v-col>

				<v-col cols="12" sm="8">
					<p class="usertextstylcard">Person 1</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="4">
					<img :src="image" class="avtrimagestyl">
				</v-col>

				<v-col cols="12" sm="8">
					<p class="usertextstylcard">Person 1</p>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="4">
					<img :src="image" class="avtrimagestyl">
				</v-col>

				<v-col cols="12" sm="8">
					<p class="usertextstylcard">Person 1</p>
				</v-col>
			</v-row>
			<v-container>
			<div>
				<input type="radio" id="huey1" name="drone1" class="radio1" value="huey1"
				checked>
				<label for="huey1" class="usertextstylcard">Huey</label>
			</div><div>
				<input type="radio" id="huey2" name="drone2" class="radio2" value="huey2"
				checked>
				<label for="huey2" class="usertextstylcard">Huey</label>
			</div><div>
				<input type="radio" id="huey3" name="drone3" class="radio3"  value="huey3"
				checked>
				<label for="huey3" class="usertextstylcard">Huey</label>
			</div><div>
				<input type="radio" id="huey4" name="drone4" class="radio4"  value="huey4"
				checked>
				<label for="huey4" class="usertextstylcard">Huey</label>
			</div>
		</v-container>
			</v-card>
		</div>
	</template>

	<script>
	import image from "@/assets/userimg.png"
	export default {
		data: function () {
			return {

				image: image
			}
		},
	}
	</script>

	<style>
	input[name='drone1']:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -4px;
		left: -1px;
		position: relative;
		background-color: #ffa500;
		content: '';
		display: inline-block;
		visibility: visible;
		
	}
	input[name='drone2']:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -4px;
		left: -1px;
		position: relative;
		background-color: pink;
		content: '';
		display: inline-block;
		visibility: visible;
		
	}
	input[name='drone3']:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -4px;
		left: -1px;
		position: relative;
		background-color: green;
		content: '';
		display: inline-block;
		visibility: visible;
		
	}
	input[name='drone4']:checked:after {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		top: -4px;
		left: -1px;
		position: relative;
		background-color: red;
		content: '';
		display: inline-block;
		visibility: visible;
		
	}

	.avtrimagestyl{
		width:20px;
		padding-left:5px;
	}

	.userprofilestyl{
		margin-top: -13px;
	}
	</style>	
