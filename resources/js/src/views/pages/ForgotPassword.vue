<template>
    <div style="background-image: url(./public/images/bg.jpg) !important;" class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-auto sm:m-0 m-4">
            <vx-card v-if="forgotPassword == true">
                <div style="box-shadow: 2px 4px 20px 5px !important;" slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col sm:w-full md:w-full lg:w-full">
                            <form ref="loginForm" autocomplete="off" data-vv-scope="loginForm" @submit.prevent="onSubmit($event, 'loginForm')">
                                <div class="p-8">
                                    <div class="vx-card__title mb-8">
                                        <img class="m-auto w-2/5" :src="'./public/images/33i.png'">
                                        <h4 class="mb-4">Recover Password</h4>
                                        <p>Put your registered email to recover your password.</p>
                                    </div>
                                    <vs-input v-validate="'required|email'" icon="icon icon-user" name="email" icon-pack="feather" label-placeholder="Email" v-model="email" class="w-full no-icon-border" data-vv-scope="loginForm"/>
                                    <span class="text-danger" v-show="errors.has('loginForm.email')" v-html="errors.first('loginForm.email')"></span>
                                    
                                    
                                    <vs-row>
                                        <vs-col class="mt-base" vs-w="12">
                                            <vs-button to="/" type="border" color="primary">Back to Login</vs-button>

                                            <vs-button button="submit" color="#0b586a" gradient-color-secondary="#d08683" type="gradient" class="float-right">Send code</vs-button>
                                        </vs-col>
                                    </vs-row>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </vx-card>

             <vx-card v-if="forgotPassword == false">
                <div style="box-shadow: 2px 4px 20px 5px !important;" slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col sm:w-full md:w-full lg:w-full">
                            <form ref="verifyForm" autocomplete="off" data-vv-scope="verifyForm" @submit.prevent="verifyCode($event, 'verifyForm')">
                                <div class="p-8">
                                    <div class="vx-card__title mb-8">
                                        <img class="m-auto w-2/5" :src="'./public/images/33i.png'">
                                        <h4 class="mb-4">Verify code</h4>
                                        <p>Put your correct verification code and new password.</p>
                                    </div>
                                    <vs-row>
                                        <vs-col class="" vs-w="12">
                                            <vs-input v-validate="'required|digits:4'" icon="icon icon-more-horizontal" name="code" icon-pack="feather" label-placeholder="Verification code" v-model="code" class="w-full no-icon-border" data-vv-scope="verifyForm"/>
                                            <span class="text-danger" v-show="errors.has('verifyForm.code')" v-html="errors.first('verifyForm.code')"></span>
                                        </vs-col>
                                    </vs-row>

                                    <vs-row>
                                        <vs-col class="mt-5" vs-w="12">
                                            <vs-input type="password" v-validate="'required|min:6|max:12'" icon="icon icon-key" name="password" icon-pack="feather" label-placeholder="Password" v-model="password" class="w-full no-icon-border" data-vv-scope="verifyForm"  ref="password"/>
                                            <span class="text-danger" v-show="errors.has('verifyForm.password')" v-html="errors.first('verifyForm.password')"></span>
                                        </vs-col>
                                    </vs-row>

                                    <vs-row>
                                        <vs-col class="mt-5" vs-w="12">
                                            <vs-input type="password" v-validate="'required|confirmed:password'" icon="icon icon-key" name="confirm_password" icon-pack="feather" label-placeholder="Confirm Password" v-model="confirm_password" class="w-full no-icon-border" data-vv-scope="verifyForm" data-vv-as="password"/>
                                            <span class="text-danger" v-show="errors.has('verifyForm.confirm_password')" v-html="errors.first('verifyForm.confirm_password')"></span>
                                        </vs-col>
                                    </vs-row>
                                    
                                    <vs-row>
                                        <vs-col class="mt-base" vs-w="12">
                                            <vs-button button="submit" color="#0b586a" gradient-color-secondary="#d08683" type="gradient" class="float-right">Save Changes</vs-button>
                                        </vs-col>
                                    </vs-row>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            code: '',
            password: '',
            confirm_password: '',
            forgotPassword: true,

        }
    },
   created(){
        if(localStorage.getItem('admin')) {
            this.$router.push('/dashboard');
        }
   },
    methods: {
        onSubmit(e, scope) {
           
            self = this;
            this.$validator.validateAll(scope).then(result => {
                if (result) {
            this.$vs.loading({
                text: 'Please wait...'
            });

                    var fd = new FormData(this.$refs.loginForm);
                    axios.post('forgot-password', fd).then((res) => {
                        this.$vs.loading.close();
                        if (res.data.status == 'error') {
                            this.$vs.notify({
                                'color': 'danger',
                                'text': res.data.msg,
                                'position': 'top-right',
                                'icon': 'warning'
                            });
                        } else {
                            this.forgotPassword = false;
                            this.$vs.notify({
                                'color': 'success',
                                'text': res.data.msg,
                                'position': 'top-right',
                                'icon': 'check_box'
                            });
                            // this.$router.push('/');
                        }
                    })
                }
            })
        },

        verifyCode(e, scope){
            this.$validator.validateAll(scope).then(result=>{
                if(result){
                    this.$vs.loading({
                        text: 'Please wait...'
                    });
                    var fd = new FormData(this.$refs.verifyForm);
                    fd.append('email', this.email);
                    axios.post('verify-code-and-change-password', fd).then((res) => {
                        this.$vs.loading.close();
                        if (res.data.status == false) {
                            this.$vs.notify({
                                'color': 'danger',
                                'text': res.data.msg,
                                'position': 'top-right',
                                'icon': 'warning'
                            });
                        } else {
                            this.forgotPassword = false;
                            this.$vs.notify({
                                'color': 'success',
                                'text': res.data.msg,
                                'position': 'top-right',
                                'icon': 'check_box'
                            });
                            this.$router.push('/');
                        }
                    })
                }
            });
        }
    }
}

</script>
<style scoped>
/*.p-8 {
    padding: 1.9rem !important;
}
*/
</style>
