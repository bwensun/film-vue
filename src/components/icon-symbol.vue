<template>
	<svg class="svg-icon" aria-hidden="true">
		<use :xlink:href="iconClass" />
	</svg>
</template>

<script type="text/javascript">
export default {
	name: "icon-symbol",
	data() {
		return {

		}
	},
	components: {

	},
	props: {
		iconName: {
			type: String,
			required: true
		}
	},
	computed: {
		iconClass() {
			return `#icon-${this.iconName}`
		}
	},
	methods: {

	},
}
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>