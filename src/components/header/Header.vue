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
  import gsap from 'gsap';
	export default {
		name: 'Header',
		props: {
			items: Array
		},
		methods: {
			delayedFade: () => {
				const tl = gsap.timeline();
				const logoTl = gsap.timeline();
				tl
					.from('.menuList', 3, { opacity: 0 })
					.from('.menuItem1', 3, { x: -32, delay: .8, opacity: 0 }, 0)
					.from('.menuItem2', 3, { x: -32, delay: .6, opacity: 0 }, 0)
					.from('.menuItem3', 3, { x: -32, delay: .4, opacity: 0 }, 0)

				logoTl
					.from('.logo', 3, { x: 16, delay: 1, opacity: 0 })
			}
		},
		mounted() { this.delayedFade() },
	}
</script>

<style>
	@import './styles.css';
</style>
