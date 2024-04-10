<template>
	<div>
		<v-card class="scrolldata editcardstyl">

			<v-btn class="cancelstyl float-right" @click="showAddtaskbtn">X</v-btn>
			<v-form>
				<v-container>
					<v-text-field label="First name" class="textstylcard"></v-text-field>

					<v-row>
						<v-col
						cols="12"
						sm="6"
						
						>
						<v-text-field label="Abteilung" class="textstylcard"></v-text-field>
					</v-col>
					<v-col
					cols="12"
					sm="6"
					
					>
					<v-text-field label="Task Typ" class="textstylcard"></v-text-field>
				</v-col>

			</v-row>

			<v-row>
				<v-col
				cols="12"
				sm="6"
				>
				<v-text-field label="Abteilung" class="textstylcard"></v-text-field>
			</v-col>
			<v-col
			cols="12"
			sm="6"
			>
			<v-text-field label="Task Typ" class="textstylcard"></v-text-field>
		</v-col>

	</v-row>

	<v-row>
		<v-col
		cols="12"
		sm="6"
		>
		<v-text-field label="Abteilung" class="textstylcard"></v-text-field>
	</v-col>
	<v-col
	cols="12"
	sm="6"
	>
	<v-text-field label="Task Typ" class="textstylcard"></v-text-field>
</v-col>

</v-row>

</v-container>
</v-form>
</v-card >
</div>
</template>

<script>
export default {
	data: () => ({
		valid: true,
		name: '',
		nameRules: [
		v => !!v || 'Name is required',
		v => (v && v.length <= 10) || 'Name must be less than 10 characters',
		],
		email: '',
		emailRules: [
		v => !!v || 'E-mail is required',
		v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		],
		select: null,
		items: [
		'Item 1',
		'Item 2',
		'Item 3',
		'Item 4',
		],
		checkbox: false,
	}),

	methods: {
		showAddtaskbtn(){
			this.AddTaskDetails = !this.AddTaskDetails;
			this.$emit("AddshowDetails",this.AddTaskDetails);
		},
		async validate () {
			const { valid } = await this.$refs.form.validate()

			if (valid) alert('Form is valid')
		},
	reset () {
		this.$refs.form.reset()
	},
	resetValidation () {
		this.$refs.form.resetValidation()
	},
},
}
</script>


<style>

.cancelstyl{
	color: #00be83;
}
</style>