<template>
	<div>
		<Header v-bind:items="items"></Header>
	</div>
</template>

<script>
import Header from '../header/Header';

export default {
	name: 'ContactPageWrapper',
	components: { Header },
	props: {
		msg: String
	},
	data: () => ({
		items: [
			{ name: 'About' },
			{ name: 'Shop' },
			{ name: 'Cart' }
		]
	})
}
</script>
<style>
		@import './style.css';
</style>


