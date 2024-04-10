<template>
	<div>
		
		<v-card  class="scrolldata blockcolrstyl" >
			<v-container fluid class="bordertyle">

				<div class="row pt-4" >
					<div class="col-10">
						<h6 class="textstylcard">123456789</h6>
						<p class="textstylcard">text and varifaction</p>
						<p class="textstylcard">LT:06.05.24</p>
					</div>
					<div class="col-2" @click="showDetailsbtn"> 
						<v-btn style="float: right;"  class="crosbtnstyl">X</v-btn>
					</div>
				</div>



				<div class="pt-4">
					<nav>
						<div class="nav nav-tabs" id="nav-tab" role="tablist">


							<v-btn class="nav-link active tabstylblock " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">RRU</v-btn>

							<v-btn class="nav-link tabstylblock " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">HQL</v-btn>


							<v-btn class="nav-link tabstylblock " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">ALF</v-btn>



						</div>
					</nav>
					<div class="tab-content mt-5" id="nav-tabContent button1">

						<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

							<div class="row cardbodystyl">
								<div  class="col-2 tabtitle">

									<p class="vertical-text "  @click="editDetails">Design</p>

								</div>
								<div class="col-8 ">
									<!-- Tab panes -->
									<div >
										<p class="textstylcard pt-3 taskdatastyl">Abteilung: ENC13</p>
										<p class="textstylcard taskdatastyl">Task-Typ: Arbeit intern Maschiene(J-M)</p>
										<p class="textstylcard taskdatastyl">17.03.2022-22.03.2022</p>
									</div>

								</div>


							</div>
							<br><br>
							<div class="row cardbodystyl">
								<div  class="col-2 tabtitle">
									<p class="vertical-textp ">Programming</p>
								</div>
								<div class="col-8 ">
									<!-- Tab panes -->
									<div>
										<p class="textstylcard pt-3 taskdatastyl">Abteilung: ENC13</p>
										<p class="textstylcard taskdatastyl">Task-Typ: Arbeit intern Maschiene(J-M)</p>
										<p class="textstylcard taskdatastyl">17.03.2022-22.03.2022</p>
									</div>

								</div>


							</div>
							<br><br>
							<div class="row cardbodystyl mb-4">
								<div  class="col-2 tabtitle">

									<p class="vertical-text ">IBS</p>

								</div>
								<div class="col-8 ">
									<!-- Tab panes -->
									<div>
										<p class="textstylcard taskdatastyl pt-3">Abteilung: ENC13</p>
										<p class="textstylcard taskdatastyl">Task-Typ: Arbeit intern Maschiene(J-M)</p>
										<p class="textstylcard taskdatastyl">17.03.2022-22.03.2022</p>
									</div>

								</div>


							</div>

						</div>
						<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

						<!-- 	<nav>
								<div class="nav nav-tabs" id="nav-tab" role="tablist">

									<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
									<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
									<button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
								</div>
							</nav> -->
							<div class="tab-content" id="nav-tabContent">
								<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
								<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
								<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
							</div>

						</div>
						<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>





					</div>
				</div>

			</v-container>
		</v-card>

		<!-- <v-card >
			<div v-if="showeidtTaskDetail">
				<Edittask />
				<h1>HAloo im here</h1>
			</div>
		</v-card> -->
	</div>
</template>

<script>


export default {

	data: function () {
		return {
			showeidtTaskDetail: true
		}
	},
	methods : {
		showDetailsbtn() {
			// console.log('haloo',this.showTaskDetail)
			this.showTaskDetail = !this.showTaskDetail;
			this.$emit("showDetailsdata",this.showTaskDetail);

		},
		editDetails() {
			// console.log('haloo eidt',value)
			showeidtTaskDetail: true,
			this.showeidtTaskDetail = !this.showeidtTaskDetail;
			this.$emit("ShowEditTaskDetails", this.showeidtTaskDetail);

		}
	}
}


</script>

<style>

.tabtitle{
	background-color: #00be83;
	border-top-right-radius: 10px 100px;
	border-bottom-right-radius: 10px 100px;
	padding-left: 0px;
	height: 85px;
}
.vertical-text {
	margin-top: 23px;
	position: relative;
	width: 49px;
	
}
.vertical-textp{
	margin-top:10px;
	font-weight: 500;
	font-size: 12px;
	letter-spacing: normal;
	width: 77px;
	height: 60px;
	margin-left: 8px;

}
.nav-tabs {
     border-bottom: 0px solid #dee2e6; 
}
.nav-tabs .nav-link {
	border-color: #dee2e6 #dee2e6 #fff;
}
.vertical-text{
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	transform: rotate(-90deg);
}
.vertical-textp{
	-webkit-transform: rotate(-90deg);
	-moz-transform: rotate(-90deg);
	-ms-transform: rotate(-90deg);
	-o-transform: rotate(-90deg);
	transform: rotate(-90deg);
}

.bordertyle{
	border-color: black; 
	border-style: solid; 
	border-width: 0px 0px 0px 0px;
}

.scrolldata{
	height:450px !important;
	overflow-y: scroll;
}

.v-btn--variant-elevated {
	box-shadow: none !important;
	background-color:none !important;
}
.v-btn.v-btn--density-default {
	background: none;
}
.v-btn.v-btn--density-default:hover {
	background: none !important;
}
.taskdatastyl{
	font-weight:500;
	font-size: 12px;
	line-height: 3px;
}


</style>