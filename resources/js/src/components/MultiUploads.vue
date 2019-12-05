<template>
	<vs-popup :title="title" :active.sync="isShown"></vs-popup>
</template>
<script>
	export default{
		props : {
			active : {
				type : Boolean,
				default : false,
			},
			title : {
				type : String,
				default : 'Upload Multiple Records',
			}
		},
		watch :{
			active : function(val,oldVal){
				alert(val)
			}
		},
		data () {
		  return {
		    isShown:this.active
		  };
		},
	}
</script>