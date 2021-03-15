<template>
	<div>
		<Header v-bind:items="items"></Header>
		<DropLine></DropLine>
	</div>
</template>

<script>
import Header from '../header/Header';
import DropLine from '../dropLine/DropLine';

export default {
	name: 'ContactPageWrapper',
	components: { Header, DropLine },
	props: {
		msg: String
	},
	data: () => ({
		items: [
			{ name: 'About', index: 1 },
			{ name: 'Shop', index: 2 },
			{ name: 'Cart', index: 3 }
		]
	})
}
</script>
<style>
		@import './style.css';
</style>


