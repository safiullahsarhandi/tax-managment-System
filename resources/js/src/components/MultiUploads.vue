<template>
    <vs-popup :title="title" :active.sync="isShown">
        <vs-row>
            <vs-col class="uploader-column">
                <vs-upload ref="multiUploader" :singleUpload="true" text="Drag/Drop OR select .xlsx file" accept=".xlsx" :fileName="fileName" @on-success="successFunc" @on-error="errorFunc" @on-delete="deleteFunc" :action="action" :limit="1" :multiple="false"></vs-upload>
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
      deleteFunc(error) {
            
			this.$emit('deleted'); 
      },
      successFunc(success) {
        var response = JSON.parse(success.target.response);
        var multiUploader = this.$refs.multiUploader;
            var file = _.filter(multiUploader.filesx, (o) => { return o.remove !== true })
            if (file.length > 0) {

                var index = _.findLastIndex(multiUploader.filesx);
                this.$refs.multiUploader.removeFile(index)
            }
			this.$emit('uploaded',response);        
            // this.successMultipleUpload();
            // console.log('testing');
      },
      errorFunc(error) {
         var response = JSON.parse(error.target.response);
			this.$emit('error',response);        
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