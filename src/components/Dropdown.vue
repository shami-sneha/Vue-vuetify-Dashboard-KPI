<template>
	<v-container fluid>
		<v-row >

			<v-col
			cols="12"
			sm="2"
			>
			<v-select
			v-model="e6"
			:items="states"
			:menu-props="{ maxHeight: '400' }"
			label="Select"
			multiple
			class="cardbodystyl"
			persistent-hint
			></v-select>
		</v-col>
		<v-col
		cols="12"
		sm="2"
		>
		<v-select
		v-model="e6"
		:items="states"
		:menu-props="{ maxHeight: '400' }"
		label="Select"
		multiple
		persistent-hint
		class="cardbodystyl"
		></v-select>
	</v-col>
	<v-col
	cols="12"
	sm="2"
	
	>
	<v-select
	v-model="e6"
	:items="states"
	:menu-props="{ maxHeight: '400' }"
	label="Select"
	multiple
	class="cardbodystyl"
	persistent-hint
	></v-select>
</v-col>
<v-col
cols="12"
sm="2"

>
<v-select
v-model="e6"
:items="states"
:menu-props="{ maxHeight: '400' }"
label="Select"
multiple
class="cardbodystyl"
persistent-hint
></v-select>
</v-col>
<v-col
cols="12"
sm="2"
>
<v-select
v-model="e6"
:items="states"
:menu-props="{ maxHeight: '400' }"
label="Select"
multiple
class="cardbodystyl"
persistent-hint
></v-select>
</v-col>
<v-col
cols="12"
sm="2"

>
	<v-text-field v-model.trim="searchText" dense filled rounded clearable placeholder="Search" prepend-inner-icon="mdi-magnify" class="shrink expanding-search cardbodystyl" :class="{ closed: searchBoxClosed && !searchText }" @keyup.enter="onSearch" @focus="searchBoxClosed = false" @blur="searchBoxClosed = true"></v-text-field>
</v-col>
</v-row>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        e6: [],
        e7: [],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
      }
    },
  }
</script>

<style>
.v-label {
	bottom: 20px;
}


.v-field--variant-filled .v-field__overlay {
	
	    border: 2px solid black;
}

@import "../assets/style.css";
</style>