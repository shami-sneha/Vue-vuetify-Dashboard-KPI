<template>
		<v-app>
		<v-container fluid class="pagecontent">
		

		<v-row>
			<v-col cols="12" sm="2"  >

				<div>
					<Userfile />
				
			</div>

		</v-col>
		<div class="12" sm='8'>


		<h1>This is new Page</h1>
		</div>


		</v-row>
	</v-container>
</v-app>
</template>
<script type="text/javascript">

import Userfile from '../components/Calender/Calenderuserleftsidebar.vue';


export default {
	components:{
		
		Userfile,
	
	},
		
	
}

</script>
