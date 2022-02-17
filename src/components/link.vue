<template>
	<span class="link-wrap">
		<a :href="src">
			<slot name="prefix" />
			<span class="link">
				<slot></slot>
			</span>
			<slot name="suffix" />
		</a>
	</span>
</template>

<script type="text/javascript">
export default {
	name: "t-link",
	data() {
		return {

		}
	},
	components: {

	},
	props: {
		src: {
			type: String,
			default: "#"
		}


	},
	computed: {

	},
	methods: {

	},
}
</script>

<style scoped>
a {
	text-decoration: none;
}
a:active,
a:visited {
	color: unset;
}

.link {
	position: relative;
	color: rgb(96, 98, 102);
}

.link:after {
	content: "";
	position: absolute;
	height: 1px;
	width: 0;
	background-color: #409eff;
	left: 0;
	right: 0;
	bottom: 0;
	/* left: 0; */
	margin: 0 auto;
	transition: 0.2s ease-in-out;
}

.link:hover:after {
	width: 100%;
}

.link:hover {
	color: #409eff;
	/* text-decoration: underline; */
}
</style>