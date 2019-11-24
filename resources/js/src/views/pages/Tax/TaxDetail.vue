<template>
	<div>
	</div>
</template>
<script>
	export default{
		  beforeCreate () {
		  	localStorage.setItem('currentDetail',this.$route.fullPath);
		    this.$store.commit('setRootUrl',this.$route.fullPath);
		  },
		methods: {
		}
	}
</script>