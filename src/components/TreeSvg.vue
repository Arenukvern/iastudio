<template>
	<svg
		width="26"
		height="30"
		viewBox="0 0 26 30"
		class="icon tree-svg"
		:class="darkClass"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M1.95 8.775C1.95 8.93851 1.9548 9.10099 1.96429 9.2623C0.732775 10.7453 0 12.6055 0 14.625C0 19.4713 4.21972 23.4 9.425 23.4C9.53377 23.4 9.64212 23.3983 9.75 23.3949V29.25H17.55V21.4439C17.6578 21.4479 17.7662 21.45 17.875 21.45C22.3623 21.45 26 17.9578 26 13.65C26 10.1879 23.6505 7.25269 20.3987 6.23358C19.2283 2.62652 15.6311 0 11.375 0C6.16972 0 1.95 3.9287 1.95 8.775Z"
		/>
	</svg>
</template>

<script>
export default {
	name: 'TreeSvg',
	props: {
		isDark: Boolean,
	},
	components: {},
	computed: {
		darkClass() {
			if (this.isDark) return '--is-dark'
			return ''
		},
	},
}
</script>
