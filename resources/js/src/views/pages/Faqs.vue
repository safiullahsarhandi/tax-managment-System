<template>
    <div>
        <vs-row>
            <vs-col>
                <vx-card title="FAQs">
                    <template slot="actions">
                        <vs-button v-if="$store.getters.userType == 'Admin' || $store.getters.userType == 'Super Admin'" @click="ShowFaqsDialog()" type="gradient" icon-pack="feather" icon="icon-plus"></vs-button>
                    </template>
                    <vs-row>
                    	<vs-col vs-md="12" vs-lg="12" vs-sm="12" v-html="faqs">
                    	</vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
        </vs-row>
        <vs-popup :active.sync="ShowAddFaqsDialog" fullscreen title="ADD OR UPDATE FAQs">
            <form ref="faqsForm" @submit.prevent="submitFaqs($event)">
                <vs-row>
                    <vs-col vs-md="12" vs-lg="12" vs-sm="12" class="mb-base">
                        <quill-editor v-validate="'required'" name="content" id="faq-editor" style="height: 100%;" v-model="content"></quill-editor>
                    </vs-col>
                    <vs-col class="mt-4" vs-md="12" vs-lg="12" vs-sm="12">
                    	<span v-show="errors.has('content')">{{errors.first('content')}}</span>
                    </vs-col>
                    <vs-col vs-md="12" vs-lg="12" vs-sm="12" class="flex justify-end mt-4">
                        <vs-button type="gradient">Update FAQs</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script type="text/javascript">
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
    data() {
        return {
            ShowAddFaqsDialog: false,
            content: '',
        };
    },
    computed: {
    	faqs(){
    		return this.$store.state.faqs;	
    	}
    },
    created(){
    	this.$store.dispatch('getFaqs');
    },
    components: {
        quillEditor,
    },
    methods: {
        ShowFaqsDialog() {
        	// console.log(faqs);
        	this.content = this.faqs;
            this.ShowAddFaqsDialog = true;
        },
        submitFaqs(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    let fd = new FormData(this.$refs.faqsForm);
                    fd.append('content',this.content);
                    let data = {
                        fd: fd,
                        notify: this.$vs.notify,
                    };
                    this.$store.dispatch('updateFaqs', data).then(res => {
                        if (res.status) {
                            this.ShowAddFaqsDialog = false;
                        }
                    });

                }
            })
        }
    }
}

</script>
<style>
#faq-editor .ql-editor {
    min-height: 380px;
}

</style>
