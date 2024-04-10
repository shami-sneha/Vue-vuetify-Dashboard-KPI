<template>

	<!-- <nav>
		<v-toolbar flat app>
			<v-toolbar-title class="headerclr">TeamBacklog</v-toolbar-title>
		</v-toolbar>
	</nav> -->


	<v-app-bar class="pagecontent ">
		<v-toolbar-title class="headerclr ">{{title}}</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">

			<v-btn  class="taskbtnstyl">MM:Max Miller</v-btn>
		</v-toolbar-items> 
	</v-app-bar>


</template>
<script>
export default{
	name: "Navbar",
	props: {
		title: {
			type: String,
			required: true,
		}
	},
}
</script>

<style>
.headerclr {
	color: #00be83 !important;
	font-size: 28px;
}
.v-toolbar-title__placeholder {
	overflow: visible !important;
}
.v-toolbar__content{
	height: 55px !important;
}


@import "../assets/style.css";
</style>