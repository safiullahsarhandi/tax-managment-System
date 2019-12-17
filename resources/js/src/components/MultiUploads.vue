<template>
    <vs-popup :title="title" :active.sync="isShown">
        <vs-row>
            <vs-col class="uploader-column">
                <vs-upload text="Drag/Drop OR select csv file" accept=".xlsx" :fileName="fileName" @on-success="successFunc" @on-error="errorFunc" @on-delete="deleteFunc" :action="action" :limit="1" :multiple="false"></vs-upload>
            </vs-col>
            <vs-col class="text-right">
            	<a :href="sampleUrl" download>View Sample</a>
            </vs-col>

        </vs-row>
    </vs-popup>
</template>
<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: 'Upload Multiple Records',
        },
        action: {
            type: String,
            required : true,
        },
        sampleUrl: {
            type: String,
            required : true,
        },
        fileName: {
            type: String,
            default : 'file'
        },
    },
    watch: {},
    data() {
        return {
            isShown: this.active
        };
    },
    methods: {
      deleteFunc() {
			this.$emit('deleted'); 
      },
      successFunc() {
			this.$emit('uploaded');        
            // this.successMultipleUpload();
            // console.log('testing');
      },
      errorFunc() {
			this.$emit('hasError');        
      },
    }
}

</script>
<style lang="scss">
	.uploader-column{
		& .con-input-upload {
    width: 100%; 
}
& .con-img-upload .img-upload {
    margin: 0;
    width: 100%;
    border: 1px solid rgba(52,144,220,0.5);
}
& .con-input-upload.disabled-upload {
    display: none;
}
	}
</style>