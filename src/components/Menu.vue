<template>
	<div class="menu__ancestor">
		<i @click.prevent="changeState">
			<TreeSvg />
		</i>
		<div class="menu" @click.stop :class="activeClass">
			<CircleSvg />
			<div class="menu__icon">
				<TreeSvg  :is-dark='isActive'/>
			</div>
			<div class="menu__item --on-top" @click.prevent="changeRoute('')">Home</div>
			<div class="menu__item --in-middle" @click.prevent="changeRoute('sketches')">Sketches</div>
			<div class="menu__item --on-bottom" @click.prevent="changeRoute('about')">About</div>
		</div>
		<div class="menu__dimmer" @click.prevent='changeState' :class="activeClass"></div>
	</div>
</template>

<script>
import TreeSvg from '@/components/TreeSvg.vue'
import CircleSvg from '@/assets/Circle.svg'
export default {
	name: 'Menu',
	data() {
		return {
			isActive: false,
		}
	},
	components: {
		CircleSvg,
		TreeSvg,
	},
	computed: {
		activeClass() {
			if (this.isActive) return '--is-active'
			return ''
		},
	},
	methods: {
		changeState() {
			console.log('ho')
			this.isActive = !this.isActive
		},
		changeRoute(routeName){
			this.$router.push(`/${routeName}`)
		}
	},
}
</script>

<style></style>
