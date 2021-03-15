<template>
	<div class="container">
		<div class="leftContent">
			<div class="logo"></div>
		</div>
		<div class="rightContent">
			<ul class="menuList">
				<li
					v-for="item in items"
					:class="`menuItem${item.index}`"
					:key="item.name"
				>
					<a href="javascritp:void(0)">
						{{ item.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  import { TimelineMax } from 'gsap';
	export default {
		name: 'Header',
		props: {
			items: Array
		},
		methods: {
			delayedFade: () => {
				const tl = new TimelineMax();
				const logoTl = new TimelineMax();
				tl
					.from('.menuList', 1.5, { opacity: 0 })
					.from('.menuItem1', 1.5, { x: -32, delay: .4, opacity: 0 }, 0)
					.from('.menuItem2', 1.5, { x: -32, delay: .2, opacity: 0 }, 0)
					.from('.menuItem3', 1.5, { x: -32, delay: .1, opacity: 0 }, 0)

				logoTl
					.from('.logo', 1.5, { x: 16, delay: 0, opacity: 0 })
			}
		},
		mounted() { this.delayedFade() },
	}
</script>

<style>
	@import './styles.css';
</style>
