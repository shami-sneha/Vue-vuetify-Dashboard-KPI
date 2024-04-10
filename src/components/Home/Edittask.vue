<template>

	<v-card class="scrolldata editcardstyl">

		<div class="d-flex flex-row">
			

			<v-tabs
			v-model="tab"
			direction="vertical"
			color="primary"
			class="maintabstyl"
			>
			<v-tab>
				<span @click="showeidttask"> >> </span>
			</v-tab>
			<v-tab value="option-1" class="tabstyl editcardstyl">
				RRU
			</v-tab>
			<v-tab value="option-2" class="tabstyl editcardstyl">
				HQL
			</v-tab>
			<v-tab value="option-3" class="tabstyl editcardstyl">
				ALF
			</v-tab>
		</v-tabs>
		<v-window v-model="tab" class="tabwindowstyl">
			<v-window-item value="option-1">
				<v-card class="">

					<v-tabs
					v-model="tab2"
					
					>
					<v-tabs-slider></v-tabs-slider>

					<v-tab value="tab-1" class="tabbtnstyl editcardstyl" >
						Design

					</v-tab>

					<v-tab value="tab-2" class="tabbtnstyl editcardstyl">
						Programming

					</v-tab>

					<v-tab value="tab-3" class="tabbtnstyl editcardstyl">
						IBS

					</v-tab>
				</v-tabs>

				<v-window v-model="tab2" >
					<v-window-item value="tab-1">
						<v-card flat class="pagecontent">
							<v-card-text>
								<v-row>
									<v-col cols="12" sm="4" class="">
										<v-text-field
										background-color="grey"
										v-model="message"
										label="Kunden"
										disabled
										class="backgroundstyl"
										></v-text-field>
									</v-col>
									<v-col cols="12" sm="4" class="">
										<v-text-field
										background-color="grey"

										v-model="rru"
										
										label="Kunden"
										disabled
										class=" backgroundstyl"
										></v-text-field>
									</v-col>
									<v-col cols="12" sm="4" class="">
										<v-text-field
										background-color="grey"

										v-model="message"
										
										label="Kunden"
										disabled
										class="backgroundstyl"
										></v-text-field>
									</v-col>
								</v-row>
								<v-row>
									<v-col cols="12" sm="6" class="coltextstyl">
										<v-select
										:items="items"
										v-model="design"
										label="Task Type"
										class="designselctstyl cardbodystyl"
										></v-select>
									</v-col>
									<v-col cols="12" sm="6" class="coltextstyl">
										<v-select
										:items="items1"
										label="Abtellung"
										class="designselctstyl cardbodystyl"
										v-model="design1"
										></v-select>
									</v-col>
								</v-row>
								<v-row>
									<v-col cols="12" sm="4" class="coltextstyl">
										<div class="dateborderstyl">
										<label class="textstyldate">Start</label>
										<Datepicker 
										v-model="date" 
										:enable-time-picker="false"
									
										></Datepicker>	
										</div>
										
										
										
									</v-col>
									<v-col cols="12" sm="4" class="coltextstyl">
										<div class="coltextstyling dateborderstyl">
											<label class="textstyldate">End</label>
											<Datepicker 
											v-model="date" 
											:enable-time-picker="false"
										
											></Datepicker>
										</div>
										
									</v-col>
									<v-col cols="12" sm="4" class="coltextstyl">
										<v-text-field
										v-model="message2"
										
										label="Kunden"
										
										class="numberstyl backgroundstyl"

										></v-text-field>
									</v-col>
								</v-row>
								<v-row>
									<v-col cols="12" sm="6" class="coltextstyl">
										<v-select
										:items="items"
										label="Bearbeiter"
										v-model="design"
										class="designselctstyl"
										></v-select>
										
									</v-col>
									<v-col cols="12" sm="6" class="coltextstyl">
										<v-text-field
										v-model="message3"
										disabled
										label="Excel Start"
										class="tasktextstyl"
										></v-text-field>
									</v-col>
								</v-row>
								<v-row>
									<v-col cols="12" sm="6" class="switchcoltextstyl">

										<div class="switchbtnstyl">
											<v-row>
												<v-col cols="12" sm="8" class="headingtextstyl">
													<span >Dienstleister </span>
												</v-col>
												<v-col cols="12" sm="4" class="siwtchiconstyl">
													<v-switch>
													</v-switch> 
												</v-col>
											</v-row>
											
											
										</div>
										
									</v-col>
									<v-col cols="12" sm="4" class="coltextstylblock">
										<v-text-field
										v-model="message3"
										disabled
										label="Excel End"
										class="tasktextstyl"
										></v-text-field>
									</v-col>
								</v-row>

								<v-row>
									<v-col cols="12" sm="4" class="coltextstyl">
										<v-text-field
										v-model="date1"
										filled
										label="System Start"
										disabled
										class="tasktextstyl"
										></v-text-field>
									</v-col>
									<v-col cols="12" sm="4" class="coltextstyl">
										<v-text-field
										v-model="date1"
										filled
										label="Meilstein IBS"
										disabled
										class="tasktextstyl"
										></v-text-field>
									</v-col>
									<v-col cols="12" sm="4" class="coltextstyl">
										<v-text-field
										v-model="date1"
										filled
										label="IBS Start"
										disabled
										class="tasktextstyl"
										></v-text-field>
									</v-col>
								</v-row>

								<v-row>
									<v-col cols="12">
										<v-select
										:items="items"
										label="Bearbeiter"
										v-model="design"
										class="designselctstyl"
										></v-select>
									</v-col>
								</v-row>

								<v-row>
									<v-col cols="12">
										<v-text-field 
										hide-details 
										
										placeholder="Input" 
										filled 
										rounded 
										dense 
										single-line 
										class="inputfieldtext"
										>
									</v-text-field>
								</v-col>
							</v-row>

							<v-row>
								<v-col cols="4">
									<div class="buttonstyl">
										<v-btn
										rounded
										class="taskbtnstyls"
										>
										Task  
									</v-btn>
									<v-btn
									rounded
									class="btnstyls"
									>
									Speichern
								</v-btn>
								<v-btn
							rounded
							class="btnstyls"
							>
							Abbrechen
						</v-btn>
							</div>

						</v-col>
						
						
				</v-row>


			</v-card-text>
		</v-card>
	</v-window-item>

	<v-window-item value="tab-2">
		<v-card flat>
			<v-card-text>
				<v-row>
					<v-col cols="12" sm="4" class="">
						<v-text-field
						v-model="message"
						filled
						label="Kunden"
						disabled
						class="font-weight-bold"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="4" class="">
						<v-text-field
						v-model="hql"
						filled
						label="Kunden"
						disabled
						class="font-weight-bold"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="4" class="">
						<v-text-field
						v-model="message"
						filled
						label="Kunden"
						disabled
						class="font-weight-bold"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="6" class="coltextstyl">
						<v-select
						:items="items"
						v-model="programming"
						label="Task Type"
						></v-select>
					</v-col>
					<v-col cols="12" sm="6" class="coltextstyl">
						<v-select
						:items="items"

						label="Filled style"
						></v-select>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="4" class="coltextstyl">

						<label class="textstyldate">Start</label>
						<Datepicker 
						v-model="date" 
						:enable-time-picker="false"
					
						></Datepicker>


					</v-col>
					<v-col cols="12" sm="4" class="coltextstyl">
						<div class="coltextstyling">
							<label class="textstyldate">End</label>
							<Datepicker 
							v-model="date" 
							:enable-time-picker="false"
						
							></Datepicker>
						</div>

					</v-col>
					<v-col cols="12" sm="4" class="coltextstyl">
						<v-text-field
						v-model="message2"

						label="Kunden"

						class="tasktextstyl"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" sm="6" class="coltextstyl">
						<v-select
						:items="items"
						filled
						label="Filled style"
						></v-select>

					</v-col>
					<v-col cols="12" sm="6" class="coltextstyl">
						<v-text-field
						v-model="message2"

						label="Kunden"

						class="tasktextstyl"
						></v-text-field>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12" sm="4" class="coltextstyl">
						<v-text-field
						v-model="date"
						filled
						label="System End"
						disabled
						class="tasktextstyl"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="4" class="coltextstyl">
						<v-text-field
						v-model="message"
						filled
						label="Machine"
						disabled
						class="tasktextstyl"
						></v-text-field>
					</v-col>
					<v-col cols="12" sm="4" class="coltextstyl">
						<v-text-field
						v-model="message"
						filled
						label="IBS Start"
						disabled
						class="tasktextstyl"
						></v-text-field>
					</v-col>
				</v-row>

				<v-row>
					<v-col cols="12">
						<v-text-field 
						hide-details 

						placeholder="Input" 
						filled 
						rounded 
						dense 
						single-line 
						class="inputfieldtext"
						>
					</v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="4">
					<v-btn
					rounded
					class="taskbtnstyls"
					>
					Task  
				</v-btn>
			</v-col>
			<v-col cols="4">
				<v-btn
				rounded
				class="taskbtnstyls"
				>
				Speichern
			</v-btn>
		</v-col>
		<v-col cols="4">
			<v-btn
			rounded
			class="taskbtnstyls"
			>
			Abbrechen
		</v-btn>
	</v-col>
</v-row>


</v-card-text>
</v-card>
</v-window-item>

<v-window-item value="tab-3">
	<v-card flat>
		<v-card-text>
			<v-row>
				<v-col cols="12" sm="4" class="">
					<v-text-field
					v-model="message"
					filled
					label="Kunden"
					disabled
					class="font-weight-bold"
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="4" class="">
					<v-text-field
					v-model="alf"
					filled
					label="Kunden"
					disabled
					class="font-weight-bold"
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="4" class="">
					<v-text-field
					v-model="message"
					filled
					label="Kunden"
					disabled
					class="font-weight-bold"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" class="coltextstyl">
					<v-select
					:items="items"
					v-model="ibs"
					label="Task Type"
					></v-select>
				</v-col>
				<v-col cols="12" sm="6" class="coltextstyl">
					<v-select
					:items="items"

					label="Filled style"
					></v-select>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="4" class="coltextstyl">

					<label class="textstyldate">Start</label>
					<Datepicker 
					v-model="date" 
					:enable-time-picker="false"
				
					></Datepicker>


				</v-col>
				<v-col cols="12" sm="4" class="coltextstyl">
					<div class="coltextstyling">
						<label class="textstyldate">End</label>
						<Datepicker 
						v-model="date" 
						:enable-time-picker="false"
					
						></Datepicker>
					</div>

				</v-col>
				<v-col cols="12" sm="4" class="coltextstyl">
					<v-text-field
					v-model="message2"

					label="Kunden"

					class="tasktextstyl"
					></v-text-field>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" sm="6" class="coltextstyl">
					<v-select
					:items="items"
					filled
					label="Filled style"
					></v-select>

				</v-col>
				<v-col cols="12" sm="6" class="coltextstyl">
					<v-text-field
					v-model="message2"

					label="Kunden"

					class="tasktextstyl"
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12" sm="4" class="coltextstyl">
					<v-text-field
					v-model="date"
					filled
					label="System End"
					disabled
					class="tasktextstyl"
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="4" class="coltextstyl">
					<v-text-field
					v-model="message"
					filled
					label="Machine"
					disabled
					class="tasktextstyl"
					></v-text-field>
				</v-col>
				<v-col cols="12" sm="4" class="coltextstyl">
					<v-text-field
					v-model="message"
					filled
					label="IBS Start"
					disabled
					class="tasktextstyl"
					></v-text-field>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-text-field 
					hide-details 

					placeholder="Input" 
					filled 
					rounded 
					dense 
					single-line 
					class="inputfieldtext"
					>
				</v-text-field>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="4">
				<v-btn
				rounded
				class="taskbtnstyls"
				>
				Task  
			</v-btn>
		</v-col>
		<v-col cols="4">
			<v-btn
			rounded
			class="taskbtnstyls"
			>
			Speichern
		</v-btn>
	</v-col>
	<v-col cols="4">
		<v-btn
		rounded
		class="taskbtnstyls"
		>
		Abbrechen
	</v-btn>
</v-col>
</v-row>


</v-card-text>	</v-card>
</v-window-item>
</v-window>

			<!-- 	<v-tabs-items v-model="tab2">
					<v-tab-item
					v-for="i in 3"
					:key="i"
					:value="'tab-' + i"
					>
					<v-card flat>
						<v-card-text>{{ text }}</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items> -->

		</v-card>
	</v-window-item>
	<v-window-item value="option-2">
		<v-card flat>
			<v-card-text>
				<p>
					Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
				</p>

				<p class="mb-0">
					Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
				</p>
			</v-card-text>
		</v-card>
	</v-window-item>
	<v-window-item value="option-3">
		<v-card flat>
			<v-card-text>
				<p>
					Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
				</p>

				<p class="mb-0">
					Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
				</p>
			</v-card-text>
		</v-card>
	</v-window-item>
</v-window>
</div>
</v-card>

</template>
<script>
import Datepicker from '@vuepic/vue-datepicker';
export default {
	components:{
		
		Datepicker,

	},
	data () {
		return {

			tab: null,
			message: 'SuzhoU Kunpeng',
			rru: 'RRU',
			hql: 'HQL',
			alf: 'ALF',
			message2: '100',
			message3: '27.09.2022',
			result:'',
			tab2: null,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			design: 'Design',
			programming: 'Programming',
			ibs: 'IBS',
			design1:'ENC13',
			items1:['ENC13', 'ENC14', 'ENC15'],
			items: ['Design', 'Programming', 'IBS'],

			date: new Date(),
			date1:'29.02.2022',
			bio: '',
		}
	},
	mounted() {
		const dateObj = new Date(); 
		const year = dateObj.getFullYear();
		const month = (dateObj.getMonth()+1).toString().padStart(2, '0');
		const date = dateObj.getDate().toString().padStart(2, '0');

		let result = `${year}-${month}-${date}`;


	},
	methods:{
		showeidttask(){
			this.showeidtTaskDetail = !this.showeidtTaskDetail;
			this.$emit("ShowEditTaskDetails", this.showeidtTaskDetail);
		}
	}
}
</script>

<style>
.v-tabs.v-slide-group--vertical {
	
}


.tabwindowstyl{
	width:450px;
}
.tabbtnstyl{
	font-size:11px;
	font-weight: 500;
}


.v-tab--selected .v-tab__slider {
	opacity: 1;
	color: #00be83;
}

.v-text-field input {
	font-size: 10px;
}
.tasktextstyl{
	
	font-size: 12px !important;
	font-weight: 500;
}

.{
	padding-right: 0px;
	padding-left: 4px;
	padding-bottom: 0px;

}

.coltextstyl{
	padding-top: 0px;
	padding-right: 0px;
	padding-left: 1px;
	padding-bottom: 0px;
}
svg.dp__icon.dp__clear_icon.dp__input_icons {
	display: none;
}
input.dp__pointer.dp__input_readonly.dp__input.dp__input_icon_pad.dp__input_reg {
	font-size: 9px;
}
svg.dp__icon.dp__input_icon.dp__input_icons {
	width: 12px;
}

.coltextstyling{
	padding-left:2px;
}
.tabstyl{
	margin-left:-10px;
}
.v-text-field.v-text-field--solo .v-input__control{
	min-height: 0px;
}

.v-label{
	font-size: 12px;
}
.inputfieldtext{
	background-color: white !important;

}

input#input-114 {
	background-color: white;
	border: 1px solid;
	height: 60px !important;
}
.btnstyls{
	font-size:10px;
	border:1px solid;
	margin-right:10px;
}
.taskbtnstyls{
	font-size:10px;
	border:1px solid;
	margin-left:60px;
	margin-right:10px;
}

.numberstyl input{
	background-color:white !important;
}
.designselctstyl .v-field--variant-filled .v-field__overlay {
	background-color: white !important;
}
.switchcoltextstyl{
	padding-top: 12px;
	padding-right: 0px;
	padding-left: 1px;
	padding-bottom: 0px;
}
.coltextstylblock{
	padding-top: 0px;
	padding-right: 0px;
	padding-left: 10px;
	padding-bottom: 0px;
}
.switchbtnstyl{
	background-color:#eeeeee;
	height:55px;
}
.headingtextstyl{
	padding-top: 15px;
	padding-left: 20px;
}
.siwtchiconstyl{
	float: right;
	padding-top: 0px;
	padding-left: 0px

}

.buttonstyl{
	display:flex;
}
/*	
span.v-btn__content {
	color: black;
}*/


</style>