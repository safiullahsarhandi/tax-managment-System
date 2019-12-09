<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->
<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img style="width: 100%;" src="resources/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <form ref="loginForm" autocomplete="off" @submit.prevent="onSubmit($event)">
                                <div class="p-8">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Login</h4>
                                        <p>Welcome back, please login to your account.</p>
                                    </div>
                                    <vs-input v-validate="'required|email'" icon="icon icon-user" name="email" icon-pack="feather" label-placeholder="Email" v-model="email" class="w-full no-icon-border" />
                                    <span class="text-danger" v-show="errors.has('email')" v-html="errors.first('email')"></span>
                                    <vs-input v-validate="'required|min:6'" type="password" name="password" icon="icon icon-lock" icon-pack="feather" label-placeholder="Password" v-model="password" class="w-full mt-6 no-icon-border" />
                                    <span class="text-danger" v-show="errors.has('password')" v-html="errors.first('password')"></span>
                                    <div class="flex flex-wrap justify-between my-5">
                                        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                                        <router-link to="#">Forgot Password?</router-link>
                                    </div>
                                    <!-- <vs-button type="border">Register</vs-button> -->
                                    <vs-row>
                                        <vs-col vs-w="12">
                                            <vs-button button="submit" color="#e5554a" gradient-color-secondary="#e5554a" type="gradient" class="float-right">Login</vs-button>
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
            password: '',
            checkbox_remember_me: false
        }
    },
   created(){
        if(localStorage.getItem('admin')) {
            this.$router.push('/dashboard');
        }
   },
    methods: {
        onSubmit(e) {
            self = this;
            this.$validator.validateAll().then(result => {
                if (result) {
            this.$vs.loading({
                type: 'sound',
                text: 'Loading...'
            });

                    var fd = new FormData(this.$refs.loginForm);
                    axios.post('login', fd).then((res) => {
                        if (res.data.status == 'error') {
                            this.$vs.notify({
                                'color': 'danger',
                                'text': res.data.msg,
                                'position': 'top-right',
                                'icon': 'warning'
                            });
                        } else {
                            this.$vs.notify({
                                'color': 'success',
                                'text': res.data.msg,
                                'position': 'top-right',
                                'icon': 'check_box'
                            });
                            var adminData = res.data.session;
                            localStorage.setItem('admin', adminData.manager_id);
                            this.$store.state.AppActiveUser = adminData;
                            this.$router.push('/dashboard');
                        }
                        this.$vs.loading.close()
                    })
                }
            })
        },
    }
}

</script>
<style scoped>
/*.p-8 {
    padding: 1.9rem !important;
}
*/
</style>
