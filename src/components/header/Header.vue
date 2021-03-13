<template>
	<div class="container">
		<div class="leftContent">
			<div class="logo"></div>
		</div>
		<div class="rightContent">
			<ul>
				<li v-for="item in items" :key="item.name">
					<a href="javascritp:void(0)">
						{{ item.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			items: Array
		}
	}
</script>
<style>
	.container {
		height: 48px;
		display: flex;
		padding: 16px 0;
		align-items: center;
	}

	.leftContent {
		width: 50%;
	}

	.rightContent {
		width: 50%;
		padding-right: 16px;
	}

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: flex-end;
		margin: 0;
		padding: 0;
	}

	li {
		font-size: 12px;
		color: white;
		padding: 4px 16px;
		margin-right: 8px;
		text-transform: uppercase;
		border: 1px solid white;
		border-radius: 16px;
		text-align: center;
		cursor: pointer;
		background-color: transparent;
		transition: background-color .3s ease-in;
	}

	li:hover {
		background-color:white;
		color: rgb(46,46,46);
	}
	
	li:last-child {
		margin-right: 0;
	}

	.logo {
		height: 32px;
		width: 32px;
		border-radius: 50%;
		background: rgb(237,237,237);
		background: linear-gradient(180deg, rgba(237,237,237,1) 15%, rgba(52,52,52,1) 100%);
		margin-left: 16px;
		opacity: .7;
	}
</style>
