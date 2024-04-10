<template>
	<div  id="app">
		<v-app>

			<Navbar title="TeamBacklog" />
		
			<v-content>

				<v-row >
					<v-col sm="1" class="pagecontent">
						<Leftsidebar/>
					</v-col>
					<v-col sm="11" class="pagecontent">
						<v-main>
						<DropdownC/>

						<router-view />

					</v-main>
					</v-col>
				</v-row>


			</v-content>

		</v-app>

	</div>

</template>


<script>
import Navbar from "./Navbar.vue"
import Leftsidebar from "./Leftsidebar.vue"
import DropdownC from "./Dropdown.vue"

export default {
	name: "Headercomp",
	components: {
		Navbar,
		Leftsidebar,
		DropdownC
	},

	data(){
		return {
			
		}
	},
};
</script>



<style>

.sidebarstyl {
	background-color: #00be83;
}
.icionstyl {

}
.iciontopstyl {
	padding-top: 130px;
}



.maincontent{
	--v-layout-left: 120px !important;
}

.navfixstyl{
	position: fixed !important;
}
</style>